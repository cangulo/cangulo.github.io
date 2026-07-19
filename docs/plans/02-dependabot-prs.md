# Plan 02 — Dependabot PRs: playbook, fix & merge

> Standalone task brief. Execute in its own session. Goal: a repeatable, low-risk process for
> clearing Dependabot PRs, plus handling of the known-blocked and high-risk majors.

## Current state (as of this plan)

- **0 Dependabot PRs open** — the initial batch (#13–#19) was reconciled/merged/closed.
- **Auto-merge is live:** `dependabot-auto-merge.yml` enables `gh pr merge --auto --squash`
  for **minor/patch** bumps; they merge themselves once the required `Build` check is green.
  So a normal month needs **no human action** for minor/patch.
- **Majors arrive as individual PRs for review** (by design in `dependabot.yml`).
- **`typescript` major is ignored** in `dependabot.yml` — TS 7 removed `baseUrl`, which
  `@docusaurus/tsconfig` still relies on; the build can't pass until Docusaurus ships a
  TS7-ready config. `typecheck` is editor-only, so there's no urgency.

## Playbook — run this each time Dependabot PRs are open

1. **List open Dependabot PRs** and group by ecosystem (npm / github-actions) and bump type.
2. **Minor/patch:** confirm they already auto-merged. If one is stuck, check why (Build red? out
   of date? — the ruleset uses strict/up-to-date, so a stale branch needs a Dependabot rebase:
   comment `@dependabot rebase`).
3. **Redundant PRs:** if a version was already applied manually, close with a one-line reason
   (this happened with #13/#16/#17 after manual action bumps).
4. **Majors — triage each:**
   - **Trivial CI action bumps** (checkout, setup-node, codeql, deploy-pages, etc.): read the
     changelog for breaking changes; if none affect us, merge.
   - **Runtime deps** (react, react-share, hyvor-talk, docusaurus, mdx, prism): these can change
     APIs. **Always** run locally: `pnpm add <dep>@<version>` → `pnpm build` → `pnpm test` →
     `pnpm test:smoke` → `pnpm typecheck`. Fix any API breakage in the same PR (see hyvor note).
   - **Stale Dependabot branches** can't pass the up-to-date `Build` rule; prefer applying the
     bump on a fresh branch off `main` (optionally consolidating several), then close the
     Dependabot PRs pointing to it.

## Known items to watch / decide

- **TypeScript major (blocked):** each session, quickly re-check whether Docusaurus shipped a
  TS7-compatible `@docusaurus/tsconfig`. Test: bump `typescript`, remove the `baseUrl` from
  root `tsconfig.json` (replace with `paths` if needed), run `pnpm typecheck`. If it passes,
  **remove the ignore** in `.github/dependabot.yml` and merge. If not, leave the ignore.
- **React 19 / react-dom 19:** major. Docusaurus 3 supports React 18; React 19 may not be
  supported yet. If a PR appears, verify Docusaurus compatibility first; likely **hold**.
- **`react-share` majors:** runtime (share buttons via the components package). Test the
  `packages/components` build + the site footer render.
- **hyvor-talk pattern (reference):** the 0.0.3→1.x bump changed the `<Comments>` API
  (`loadMode`/`page-id` → `loading` + required `website-id`) in
  `src/components/blog/comments.js`. A bare version bump breaks the build — the code change must
  ride along in the same PR. Expect this shape for other runtime majors.

## Verification (every dependency PR before merge)

- `pnpm install --frozen-lockfile` clean, `pnpm build` green, `pnpm test` 8/8 routes,
  `pnpm test:smoke` 0 broken, `pnpm typecheck` green.
- For runtime deps, sanity-check the actual rendered output in `build/` (e.g. comments markup,
  share buttons, mermaid, image zoom) — the smoke test only checks routes + internal links.

## Execution log — 2026-07-19 batch (#28–#32)

Reviewed the 5 open Dependabot majors and applied all of them in one PR (their branches were
stale vs. the strict `Build` rule):

- **#28 upload-pages-artifact 3→5** — CI action bump; `deploy-pages@v5` already in use. Applied.
- **#29/#31/#32 Babel 8** (`@babel/cli`, `@babel/core`, `@babel/preset-react`, devDeps of
  `packages/components`) — the package's babel build still works; 3/3 unit tests pass. Applied.
- **#30 React 19** (react/react-dom/@types/react 18→19) — Docusaurus 3.10 peer-supports React
  19 (`^18 || ^19`), so it's viable. **But** the site build failed SSG with
  `jsxDEV is not a function` on the 26 truncated posts that inject the components package.
  Root cause: `packages/components` was building its `dist` with the **development** JSX
  runtime (`react/jsx-dev-runtime`) because `babel.config.json` didn't pin
  `development: false`. React 18 tolerated it in SSG; React 19 doesn't. Fix: set
  `"development": false` in the preset-react options so `dist` emits the production
  `react/jsx-runtime`, and bump the package (→ 0.1.2) to republish the corrected build.

Lesson for future runtime majors: a published React package must ship the **production** JSX
runtime; verify `packages/components/dist` imports `react/jsx-runtime` (not `jsx-dev-runtime`).

## Out of scope

Adding *new* dependencies for features (Plans 03/04 own their own deps).
