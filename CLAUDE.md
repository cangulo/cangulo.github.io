# CLAUDE.md

Orientation for working in this repository. This describes the **current steady state** of
the site. A full maintenance overhaul was completed (pnpm migration, official Pages deploy,
smoke tests, Docusaurus 3 upgrade, the `@cangulo-blog/components` in-repo package, and
security automation); its history is recorded in `MAINTENANCE.md` (kept as a historical
record, not a roadmap).

## What this is

Carlos Angulo's personal blog/site, built with **Docusaurus 3** and hosted on GitHub Pages
at https://cangulo.github.io. The config lives in **`docusaurus.config.mjs`** (ESM — the
remark plugins are ESM-only). TypeScript is used for editor tooling only — the codebase is
not type-checked as part of the build (`tsconfig.json` extends `@docusaurus/tsconfig`;
`pnpm typecheck` runs it manually).

This is a **pnpm workspace**: the site at the repo root, plus `packages/components`
(`@cangulo-blog/components`, published to npm from here — see below).

## Prerequisites

- Node **20** (pinned via `.nvmrc`; `>=20` in `package.json` `engines`). CI runners now
  default to Node 24 and some actions print a "Node 20 is deprecated" warning — benign for
  now; bumping `.nvmrc` to 22 is the eventual path (would also let the components release use
  `npm@latest` instead of the pinned `npm@11`; see the publishing note below).
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
reuse in other blogs.

**Publishing** (`.github/workflows/release-components.yml`): bump the `version` in
`packages/components/package.json` on `main` and it builds, tests, publishes to npm, and
tags `components-vX.Y.Z` + a GitHub release. Auth is **npm Trusted Publishing (OIDC)** — the
package is configured on the registry to trust this workflow, so there is **no npm token or
secret** (`id-token: write` + provenance is automatic). OIDC needs npm ≥ 11.5.1, so the job
upgrades to `npm@11` first (npm 12 requires Node ≥ 22; we pin Node 20). The publish is
idempotent (skips if the version is already on the registry).

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
is no `gh-pages` branch involved anymore. `main` is protected by a repo **ruleset** that
requires the **`Build`** status check (so nothing merges on red CI) and PRs (squash only).

## Security & automation

- **Dependabot** (`.github/dependabot.yml`): monthly, for the `npm` (covers pnpm) and
  `github-actions` ecosystems. Minor/patch bumps are **grouped**; majors arrive as
  individual PRs for review.
- **Auto-merge** (`.github/workflows/dependabot-auto-merge.yml`): Dependabot **minor/patch**
  PRs get auto-merge (squash) via `dependabot/fetch-metadata`; they merge themselves once the
  required `Build` check is green. Majors are left for a human.
- **`typescript` major is ignored** in `dependabot.yml`: TS 7 removed `baseUrl`, which
  `@docusaurus/tsconfig` still relies on, so the major can't build until Docusaurus ships a
  TS7-ready config. `typecheck` is editor-only (not in CI), so there's no urgency — remove
  the ignore to revisit once Docusaurus supports TS7.
- **CodeQL** (`.github/workflows/codeql.yml`): JS/TS scan on PRs + monthly.
- **Audit** (`.github/workflows/audit.yml`): scheduled `pnpm audit --prod`, informational.
- `SECURITY.md` documents reporting + the GitHub Pages CSP limitation.

## Maintenance history

The completed overhaul (pnpm migration, official Pages Actions deploy, smoke tests,
temporary decoupling then in-repo re-integration of `@cangulo-blog/components`, Docusaurus 3
upgrade, and the security automation above) is recorded in `MAINTENANCE.md` at the repo
root — a historical record of the decisions made and the order they shipped. Consult it for
context before large structural changes.
