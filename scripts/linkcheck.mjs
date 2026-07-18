// Internal link check: serve build/ (with GitHub Pages-style resolution) and
// crawl it with linkinator. External links are skipped on purpose — link rot on
// other people's sites must not turn CI red. Run after `pnpm build`.
import { LinkChecker } from 'linkinator';
import { serveBuild } from './serve-build.mjs';

// Proxy env vars would intercept localhost requests in some environments, and
// every checked link is local anyway.
for (const key of Object.keys(process.env)) {
  if (/proxy/i.test(key)) delete process.env[key];
}

const BUILD_DIR = new URL('../build', import.meta.url).pathname;
const { server, port } = await serveBuild(BUILD_DIR);
const root = `http://localhost:${port}`;

const checker = new LinkChecker();
const result = await checker.check({
  path: root,
  recurse: true,
  linksToSkip: async (link) => !link.startsWith(root),
});

const broken = result.links.filter((link) => link.state === 'BROKEN');
console.log(`Scanned ${result.links.length} links; ${broken.length} broken.`);
for (const link of broken) {
  console.log(`  [${link.status}] ${link.url} (on ${link.parent})`);
}

server.close();
process.exit(broken.length === 0 ? 0 : 1);
