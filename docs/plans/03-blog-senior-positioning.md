# Plan 03 — Reposition the blog as a Senior Software / Platform Engineer

> Standalone task brief. Execute in its own session. Goal: make the site communicate
> senior-level engineering at a glance, backed by the CV's concrete impact metrics.

## Decision to confirm first (title/positioning)

The request says **"Senior Software Engineer."** The CV's current title is **"Platform Engineer
at Ohpen."** These aren't in conflict but the wording should be deliberate. Recommended framing:
lead with **"Senior Software Engineer · Platform Engineering"** (or "Senior Platform Engineer")
so it reads as senior software engineering credibility *specialized* in platform/IDP work.
**Pick one wording and use it consistently** across hero, `<head>` metadata, `/about`, and the
Experience page (Plan 04). Confirm with the owner before shipping copy.

## Current state (what undersells the seniority today)

- **Homepage hero** (`src/pages/index.tsx`): "Hi, I'm Carlos" / "Here are some things that
  define me" — friendly but junior-sounding; no title, no impact, no proof.
- **Homepage features** (`src/components/homePage/FeaturesList.tsx`): Developer / DevOps / Team
  Player / Challenge Seeker / Documentation Hero / Experience. The "Experience" card says "More
  than 8 years … focus on SRE and Platform Engineer" — buried and vague; "DevOps" card still
  references Bitbucket Pipelines (dated).
- **`/about`** (`src/pages/about.mdx`) pulls generic `aboutme_*` fragments from
  `packages/components` + a Certifications list. The `aboutme_description` fragment is
  self-effacing ("I'm a Software Engineer with experience as Developer and DevOps…").
- **Site metadata:** `title: 'Carlos Angulo'`, homepage `description: 'Welcome to my blog :)'`,
  tagline unset. Weak for SEO / link previews / recruiter first-impression.

## Proof points from the CV (use these as the credibility spine)

- Platform Engineer at Ohpen, 2020–present; architects Ohpen's Internal Developer Platform.
- **100+ engineers** supported · **200+ deployments/day** enabled · **1,000+ repos** under
  standardized governance · **300+ APIs** via self-service API Platform.
- AWS account baselines (PR-driven provisioning, hours→minutes), Terraform impact-analysis
  tooling, org-wide standards enforcement (GitHub App + Rulesets, OIDC/keyless), org-wide
  vulnerability management (Inspector→Athena), AI-assisted engineering adoption (Claude Code +
  MCP). AWS SA Associate (2023) + Developer Associate (2020). Speaker (AWS Serverless Meetup BCN 2023).

## Steps

1. **Homepage hero** (`src/pages/index.tsx` + `index.module.css`):
   - Replace title/subtitle with a real headline: name + chosen title + a one-line value prop
     (e.g. "I build Internal Developer Platforms that let 100+ engineers ship faster and safer").
   - Add a compact **impact stat row** (100+ engineers · 200+ deploys/day · 1,000+ repos ·
     300+ APIs) — small, tasteful, senior. Consider a "View my experience" CTA → `/experience`
     (Plan 04) and links to GitHub/LinkedIn.
2. **Homepage features** (`FeaturesList.tsx`): retune to a senior narrative. Suggested cards:
   *Platform Engineering*, *AWS & Terraform at scale*, *Developer Enablement / Golden Paths*,
   *Governance & Security (OIDC, Rulesets)*, *AI-assisted engineering*, *Mentoring & Leadership*.
   Refresh dated copy (drop Bitbucket unless intentionally historical). Reuse existing SVG items
   in `src/constants/svg_items` or add new ones.
3. **`/about`** (`src/pages/about.mdx` and/or the `aboutme_*` fragments in
   `packages/components/src/mdx/`): rewrite `aboutme_description` to a confident senior summary
   matching the CV's opening line. **Note the coupling:** these fragments are injected into every
   truncated post footer *and* the About page, and they ship in the npm package — editing them
   means a `packages/components` version bump + republish (see `CLAUDE.md`). Decide whether the
   senior bio lives in the shared fragment (affects post footers too) or only on the About page.
4. **Site metadata** (`docusaurus.config.mjs`): set a real `tagline`; improve the homepage
   `description` and `<head>` OG/twitter text in `index.tsx`; make `title` recruiter-friendly.
5. **Optional polish:** a short "Now / Currently" line; ensure the profile image + OG image are
   professional; make sure the primary CTA points at the new Experience page.

## Verification

- `pnpm build` green (watch `onBrokenLinks: 'throw'` for the new `/experience` link if Plan 04
  isn't merged yet — gate the CTA or land Plan 04 first).
- `pnpm test` + `pnpm test:smoke` green.
- Eyeball `pnpm serve`: hero, stat row, features, `/about`, and link-preview metadata read as
  senior and consistent with the chosen title.

## Dependencies / sequencing

- Coordinate with **Plan 04** (Experience page) — the hero CTA and About "full experience" link
  should target `/experience`. Either land Plan 04 first, or ship both together.
- If editing shared `aboutme_*` fragments, follow the package publish flow.
