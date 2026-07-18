# Security

This is a personal static blog published on GitHub Pages. There is no backend, no user
data, and no secrets in the repository.

- **Reporting:** if you find a security issue (e.g. a vulnerable dependency shipped to the
  client, or an XSS vector in a component), please open a GitHub issue or contact
  [@angulomascarell on LinkedIn](https://www.linkedin.com/in/angulomascarell/).
- **Automation:** Dependabot (monthly, minor/patch auto-merged on green CI), CodeQL
  (PRs + monthly), and a scheduled `pnpm audit` keep dependencies patched hands-off.
- **Known limitation:** GitHub Pages cannot set real HTTP response headers, so there is no
  CSP; third-party embeds (Hyvor Talk, Giphy) run with the page's default permissions.
