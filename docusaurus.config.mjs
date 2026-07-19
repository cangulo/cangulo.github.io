// @ts-check
import { createRequire } from 'node:module';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkCodeImport from 'remark-code-import';
import { addJsxCode, alignTableCenter } from '@cangulo-blog/components/remark-plugins';

const require = createRequire(import.meta.url);

// Injected into every post that has a truncate marker (real posts, not
// one-liner announcements). CaptionDocusaurus is NOT injected — the files
// that need it import it explicitly.
const commonImports = [
  "import AboutMe from '@cangulo-blog/components/mdx/aboutme_description.mdx'",
  "import FullExperienceLink from '@cangulo-blog/components/mdx/aboutme_fullexperiencelink.mdx'",
  "import Contact from '@cangulo-blog/components/mdx/aboutme_contact.mdx'",
  "import { ShareDocusaurus } from '@cangulo-blog/components'",
  "import Comments from '@site/src/components/blog/comments.js'",
];

const jsxElementsEnding = [
  '<AboutMe /><FullExperienceLink />',
  '<Contact />',
  '<ShareDocusaurus preSlug={frontMatter.group} slug={frontMatter.slug} title={frontMatter.title} tags={frontMatter.tags} />',
  '<Comments />',
];

/**
 * The six content sections share the same blog-plugin options.
 * @param {Partial<import('@docusaurus/plugin-content-blog').Options>} options
 * @returns {[string, import('@docusaurus/plugin-content-blog').Options]}
 */
const blogSection = (options) => [
  '@docusaurus/plugin-content-blog',
  /** @type {import('@docusaurus/plugin-content-blog').Options} */ ({
    showReadingTime: true,
    authorsMapPath: '../authors.yml',
    editUrl: 'https://github.com/cangulo/cangulo.github.io/blob/main',
    // Some sections have one-liner posts where truncation makes no sense.
    onUntruncatedBlogPosts: 'ignore',
    beforeDefaultRemarkPlugins: [
      alignTableCenter,
      [addJsxCode, { importStatement: commonImports, position: 'start' }],
    ],
    remarkPlugins: [
      remarkCodeImport,
      [addJsxCode, { jsx: jsxElementsEnding }],
    ],
    ...options,
  }),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carlos Angulo',
  tagline: 'Senior Software Engineer · Platform Engineering — Internal Developer Platforms, AWS, Terraform, CI/CD at scale',
  url: 'https://cangulo.github.io',
  baseUrl: '/',
  organizationName: 'cangulo',
  projectName: 'cangulo.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  customFields: {
    hyvorTalkSiteId: '1142',
    rawGitUrl: 'https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/'
  },

  plugins: [
    blogSection({
      id: 'cheatsheets',
      path: 'blog/cheatsheets',
      routeBasePath: 'cheatsheets',
      blogTitle: 'Carlos Angulo Posts',
      blogDescription: 'General Publications I do regarding different subjects as devops or programming 🙂',
      blogSidebarTitle: 'Cheatsheets',
      blogSidebarCount: 'ALL',
      feedOptions: {
        title: 'Carlos Angulo Cheatsheets',
        language: 'en',
        description: 'Here you can find useful cheatsheets about how to do the daily operations a developer does'
      },
    }),
    blogSection({
      id: 'books',
      path: 'blog/books',
      routeBasePath: 'books',
      blogTitle: 'Carlos Angulo Posts',
      blogDescription: 'General Publications I do regarding different subjects as devops or programming 🙂',
      blogSidebarTitle: 'Books',
      blogSidebarCount: 'ALL',
      feedOptions: {
        title: 'Carlos Angulo Recommended Books',
        language: 'en',
        description: 'Here you can find a set of books I have read about IT, team management and agile'
      },
    }),
    blogSection({
      id: 'projects',
      path: 'blog/projects',
      routeBasePath: 'projects',
      blogTitle: 'Carlos Angulo Projects',
      blogDescription: 'Publications related to the personal projects I do 💻️',
      blogSidebarTitle: 'Projects',
      blogSidebarCount: 'ALL',
      feedOptions: {
        title: 'Carlos Angulo Projects',
        language: 'en',
        description: 'Here you can find posts related to the personal projects I do 💻️'
      },
    }),
    blogSection({
      id: 'meetups',
      path: 'blog/meetups',
      routeBasePath: 'meetups',
      blogTitle: 'Carlos Angulo Meetups',
      blogDescription: 'Publications related to the meetups I do 🧑‍🏫',
      blogSidebarTitle: 'Meetups',
      blogSidebarCount: 'ALL',
      feedOptions: {
        title: 'Carlos Angulo Meetups',
        language: 'en',
        description: 'Here you can find information or resources about the meetups I have participated 🧑‍🏫'
      },
    }),
    blogSection({
      id: 'values',
      path: 'blog/values',
      routeBasePath: 'values',
      blogTitle: 'Values',
      blogDescription: 'Publications related to the values I follow as a developer🧾',
      feedOptions: {
        type: null
      },
    }),
    blogSection({
      id: 'posts',
      path: 'blog/posts',
      routeBasePath: 'blog',
      blogTitle: 'Carlos Angulo Posts',
      blogDescription: 'General Publications I do regarding different subjects as devops or programming 🙂',
      blogSidebarCount: 'ALL',
      feedOptions: {
        title: 'Carlos Angulo Posts',
        language: 'en',
        description: 'Here you can the general publications I do regarding different subjects as devops or programming 🙂'
      },
    }),
    'docusaurus-plugin-image-zoom'
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve('@cangulo-blog/components/css/blog-styles.css'),
            './src/css/custom.css'
          ],
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig:
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Home',
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/cheatsheets', label: 'Cheatsheets', position: 'left' },
          { to: '/projects', label: 'Projects', position: 'left' },
          { to: '/meetups', label: 'Meetups ', position: 'left' },
          { to: '/books', label: 'Books', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          {
            href: 'https://github.com/cangulo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { items: [{ label: 'Home', to: '/' }], },
          {
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Cheatsheets', to: '/cheatsheets' },
              { label: 'Projects', to: '/projects' },
            ],
          },
          {
            items: [
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/angulomascarell/' },
              { label: 'RSS', to: '/rss' },
            ],
          }
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell', 'csharp', 'bash', 'yaml']
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
      }
    }),
};

export default config;
