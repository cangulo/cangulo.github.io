# @cangulo-blog/components

Carlos Angulo's shared blog components for **Docusaurus 3** — React components
(caption + share buttons), reusable `aboutme` MDX fragments, MDX v3 remark plugins
(`addJsxCode`, `alignTableCenter`), and the blog CSS theme.

Lives in the [cangulo.github.io](https://github.com/cangulo/cangulo.github.io) repo
(`packages/components`) and is published to npm from there. The main blog consumes it via
the pnpm workspace; other blogs install it from npm.

## Usage

```js
// docusaurus.config.mjs
import { addJsxCode, alignTableCenter } from '@cangulo-blog/components/remark-plugins';

// components
import { CaptionDocusaurus, ShareDocusaurus } from '@cangulo-blog/components';
```

```md
import AboutMe from '@cangulo-blog/components/mdx/aboutme_description.mdx'
```

Peer dependencies: `react >= 18`, `react-share ^5`. Requires a Docusaurus 3 site
(the `*Docusaurus` components use `@docusaurus/useDocusaurusContext`).
