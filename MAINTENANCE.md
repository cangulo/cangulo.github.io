# Maintenance Overhaul Plan — cangulo.github.io

> **STATUS: COMPLETE.** All phases (1–7) shipped as of 2026-07-19: pnpm workspace, official
> GitHub Pages Actions deploy, smoke tests, Docusaurus 3, the in-repo
> `@cangulo-blog/components` package (published to npm via OIDC), and Dependabot/CodeQL/audit
> automation. This document is retained as a **historical record** of the review and the
> decisions made — not an active roadmap. See `CLAUDE.md` for the current steady state.

> Full record of the maintenance review: repository analysis, the decisions taken (with the
> options that were on the table), and the phased execution plan. Each phase shipped as its
> own PR.

- **Repo:** https://github.com/cangulo/cangulo.github.io
- **Live site:** https://cangulo.github.io
- **Reviewed:** 2026-07-18
- **Overarching goal:** reach a modern, stable, low-touch state where the site keeps itself
  up to date and deploys safely with near-zero owner involvement (the repo is edited
  infrequently, so *minimizing ongoing maintenance* is the top priority).

---

## 1. Context — why this work is needed

The site had drifted into a fragile, high-maintenance state:

- **CI is effectively broken.** `.github/workflows/update-page.yml` uses the
  **decommissioned** `actions/upload-artifact@v2` / `download-artifact@v2` (GitHub shut
  these down in 2025), so pushes to `main` no longer deploy reliably. It also uses
  `npm install` (not `npm ci`) and has **no `setup-node`** step (builds run on whatever Node
  the runner happens to ship).
- **Stale, pre-release stack.** Docusaurus `2.0.0-beta.13` (a *beta*), React 17, MDX v1,
  `prism-react-renderer` v1, a vestigial `docusaurus@1` dep, and a mismatched
  `@docusaurus/module-type-aliases@2.0.0-beta.9`. `.nvmrc` pins **Node 14 (EOL)**; no
  `engines` field.
- **Fragile supply chain.** `plugin-image-zoom` is pulled from an unpinned GitHub fork
  (`github:ataft/plugin-image-zoom`); every page injects the owner's own
  `@cangulo-blog/components` package.
- **No safety net.** No tests, no Dependabot, no `npm audit`, no CodeQL.

---

## 2. Repository analysis (findings)

### Project
- **Docusaurus 2 (beta) static site**, TypeScript for editor experience only (not compiled;
  `tsconfig.json` extends `@tsconfig/docusaurus`). Babel via the Docusaurus preset.
- **Single package** (not a monorepo/workspaces). One `package.json` at the root.
- **npm** with a committed `package-lock.json` (lockfileVersion 3, ~22.8k lines). No
  `.npmrc`, no `yarn.lock`, no `pnpm-lock.yaml`.
- `.nvmrc` = `14`. No `engines`, no `packageManager` field.

### Dependencies of note (`package.json`)
- `@docusaurus/core` / `preset-classic` `^2.0.0-beta.13`; `module-type-aliases`
  `2.0.0-beta.9` (mismatched).
- `react` / `react-dom` `^17`, `@mdx-js/react` `^1.6.21`, `prism-react-renderer` `^1.2.1`,
  `clsx` `^1`.
