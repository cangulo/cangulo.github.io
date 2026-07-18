# CLAUDE.md

Orientation for working in this repository. This describes the **current** state of the
site; a maintenance overhaul is planned and will update this file phase by phase (see
"Maintenance plan" below).

## What this is

Carlos Angulo's personal blog/site, built with **Docusaurus 2** (currently a pre-release
`2.0.0-beta.13`) and hosted on GitHub Pages at https://cangulo.github.io. TypeScript is used
for editor tooling only — the codebase is not type-checked as part of the build (`tsconfig.json`
extends `@tsconfig/docusaurus`; `npm run typecheck` runs it manually).

This is a single package at the repo root — not a monorepo.

## Prerequisites

- Node **20+** (pinned via `.nvmrc`; also declared in `package.json` `engines`).
- **pnpm** (pinned via `package.json` `packageManager`), using the committed
  `pnpm-lock.yaml`. `.npmrc` sets `node-linker=hoisted` so `node_modules` stays flat, like
  npm's — this avoids Docusaurus's occasional phantom-dependency resolution issues under
  pnpm's default symlinked layout.

## Common commands

```bash
pnpm install    # install deps (uses pnpm-lock.yaml)
pnpm start      # local dev server (docusaurus start --no-open)
pnpm build      # production build -> build/
pnpm serve      # serve a production build locally
pnpm typecheck  # tsc, editor-only type checking
pnpm clear      # clear Docusaurus caches
pnpm test       # smoke test: key routes of build/ return 200 + expected text
pnpm test:smoke # linkinator crawl of build/ (internal links only)
```

Both test commands require a `pnpm build` first — they run against `build/`.

## Content model

The site has **no single blog** — it's six independent
`@docusaurus/plugin-content-blog` instances configured in `docusaurus.config.js`
(`preset-classic` itself has `docs: false, blog: false`):

| Plugin id     | Source dir          | Route            |
|---------------|----------------------|-------------------|
| `posts`       | `blog/posts`         | `/blog`           |
| `cheatsheets` | `blog/cheatsheets`   | `/cheatsheets`    |
| `projects`    | `blog/projects`      | `/projects`       |
| `meetups`     | `blog/meetups`       | `/meetups`        |
| `books`       | `blog/books`         | `/books`          |
| `values`      | `blog/values`        | `/values`         |

Standalone pages live in `src/pages/` (`index.tsx`, `about.mdx`, `rss.mdx`). Static assets
(including `.nojekyll`) live in `static/`. `blog/_template.md` is the starting point for a
new post; `blog/authors.yml` is shared across all six plugins.

`onBrokenLinks: 'throw'` — a broken internal link fails the build, so run `pnpm build`
locally before pushing content changes.

## Key coupling: `@cangulo-blog/components`

Every one of the six blog plugins injects common MDX imports/JSX (author bio, contact info,
share buttons, comments) via `beforeDefaultRemarkPlugins`/`remarkPlugins` in
`docusaurus.config.js`, all sourced from the owner's own package `@cangulo-blog/components`.
`src/pages/about.mdx` and `blog/_template.md` also import fragments from it directly, and
`CaptionDocusaurus` (from the same package) is used directly inside several content files
under `blog/`. Changes to blog post structure, `about.mdx`, or the injected
header/footer should account for this package.

## Deploy flow

`.github/workflows/update-page.yml` uses the official GitHub Pages Actions flow:
- Runs on push to `main`, on pull requests (build-only, no deploy), and via manual dispatch.
- **`build`** job: checks out the repo, sets up pnpm + the pinned Node version, runs
  `pnpm install --frozen-lockfile`, builds the site, runs the smoke tests (`pnpm test` +
  `pnpm test:smoke`), and uploads `build/` via `actions/upload-pages-artifact`.
- **`deploy`** job (push or manual dispatch on `main`; skipped for PRs): publishes the
  uploaded artifact via `actions/deploy-pages`.

GitHub Pages is configured (repo Settings → Pages) with **Source: GitHub Actions** — there
is no `gh-pages` branch involved anymore.

## Maintenance plan

A full maintenance overhaul (pnpm migration, CI rewrite to the official GitHub Pages
Actions flow, smoke tests, temporary decoupling from `@cangulo-blog/components`, upgrade to
Docusaurus 3, and hands-off security automation) is planned and tracked in `MAINTENANCE.md`
at the repo root. Consult it before making structural changes — it records the decisions
already made and the phased execution order so work doesn't conflict with it.
