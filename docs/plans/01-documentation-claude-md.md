# Plan 01 — Documentation & `CLAUDE.md` refresh

> Standalone task brief. Execute in its own session. Goal: bring the repo's docs in line
> with reality now that the maintenance overhaul (Phases 1–7) is **complete** and shipped.

## Why

`CLAUDE.md` and `MAINTENANCE.md` still read as if the overhaul is *planned/in-progress*. It
is done: Docusaurus 3 is live, pnpm workspace, official Pages deploy, smoke tests, security
automation, and the `@cangulo-blog/components` package is imported and publishing to npm via
OIDC. A few concrete facts also drifted. New contributors (and future Claude sessions) read
`CLAUDE.md` first, so it should describe the *current* steady state, not the journey.

## Current-state facts to reflect (verify before writing)

- **Overhaul status:** all phases merged. `MAINTENANCE.md` is now a historical record, not a
  roadmap.
- **npm publishing uses OIDC Trusted Publishing**, not a token. `release-components.yml`
  upgrades npm to `npm@11` (npm 12 needs Node ≥ 22; we pin Node 20) and publishes with
  `id-token: write`; provenance is automatic. There is **no** `NODE_AUTH_TOKEN`/`registry-url`.
- **Security/automation exists now:** `.github/dependabot.yml` (npm + github-actions, monthly,
  grouped minor/patch), `dependabot-auto-merge.yml` (auto-merge minor/patch on green Build),
  `codeql.yml`, `audit.yml`. `main` is protected by a **ruleset** requiring the `Build` check.
- **Dependabot ignores the `typescript` major** (TS 7 removed `baseUrl`, which
  `@docusaurus/tsconfig` still uses). Document this so it isn't "fixed" blindly.
- **Node/npm nuance:** `.nvmrc` = 20; GitHub Actions default runner Node is 24 and warns about
  Node 20 deprecation on some actions — note it as a known, benign warning + a future bump path.
- **Content counts (for the content-model section, approx):** posts 13, cheatsheets 12,
  projects 9, meetups 2, books 1, values 6.

## Steps

1. **`CLAUDE.md` — rewrite the framing.**
   - Change the intro: drop "a maintenance overhaul is planned … phase by phase." Replace with
     "This describes the current steady state; the historical overhaul is recorded in
     `MAINTENANCE.md`."
   - **Deploy flow section:** keep, it's accurate.
   - **`@cangulo-blog/components` section:** add a short "Publishing" note — OIDC trusted
     publishing, npm@11 upgrade, provenance, no secrets; bump `version` in
     `packages/components/package.json` on `main` → auto-publish + `components-vX.Y.Z` tag.
   - **Add a "Security & automation" section:** Dependabot (grouped, auto-merge safe updates),
     the TS-major ignore + why, CodeQL, scheduled audit, the `main` ruleset requiring `Build`.
   - **Prereqs:** clarify Node 20 pin vs. runner Node 24; note npm ≥ 11 needed for OIDC publish.
2. **`MAINTENANCE.md` — mark complete.** Add a one-line banner at the top: "STATUS: complete —
   all phases (1–7) shipped as of <date>. Retained as historical record." Don't delete it.
3. **`README.md` — light refresh.** It's currently one line. Optionally add: what the site is,
   the live URL, `pnpm install && pnpm start`, and a pointer to `CLAUDE.md`. Keep it short.
4. **`packages/components/README.md`** — verify it matches the published package (D3, peer deps
   react ≥18 / react-share ^5, exports map). Fix any drift.
5. **Cross-check for dead references:** grep the repo for `blog-components` (old repo, now
   deleted) and `gh-pages` (branch deleted) — ensure no docs imply they still exist.

## Verification

- `pnpm build` still green (docs-only, but `onBrokenLinks: 'throw'` catches bad internal links).
- Re-read `CLAUDE.md` top-to-bottom: every claim matches a file you can point to.
- `grep -rn "blog-components\|gh-pages" --include=*.md .` returns only historical mentions.

## Out of scope

Content/positioning changes (see Plans 03/04). This plan is docs-about-the-repo only.
