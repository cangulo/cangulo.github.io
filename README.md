# Carlos Angulo Personal Blog

Personal blog/site of Carlos Angulo, built with **Docusaurus 3** and hosted on GitHub Pages:

https://cangulo.github.io/

It's a **pnpm workspace**: the site at the repo root, plus `packages/components`
(`@cangulo-blog/components`, published to npm from here).

## Development

```bash
pnpm install    # install deps
pnpm start      # local dev server
pnpm build      # production build -> build/
pnpm test       # smoke test key routes (needs a build first)
```

Requires Node 20 (see `.nvmrc`) and pnpm.

See `CLAUDE.md` for an orientation to the codebase (content model, the components package,
deploy flow, and security automation). `MAINTENANCE.md` is the historical record of the
completed maintenance overhaul.
