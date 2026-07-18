// Shared static server for the smoke tests. Mimics GitHub Pages resolution:
// /foo serves foo, foo/index.html, or foo.html — whichever exists first.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, normalize } from 'node:path';

const TYPES = { html: 'text/html', css: 'text/css', js: 'text/javascript', xml: 'application/xml', svg: 'image/svg+xml', json: 'application/json' };

export async function serveBuild(buildDir) {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, 'http://localhost');
    // Treat /foo/ like /foo — linkinator generates trailing-slash variants that
    // no page actually links to, and Docusaurus builds with trailingSlash: false.
    const pathname = decodeURIComponent(url.pathname).replace(/(?<=.)\/+$/, '');
    const file = normalize(join(buildDir, pathname));
    if (!file.startsWith(buildDir)) {
      res.writeHead(403).end();
      return;
    }
    for (const candidate of [file, join(file, 'index.html'), `${file}.html`]) {
      try {
        const body = await readFile(candidate);
        const ext = candidate.split('.').pop();
        res.writeHead(200, { 'content-type': TYPES[ext] ?? 'application/octet-stream' }).end(body);
        return;
      } catch {
        /* try next candidate */
      }
    }
    res.writeHead(404).end();
  });
  await new Promise((resolve) => server.listen(0, resolve));
  return { server, port: server.address().port };
}
