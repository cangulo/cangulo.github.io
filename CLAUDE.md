# CLAUDE.md

Orientation for working in this repository. This describes the **current** state of the
site; a maintenance overhaul is planned and will update this file phase by phase (see
"Maintenance plan" below).

## What this is

Carlos Angulo's personal blog/site, built with **Docusaurus 3** and hosted on GitHub Pages
at https://cangulo.github.io. The config lives in **`docusaurus.config.mjs`** (ESM — the
remark plugins are ESM-only). TypeScript is used for editor tooling only — the codebase is
not type-checked as part of the build (`tsconfig.json` extends `@docusaurus/tsconfig`;
`pnpm typecheck` runs it manually).

This is a **pnpm workspace**: the site at the repo root, plus `packages/components`
(`@cangulo-blog/components`, published to npm from here — see below).

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
`@docusaurus/plugin-content-blog` instances configured in `docusaurus.config.mjs`
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

## `@cangulo-blog/components` — lives in this repo

This is a small **pnpm workspace**: the site is the root package, and
`packages/components` is `@cangulo-blog/components` — the owner's shared blog package
(React caption/share components, `aboutme_*` MDX fragments, MDX v3 remark plugins, brand
CSS), consumed by the site via `workspace:*` and **published to npm from this repo** for
reuse in other blogs (`.github/workflows/release-components.yml`: bump the version in
`packages/components/package.json` on `main` and it publishes + tags `components-vX.Y.Z`).

How the site uses it (`docusaurus.config.mjs`):
- `addJsxCode` injects the AboutMe/Contact/Share/Comments header & footer into every post
  **that has a truncate marker**; `alignTableCenter` centers multi-row tables.
- `/about` (`src/pages/about.mdx`) imports the `aboutme_*` fragments directly.
- `CaptionDocusaurus` is imported explicitly by the content files that use it (it is not
  auto-injected).
- The brand CSS comes from `@cangulo-blog/components/css/blog-styles.css` in `customCss`.

Changing post structure, `about.mdx`, or the injected header/footer usually means touching
`packages/components` — its remark plugins have unit tests (`pnpm --filter
@cangulo-blog/components test`), which also run as part of `pnpm test`.

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
