// Tiny smoke test: serve build/ and assert key routes return 200 with expected text.
// Run after `pnpm build`. Exits non-zero if any route fails.
import { serveBuild } from './serve-build.mjs';

const BUILD_DIR = new URL('../build', import.meta.url).pathname;

const ROUTES = [
  { path: '/', expect: 'Carlos Angulo' },
  { path: '/about', expect: 'Certifications' },
  { path: '/blog', expect: 'Posts' },
  { path: '/cheatsheets', expect: 'Cheatsheets' },
  { path: '/projects', expect: 'Projects' },
  { path: '/meetups', expect: 'Meetups' },
  { path: '/notes', expect: 'Notes' },
  { path: '/rss', expect: 'RSS' },
];

const { server, port } = await serveBuild(BUILD_DIR);

let failed = false;
for (const { path, expect } of ROUTES) {
  const res = await fetch(`http://localhost:${port}${path}`);
  const body = res.ok ? await res.text() : '';
  const ok = res.status === 200 && body.includes(expect);
  console.log(`${ok ? 'PASS' : 'FAIL'} ${path} (status ${res.status}${ok ? '' : `, expected text ${JSON.stringify(expect)}`})`);
  if (!ok) failed = true;
}

server.close();
process.exit(failed ? 1 : 0);
