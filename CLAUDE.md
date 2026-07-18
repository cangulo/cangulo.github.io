# CLAUDE.md

Orientation for working in this repository. This describes the **current** state of the
site; a maintenance overhaul is planned and will update this file phase by phase (see
"Maintenance plan" below).

## What this is

Carlos Angulo's personal blog/site, built with **Docusaurus 2** (currently a pre-release
`2.0.0-beta.13`) and hosted on GitHub Pages at https://cangulo.github.io. TypeScript is used
for editor tooling only — the codebase is not type-checked as part of the build (`tsconfig.json`
extends `@tsconfig/docusaurus`; `npm run typecheck` runs it manually).

This is a single npm package at the repo root — not a monorepo.

## Prerequisites

- Node **14** (pinned via `.nvmrc`). This is EOL upstream; do not assume a newer Node works
  without testing.
- npm, using the committed `package-lock.json`.

## Common commands

```bash
npm install        # install deps (uses package-lock.json)
npm start          # local dev server (docusaurus start --no-open)
npm run build      # production build -> build/
npm run serve      # serve a production build locally
npm run typecheck  # tsc, editor-only type checking
npm run clear      # clear Docusaurus caches
```

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

`onBrokenLinks: 'throw'` — a broken internal link fails the build, so run `npm run build`
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

`.github/workflows/update-page.yml` triggers on push to `main`:
1. Builds the site and uploads it as a workflow artifact.
2. A second job checks out the `gh-pages` branch, wipes it, downloads the artifact, and
   commits/pushes the built output as `cangulo_gh_action`.

GitHub Pages serves from the `gh-pages` branch. This workflow currently relies on
deprecated `actions/upload-artifact@v2` / `download-artifact@v2` actions and `npm install`
(no lockfile-enforced install, no pinned Node) — see the maintenance plan for the planned
fix.

## Maintenance plan

A full maintenance overhaul (pnpm migration, CI rewrite to the official GitHub Pages
Actions flow, smoke tests, temporary decoupling from `@cangulo-blog/components`, upgrade to
Docusaurus 3, and hands-off security automation) is planned and tracked in `MAINTENANCE.md`
at the repo root. Consult it before making structural changes — it records the decisions
already made and the phased execution order so work doesn't conflict with it.