- `mdx-mermaid` `^1.1.1` + `mermaid` `^8.13.3` (Mermaid diagrams).
- `plugin-image-zoom` → `github:ataft/plugin-image-zoom` (unpinned git dep).
- `@cangulo-blog/components` `^0.0.29` (owner's own package, injected into every page).
- `@hyvor/hyvor-talk-react` `^0.0.3` (comments), `react-share` `^4.4.0` (share buttons).
- `docusaurus` `^1.14.7` — **vestigial v1**, unused.

### Content model
- Six `@docusaurus/plugin-content-blog` instances in `docusaurus.config.js`
  (`preset-classic` has `docs:false, blog:false`):
  `blog/posts`→`/blog`, `blog/cheatsheets`, `blog/projects`, `blog/meetups`, `blog/books`,
  `blog/values`.
- Standalone pages in `src/pages/` (`index.tsx`, `about.mdx`, `rss.mdx`); assets in
  `static/` (incl. `.nojekyll`). ~46 routed pages total.
- `onBrokenLinks: 'throw'` — a broken internal link already fails the build.

### CI / deploy (`.github/workflows/update-page.yml`)
- Trigger: `push` to `main` only (no PR builds, no `workflow_dispatch`).
- Job 1 `create-artifact`: `checkout@v4` → `npm install` → `npm run build` →
  `upload-artifact@v2` (**deprecated**).
- Job 2 `update-gh-page`: checks out `gh-pages`, `rm -rf ./**`, `download-artifact@v2`
  (**deprecated**), commits + pushes to `gh-pages` as `cangulo_gh_action`.
- No `dependabot.yml`, no CodeQL, no `npm audit`, no `.github` beyond this one workflow.

### Testing & security posture
- **No tests** of any kind (no Jest/Vitest/Cypress/Playwright, no `test` script).
- **No secrets committed.** `hyvorTalkSiteId: 1142` is a public identifier. `.gitignore`
  correctly excludes `node_modules`, `/build`, `.env*.local`.
- External runtime surface: Hyvor Talk, Giphy iframes (`src/components/gif.js`), and the
  injected `@cangulo-blog/components`. No analytics. No CSP (GitHub Pages can't set real
  headers).

### `@cangulo-blog/components` usage (mapped precisely)
- `docusaurus.config.js`: `addJsxCode` + `alignTableCenter` remark plugins; `commonImports`
  / `jsxElementsEnding` injection arrays (used by all six blog plugins); `blog-styles.css`
  in `customCss`.
- `src/pages/about.mdx`: imports 5 text fragments from the package.
- `blog/_template.md`: imports `AboutMe`, `CaptionDocusaurus`, `ShareDocusaurus`.
- **`CaptionDocusaurus` is used directly in 9 content files (18×)** — removing the package
  naively would break the build for all of them.
- `react-share` is **not** imported anywhere in `src/` — it was only used via the package's
  `ShareDocusaurus`, so it becomes dead weight once the package is disabled.

---

## 3. Decisions log

Decisions taken interactively during the review. Each lists the options considered and the
**chosen** one.

### Round 1 — scope & strategy
| # | Question | Options | Decision |
|---|----------|---------|----------|
| 1 | How far to take the upgrade? | D3 (recommended) / D2 stable only / just fix what's broken | **Go to Docusaurus 3** (React 18, Node 20) — lowest long-term maintenance |
| 2 | Can `@cangulo-blog/components` be updated for D3? | Yes / owner but rather not / not sure | **Yes, owner controls & can update it** (later superseded — see Round 3) |
| 3 | Deploy method going forward | Official Pages Actions (recommended) / keep `gh-pages` push | **Switch to official GitHub Pages Actions** (needs one-time Pages source setting change) |
| 4 | How hands-off should updates be? | Auto-merge safe (recommended) / PRs I review / grouped monthly | **Auto-merge safe (minor/patch) updates**, guarded by smoke tests |

### Round 2 — implementation choices
| # | Question | Options | Decision |
|---|----------|---------|----------|
| 5 | `plugin-image-zoom` (unpinned fork) | Replace with published (recommended) / keep fork / drop feature | **Replace with published `docusaurus-plugin-image-zoom`** (pinned) |
| 6 | Delivery across PRs | Phased PRs (recommended) / one big PR / two PRs | **Phased PRs** — one per phase |
| 7 | Mermaid | Built-in `@docusaurus/theme-mermaid` (recommended) / keep `mdx-mermaid` | **Use built-in Mermaid**; drop `mdx-mermaid` + `mermaid` |
| 8 | Smoke-test depth | Lightweight build + link crawl (recommended) / add Playwright | **Lightweight** (build + linkinator + tiny route check); no Playwright |

### Round 3 — disable `@cangulo-blog/components`
The owner decided to **temporarily disable `@cangulo-blog/components`** and reintegrate a
D3-compatible version in a **separate later iteration**, *after* all phases. This removes
the D3 upgrade's main blocker (supersedes Round 1 #2).

| # | Question | Options | Decision |
|---|----------|---------|----------|
| 9 | Per-post injected header/footer during the interim | Keep Hyvor comments only / **full clean removal** (recommended) / keep comments + share | **Full clean removal** — drop AboutMe/Contact/Share/Comments injection until reintegration |
| 10 | `/about` page during the interim | Inline real content (recommended) / **minimal placeholder** | **Minimal placeholder** (keep the already-local Certifications section) |

**Interim behavior (all restored on reintegration):** posts lose the auto-injected
AboutMe/Contact/Share/**Hyvor Comments** header & footer; `/about` is a minimal placeholder;
`CaptionDocusaurus` is replaced by a small **local** shim so the build stays green; table
auto-centering and `blog-styles.css` are dropped (cosmetic).

### Package manager
- Migrate npm → **pnpm** (requested up front).

---

## 4. Phased plan

Each phase leaves the site building and deployable, and ships as its **own PR**. Ordered so
the safety net (working CI + smoke tests) exists *before* the risky framework upgrade and
*before* auto-merge is enabled.

| Phase / PR | Deliverable | Risk | Depends on |
|-----------|-------------|------|------------|
| 1 | `CLAUDE.md` | none | — |
| 2 | Migrate to pnpm + rewrite CI (official Pages deploy) | low–med | — |
| 3 | Minimal smoke tests wired into CI | low | 2 |
| 4 | Decouple from `@cangulo-blog/components` (temporary) | med | 3 |
| 5 | Docusaurus 3 + dependency updates | **high** | 2, 3, 4 |
| 6 | Security + hands-off automation (Dependabot auto-merge, CodeQL, audit) | low | 2, 3 |

> **Follow-up (out of scope here):** a later, separate iteration reintegrates a
> D3-compatible `@cangulo-blog/components`, restoring the injected footer, real `/about`
> content, captions via the package, and table styling.

### Phase 1 — `CLAUDE.md`
Short, operational orientation file at the repo root: what the site is, prerequisites,
common commands, the content model (six blog-plugin instances), key couplings, deploy flow,
and a pointer to this plan. Describes the **current** state; later phases update it.

### Phase 2 — Migrate to pnpm + rewrite CI
**pnpm migration:**
- Add `"packageManager": "pnpm@9.x"` and `"engines": { "node": ">=20" }` to `package.json`.
- Generate `pnpm-lock.yaml` (`pnpm import` from `package-lock.json`, then `pnpm install`);
  **delete `package-lock.json`**.
- Add `.npmrc` with `node-linker=hoisted` (makes pnpm behave like npm's flat
  `node_modules` — avoids Docusaurus phantom-dependency "module not found" issues; lowest
  maintenance).
- Update `README.md` / `CLAUDE.md` commands to `pnpm`.

**Node:** `.nvmrc` `14` → `20`.

**Rewrite `.github/workflows/update-page.yml`** to the official Pages flow:
- Triggers: `push` to `main`, **`pull_request`** (build-only gate), `workflow_dispatch`.
- Least-privilege `permissions:` (`contents: read`; deploy job gets `pages: write` +
  `id-token: write`); Pages `concurrency` group.
- Build job: `checkout@v4` → `pnpm/action-setup@v4` → `setup-node@v4`
  (`node-version-file: .nvmrc`, `cache: pnpm`) → `pnpm install --frozen-lockfile` →
  `pnpm build` → (Phase 3) smoke → `actions/upload-pages-artifact@v3` (`path: build`).
- Deploy job (only on push to `main`, `needs: build`): `actions/deploy-pages@v4`.
- Remove the `rm -rf` / bot-commit / `gh-pages` push logic entirely.

**One-time GitHub setting (owner, in UI):** Settings → Pages → Source = **"GitHub Actions"**.
After the first successful deploy, the `gh-pages` branch may be deleted (keep briefly for
rollback).

### Phase 3 — Minimal smoke tests
Lightest trustworthy "the site still loads" gate:
1. **Build-time link integrity (free):** keep `onBrokenLinks: 'throw'`.
2. **Crawl built output with `linkinator`** (one dev dep, no browser): script
   `"test:smoke": "linkinator ./build --recurse --silent"` (optionally `--skip` flaky
   external hosts like giphy/linkedin).
3. **Tiny key-route assertion:** `scripts/smoke.mjs` (~15 lines) serves `build/` and asserts
   `/`, `/about`, `/blog`, `/cheatsheets`, `/projects`, `/rss` return HTTP 200 with expected
   text. Wire as `"test"`.

CI: run `pnpm test` + `pnpm test:smoke` after `pnpm build` in the build job (gates PR merge
and `main` deploy).

### Phase 4 — Decouple from `@cangulo-blog/components` (temporary)
Remove the runtime dependency while keeping the build green:
1. **Local `CaptionDocusaurus` shim** (`src/components/CaptionDocusaurus.jsx`) matching the
   prop API (`label`, `linkIsRelative`, `link`); add an explicit import to each of the 9
   content files that use it.
2. **`docusaurus.config.js`:** remove the package remark-plugin require, the
   `commonImports` / `jsxElementsEnding` arrays, the `beforeDefaultRemarkPlugins`
   (`alignTableCenter`, `addJsxCode`) + `addJsxCode` entries across all six blog plugins,
   and the `blog-styles.css` `customCss` entry. Keep `mdx-mermaid` / `remark-code-import`
   (handled in Phase 5).
3. **`src/pages/about.mdx`:** drop the 5 package imports → minimal placeholder; keep the
   local Certifications section.
4. **`blog/_template.md`:** drop package imports; point any caption example at the local
   shim.
5. **`package.json`:** remove `@cangulo-blog/components` **and** `react-share` (now unused);
   refresh the lockfile.

Verify: `pnpm build` succeeds with **zero** references to `@cangulo-blog/components`; smoke
green; captions still render.

### Phase 5 — Docusaurus 3 + dependency updates
No longer blocked on any components-package release. Follow the official
[v2→v3 migration guide](https://docusaurus.io/docs/migration).
- `@docusaurus/*` → `^3.x` (same version across core/preset/module-type-aliases).
- `react`/`react-dom` → `^18`; `@mdx-js/react` → `^3` (MDX v1→v3 is the biggest breaking
  change — sweep `.mdx` for unescaped `<`/`{`, comments, self-closing tags, admonitions);
  `prism-react-renderer` → `^2` (theme import paths change); `clsx` → `^2`; `@svgr/webpack`,
  `file-loader`, `url-loader`, `remark-code-import` → current.
- **Remove `docusaurus@1`** (vestigial).
- **Mermaid:** drop `mdx-mermaid` + `mermaid`; enable built-in `@docusaurus/theme-mermaid`
  (`markdown: { mermaid: true }` + theme).
- **Image zoom:** replace the GitHub fork with published `docusaurus-plugin-image-zoom`
  (pinned).
- **Config → ESM:** D3 remark/rehype plugins are ESM-only; convert `docusaurus.config.js`
  to `.mjs` (or async config + dynamic `import()`); update Prism imports.

### Phase 6 — Security + hands-off automation
- **Dependabot** (`.github/dependabot.yml`): `npm` ecosystem (covers pnpm), monthly,
  **grouped** minor/patch, plus a `github-actions` lane; majors split out for human review.
- **Auto-merge** (`.github/workflows/dependabot-auto-merge.yml`): on Dependabot PRs, if the
  bump is **minor/patch** (via `dependabot/fetch-metadata`) **and** build+smoke passed,
  enable auto-merge (`gh pr merge --auto --squash`). Requires "Allow auto-merge" + branch
  protection requiring the build/smoke check on `main` — so it only fires on green.
- **CodeQL** (`.github/workflows/codeql.yml`): JS/TS, on PR + monthly schedule.
- **Audit:** `pnpm audit` step (non-blocking / scheduled) to avoid low-severity noise.
- **Hardening/hygiene:** least-privilege workflow `permissions:`; enable GitHub secret
  scanning + Dependabot alerts (UI); optional `SECURITY.md`. Document the CSP limitation of
  GitHub Pages rather than investing effort.

---

## 5. Files to be created / modified

**Create:** `CLAUDE.md`, `.npmrc`, `pnpm-lock.yaml`,
`src/components/CaptionDocusaurus.jsx`, `scripts/smoke.mjs`, `.github/dependabot.yml`,
`.github/workflows/codeql.yml`, `.github/workflows/dependabot-auto-merge.yml`, (optional)
`SECURITY.md`, `MAINTENANCE.md` (this file).

**Modify:** `package.json` (packageManager, engines, deps, scripts; remove
`@cangulo-blog/components`, `react-share`, `docusaurus@1`, `mdx-mermaid`/`mermaid`; swap
image-zoom), `docusaurus.config.js` (strip package wiring in P4; ESM + Prism v2 + Mermaid +
image-zoom in P5), `src/pages/about.mdx`, `blog/_template.md`, the 9 `<CaptionDocusaurus>`
content files, `.nvmrc`, `.github/workflows/update-page.yml`, `README.md`, and possibly
further `.mdx` files (MDX v3 fixes).

**Delete:** `package-lock.json`; `gh-pages` branch (after first official-Pages deploy;
optional).

---

## 6. End-to-end verification (whole plan)

1. Fresh clone → `corepack enable` → `pnpm install --frozen-lockfile` → `pnpm build` on
   Node 20.
2. `pnpm test` + `pnpm test:smoke` pass against the built output.
3. `pnpm serve` → manual pass over `/`, `/about` (placeholder), `/blog`, a Mermaid
   cheatsheet, a caption-heavy post, image zoom + Giphy. (Injected comments/AboutMe/Share
   are intentionally absent until reintegration.)
4. Open a PR → CI runs build + smoke (no deploy); merge to `main` → official Pages deploy
   publishes; live site loads and all sections render.
5. A minor Dependabot PR auto-merges on green CI and redeploys with zero manual steps; a
   major Dependabot PR waits for review.
6. CodeQL and audit report on PRs; branch protection blocks merges on red CI.

---

## 7. Progress log

- **Phase 1 (`CLAUDE.md`)** — merged via [PR #5](https://github.com/cangulo/cangulo.github.io/pull/5).
- **Phase 2 (pnpm migration + CI rewrite)** — implemented on branch
  `claude/cangulo-site-maintenance-opmbq5`:
  - `pnpm-lock.yaml` generated from `package-lock.json` via `pnpm import`; `package-lock.json`
    deleted. `.npmrc` added with `node-linker=hoisted`.
  - `package.json` gained `packageManager: pnpm@10.33.0` (10.x, not 9.x as originally
    scoped — the environment's available pnpm was 10.33.0; 9.x was never actually pinned
    anywhere so there was no reason to install an older line) and `engines.node: >=20`.
  - `.nvmrc` `14` → `20`.
  - `.github/workflows/update-page.yml` rewritten to the official Pages Actions flow: a
    `build` job (checkout → `pnpm/action-setup` → `setup-node` with pnpm cache →
    `pnpm install --frozen-lockfile` → `pnpm build` → `upload-pages-artifact`) that also
    runs on `pull_request` and `workflow_dispatch`, and a `deploy` job
    (`actions/deploy-pages`) gated to `push` on `main`. The old `gh-pages`-branch
    checkout/wipe/commit/push logic is gone entirely.
  - `README.md` and `CLAUDE.md` updated to the pnpm commands and the new deploy flow.
  - Verified locally on Node 20.20.2: `pnpm install --frozen-lockfile` and `pnpm build`
    both succeed (build emits pre-existing MDX/SSR console warnings from the beta
    Docusaurus + MDX v1 combo, unrelated to this phase — build still reports "Success!");
    `pnpm serve` returns HTTP 200 for `/`, `/about`, `/blog`, `/cheatsheets`, `/projects`,
    `/rss`.
  - **Owner action still required, not doable from here:** in GitHub repo Settings →
    Pages, change **Source** to **"GitHub Actions"** (it's currently serving from the
    `gh-pages` branch). Until that's flipped, this new workflow's `deploy` job will run
    but Pages won't actually publish from it. After the first successful Actions deploy,
    the old `gh-pages` branch can be deleted (optional, keep briefly for rollback).
  - **Live-CI fix, discovered after the PR's first run:** the `build` job failed —
    `plugin-image-zoom: github:ataft/plugin-image-zoom` resolves to a `git clone
    git@github.com:ataft/plugin-image-zoom.git` under pnpm (unlike npm, which fetched it
    over HTTPS via a GitHub tarball URL), and the Actions runner has no SSH key for
    arbitrary repos, so it failed with `Permission denied (publickey)`. Fixed with a CI
    step (`git config --global url."https://github.com/".insteadOf git@github.com:`)
    that rewrites the SSH URL to HTTPS before `pnpm install` runs — no `package.json`
    change needed; verified the rewrite works with a manual clone test. This is a pure
    CI/transport fix; the actual "unpin this fragile fork" work stays scoped to Phase 5.
- **Phase 2 — completed.** Merged via [PR #6](https://github.com/cangulo/cangulo.github.io/pull/6)
  plus two follow-up fixes:
  - [PR #7](https://github.com/cangulo/cangulo.github.io/pull/7): the SSH→HTTPS rewrite
    step's `run:` line ended with a bare `git@github.com:` — the trailing colon made the
    whole workflow file invalid YAML, so every run failed at startup with zero jobs.
    Fixed by moving the command into a `run: |` block scalar.
  - [PR #8](https://github.com/cangulo/cangulo.github.io/pull/8): the `deploy` job was
    gated on `event_name == 'push'`, so `workflow_dispatch` runs built but skipped the
    deploy. Re-gated on `event_name != 'pull_request'`.
  - Owner flipped Settings → Pages → Source to **"GitHub Actions"**; the first
    Actions-based deploy succeeded (deployment status `success`,
    https://cangulo.github.io/). The `gh-pages` branch is no longer used and can be
    deleted at the owner's leisure.
- **Phase 3 (smoke tests)** — implemented on branch `claude/cangulo-site-maintenance-opmbq5`:
  - `scripts/serve-build.mjs`: shared static server that resolves URLs like GitHub Pages
    does (`/foo` → `foo.html` / `foo/index.html`), needed because the site builds with
    `trailingSlash: false`.
  - `scripts/smoke.mjs` (`pnpm test`): asserts 8 key routes return 200 + expected text.
  - `scripts/linkcheck.mjs` (`pnpm test:smoke`): crawls `build/` via the linkinator
    **Node API** over that server. The linkinator *CLI* was tried first and produced
    false positives: its own static server doesn't do Pages-style `.html` resolution,
    and it generates trailing-slash link variants (`/blog/`) that no page actually
    links to. External links are skipped on purpose — link rot on other people's sites
    must not turn CI red (protects Phase 6 auto-merge).
  - Both wired into the CI `build` job between `pnpm build` and the artifact upload.
  - Verified locally: 8/8 routes pass; 533 links scanned, 0 broken.
- Phases 4–6 — not started.

- **Phase 4 (decouple from `@cangulo-blog/components`)** — implemented on branch
  `claude/cangulo-site-maintenance-opmbq5`:
  - Local shim `src/components/CaptionDocusaurus.jsx` (same prop API, no PropTypes dep);
    explicit `@site/...` import added to the 8 content files that use it (+ template).
  - `docusaurus.config.js`: package require, `commonImports`, `jsxElementsEnding`, all
    `beforeDefaultRemarkPlugins` blocks, and the per-plugin `addJsxCode` ending entries
    removed; `mdx-mermaid` + `remark-code-import` kept for Phase 5.
  - `src/pages/about.mdx`: minimal placeholder (short intro + links) keeping the local
    Certifications section.
  - **Deviation from decision #9 (deliberate):** `blog-styles.css` was *not* dropped —
    it holds the site's brand colors, and since the components code is now destined to
    live in this repo anyway (see §8), the file was copied to `src/css/blog-styles.css`
    and kept in `customCss`. Zero maintenance cost, avoids weeks of an off-brand site.
  - `package.json`: `@cangulo-blog/components` and `react-share` removed.
- **Phase 5 (Docusaurus 3)** — implemented on branch `claude/cangulo-site-maintenance-opmbq5`:
  - `@docusaurus/*` → `^3.10.2` (core, preset-classic, theme-mermaid, module-type-aliases,
    tsconfig); React 18.3; MDX v3; `prism-react-renderer` v2; `clsx` v2; TypeScript 5;
    `@types/react{,-dom}` 18 pinned as dev deps (a transitive v17 was hoisted otherwise,
    breaking `pnpm typecheck`).
  - Removed: vestigial `docusaurus@1`, `mdx-mermaid` + `mermaid` (replaced by built-in
    `@docusaurus/theme-mermaid`, `markdown.mermaid: true`), the unpinned
    `github:ataft/plugin-image-zoom` fork (replaced by published
    `docusaurus-plugin-image-zoom` + `themeConfig.zoom`), and unused `@svgr/webpack`,
    `file-loader`, `url-loader`, `mdast-util-to-string`, `@tsconfig/docusaurus`.
  - Config rewritten as **`docusaurus.config.mjs`** (ESM — remark plugins are ESM-only);
    the six blog sections now share a `blogSection()` helper; `onBrokenMarkdownLinks`
    moved to `markdown.hooks`; `onUntruncatedBlogPosts: 'ignore'` (some sections have
    one-liner posts); prism themes via `prism-react-renderer` v2 `themes` export;
    `remark-code-import` → v1.2 (ESM).
  - Content needed **zero** MDX v3 fixes (`docusaurus-mdx-checker`: 48/48 files clean).
  - Verified locally on Node 20: clean build (no warnings), 8/8 route smoke tests,
    525 links crawled 0 broken, typecheck green; mermaid renders via theme (client-side),
    `remark-code-import` content present in built HTML.
- **Phase 6 (security + automation)** — implemented on branch
  `claude/cangulo-site-maintenance-opmbq5`:
  - `.github/dependabot.yml`: npm (covers pnpm) + github-actions lanes, monthly, grouped
    minor/patch (majors arrive as individual PRs).
  - `.github/workflows/dependabot-auto-merge.yml`: Dependabot minor/patch PRs get
    `gh pr merge --auto --squash` via `dependabot/fetch-metadata`.
  - `.github/workflows/codeql.yml`: JS/TS scan on PRs + monthly.
  - `.github/workflows/audit.yml`: scheduled `pnpm audit --prod`, informational only.
  - `SECURITY.md` added.
  - **Owner actions required (GitHub UI, one-time):**
    1. Settings → General → check **"Allow auto-merge"**.
    2. Settings → Branches → protect `main`, require the **Build** status check —
       without this, auto-merge fires immediately instead of waiting for green CI.
    3. Settings → Advanced Security: enable **Dependabot alerts** and **secret
       scanning** (CodeQL "code scanning" gets enabled automatically by the workflow).

---

## 8. New scope: import `@cangulo-blog/components` into this repo (owner request, 2026-07-18)

**Goal:** this repo stays the main blog *and* becomes the home of the components package —
adapted to Docusaurus 3 and published to npm from here, for reuse in the owner's other
project blogs. This supersedes the earlier "reintegrate from the separate repo" follow-up.
Executes as **Phase 7**, after the D3 upgrade (Phase 5) and automation (Phase 6).

### Package inventory (from `cangulo/blog-components@f477c47`)

| Piece | Content | D3 impact |
|-------|---------|-----------|
| `lib/components/` | `CaptionComponent`, `ShareComponent` (react-share buttons) | trivial — React-only |
| `lib/docusaurus/` | `CaptionDocusaurus`, `ShareDocusaurus` (wrap the above with `useDocusaurusContext`) | trivial |
| `lib/mdx/` | 6 small `aboutme_*` fragments | sweep for MDX v3 syntax |
| `lib/remark-plugins/` | `addJsxCode`, `alignTableCenter` | **rewrite required** — they emit MDX v1 `import`/`jsx` AST nodes, which don't exist in MDX v3; must emit `mdxjsEsm`/`mdxJsxFlowElement` (estree) nodes instead |
| `lib/css/blog-styles.css` | brand colors + code-line highlight | none (already copied locally in Phase 4) |
| Build/publish | babel `lib`→`dist`; `cangulo-actions/semver` + `npm publish` on push to `main` | rebuild pipeline in-repo |

Old deps to drop on import: `@babel/polyfill` (deprecated), `@babel/plugin-transform-runtime`,
`@docusaurus/module-type-aliases@beta` (consumer concern). `react` / `react-share` become
peer dependencies (React 18/19, react-share v5+). `prop-types` was used but never declared
(phantom dep) — either declare it or drop PropTypes.

### Phase 7 steps

1. **Workspace layout:** add `pnpm-workspace.yaml` (`packages/*`); the site stays the root
   package; new `packages/components` with the package name `@cangulo-blog/components`.
   Site consumes it as `"@cangulo-blog/components": "workspace:*"`.
2. **Port the code** into `packages/components`: components + MDX fragments + CSS moved
   over; build with a minimal modern toolchain (babel or tsup → `dist/`, ESM) targeting
   React 18+ peer deps and Docusaurus 3.
3. **Rewrite the two remark plugins for MDX v3** (the only nontrivial adaptation, see
   table above). Unit-test them with fixture MDX so regressions can't slip silently.
4. **Re-wire the site:** restore `commonImports`/`jsxElementsEnding` injection in
   `docusaurus.config.*`, restore the real `/about` from the package fragments, replace
   the Phase 4 local `CaptionDocusaurus` shim with the package import, point `customCss`
   back at the package CSS (delete the local copy).
5. **Publish workflow:** on push to `main` touching `packages/components/**`, run the
   owner's existing `cangulo-actions/semver` flow (conventional commits → version → GH
   release) followed by `pnpm publish` with an `NPM_TOKEN` secret (`PUBLISH_CANGULO_BLOG_COMPONENTS`
   exists in the old repo; needs to be added to this repo's secrets). PR lane keeps the
   existing conventional-commits validation.
6. **CI integration:** package build + site build/smoke stay one gate — a broken package
   can't merge because the site build consumes it directly via the workspace.
7. **Afterwards (owner, UI):** archive `cangulo/blog-components`, and point other blogs at
   the npm package (same name, so likely just a version bump for them).

### Phase 7 — implemented

Done on branch `claude/cangulo-site-maintenance-opmbq5`:
- `pnpm-workspace.yaml` + `packages/components` (`@cangulo-blog/components@0.1.0`,
  `type: module`, babel → `dist/` with copied MDX/CSS, exports map keeps the old
  `/dist/*` subpaths working alongside cleaner `/mdx/*`, `/css/*`, `/remark-plugins`).
- Components ported (PropTypes dropped; `react >=18` / `react-share ^5` as peers —
  `TwitterIcon` → `XIcon`).
- **Remark plugins rewritten for MDX v3**: snippets are parsed with
  `mdast-util-from-markdown` + `micromark-extension-mdxjs` + `mdast-util-mdx` into real
  `mdxjsEsm`/`mdxJsxFlowElement` nodes (v1's raw `import`/`jsx` string nodes are gone);
  `alignTableCenter` now moves the table *inside* a `<div>` element node (v3 forbids
  unbalanced open/close tags); truncate detection reads the vfile source. 3 unit tests
  (`node --test`) cover injection, the untruncated-skip, and table wrapping.
- Site re-wired: injections + `/about` fragments + package CSS restored; Phase 4 shim and
  local CSS copy deleted; `CaptionDocusaurus` stays an explicit per-file import (cleaner
  than injecting it; deviation from the pre-Phase-4 setup). Root `build`/`test` scripts
  build/test the package first.
- `release-components.yml`: on `main` push touching `packages/components/**` — build,
  test, then publish to npm **only if the version isn't on the registry yet** (idempotent
  version-guard), then tag `components-vX.Y.Z` + GH release. **Deviation from the §8
  sketch:** `cangulo-actions/semver` was not reused — it versions/releases at repo level,
  which now collides with site commits in the same repo; the version-guard flow needs no
  conventional-commit coupling. Can be revisited if the owner prefers.
- **Owner actions:** add the npm token as the `PUBLISH_CANGULO_BLOG_COMPONENTS` repo
  secret (it lives in the old repo's secrets); after the first publish, archive
  `cangulo/blog-components`.
