# Plan 04 — Add an "Experience" tab (expanded CV)

> Standalone task brief. Execute in its own session. Goal: a dedicated `/experience` page that
> presents the CV in a rich, senior-level, web-native format, linked from the navbar.

## Source of truth

The content comes from `CV_Carlos_Angulo_2026_EN.pdf` (provided by the owner). Key structured
content extracted from it:

- **Headline:** Platform Engineer focused on building/optimizing Internal Developer Platforms —
  enabling teams to ship faster, safer, more efficiently. (Align the title with Plan 03's choice.)
- **Ohpen — Platform Engineer (2020/01 – Present).** Architects & evolves Ohpen's IDP across AWS
  governance, CI/CD standardization, GitHub org governance, developer enablement (100+ engineers).
  - Contributions: AWS account baselines (networking/ECS/IAM/security; PR-driven; hours→minutes);
    Terraform impact-analysis tooling for multi-env migrations/refactors; standardized repos +
    CI/CD + self-hosted runners; org-wide standards enforcement (GitHub App + org Rulesets,
    source-of-truth sync, keyless OIDC/App-token auth); org-wide vuln management (ECR, Lambda,
    EC2 runner fleet — AWS Inspector → Athena, Terraform-provisioned); AI-assisted engineering
    adoption (Claude Code + MCP servers for Terraform/AWS, standards in CLAUDE.md, AI governance).
  - Metrics: 100+ engineers supported · 200+ deployments/day · 1,000+ repos governed ·
    300+ APIs via self-service API Platform.
- **Previous:** Full Stack Developer @ Safened Deposits (2018/09–2019/12); Analyst @ Avanade
  (2016/06–2018/08).
- **Speaker:** "Terraform refactor against 100s of environments without downtime" — AWS
  Serverless Meetup, Barcelona, 2023. (Cross-link the existing `/meetups` post.)
- **AWS Certs:** Solutions Architect Associate (2023), Developer Associate (2020).
- **Technologies (self-rated):** AWS ★★★★, Terraform ★★★★, GitHub Workflows ★★★★,
  Python ★★☆☆, JavaScript ★★☆☆.
- **Languages:** English ★★★☆, Spanish ★★★★, Catalan ★★★★.
- **Education:** Telecommunications Engineer, UPC Barcelona, 2017.
- **Soft skills:** adaptability & perseverance, critical/analytical thinking, leadership &
  mentoring, communication.
- **Contact:** Barcelona · carlos.mascarell@outlook.com · LinkedIn /angulomascarell.
  (Confirm which contact details should be public on the site.)

## Implementation options (pick one)

- **A — Standalone MDX page `src/pages/experience.mdx` (recommended).** Simplest, full layout
  control, no plugin. Add a navbar item `{ to: '/experience', label: 'Experience' }`. Build a
  timeline/section layout with small React components for the role cards, metric tiles, and
  skill bars (reuse `src/components/*`; the repo already has SVG/feature components to model on).
- **B — New blog-plugin section** like the other six. Overkill for a single evergreen page and
  brings feed/tag machinery you don't want here. Not recommended.

Recommendation: **Option A.**

## Steps (Option A)

1. Create `src/pages/experience.mdx` (or `.tsx` if you want richer components) with sections:
   **Summary → Current role (Ohpen) with contributions + metric tiles → Previous roles →
   Speaking → Certifications → Skills/Tech (rating bars) → Education → Contact/links.**
2. Add small presentational components under `src/components/experience/` for: a **metric tile**
   (number + label), a **timeline/role card**, and a **skill bar** (★ rating or a CSS meter).
   Keep them theme-aware (light/dark) using Infima CSS vars already in `blog-styles.css`.
3. **Navbar:** add `{ to: '/experience', label: 'Experience', position: 'left' }` in
   `docusaurus.config.mjs` (place it right after About, or before Blog for prominence).
4. **Cross-links:** link the speaking entry to the existing meetup post under `/meetups`; link
   "Projects" mentions to `/projects`; add GitHub/LinkedIn.
5. **Assets:** put any logos/photos in `static/` (respect the existing `static/certifications/`
   pattern already used by `/about`). Reuse the AWS cert badges already in the repo.
6. **SEO/meta:** give the page a strong `title`/`description` (recruiter-facing) and OG image.
7. **De-dupe with `/about`:** decide the split — `/about` = short bio + certifications;
   `/experience` = the full CV. Avoid duplicating the certifications list in both (link instead).

## Verification

- `pnpm build` green — **critical:** `onBrokenLinks: 'throw'` means the navbar link and all
  cross-links must resolve. If Plan 03's hero CTA points here, sequence accordingly.
- Add the route to the smoke test: append `/experience` (with an expected-text assertion) to the
  `ROUTES` list in `scripts/smoke.mjs` so it's guarded going forward.
- `pnpm test` (now including `/experience`) + `pnpm test:smoke` green.
- `pnpm serve`: page renders correctly in light **and** dark theme; metric tiles/skill bars look
  intentional; mobile layout is not broken.

## Decisions to confirm with the owner

- Exact job title wording (align with Plan 03).
- Which contact details are public (email/phone — the CV lists a phone number; likely omit it).
- Whether self-rated skill stars should be shown literally or softened to labels
  (Advanced/Proficient) for a more senior tone.
