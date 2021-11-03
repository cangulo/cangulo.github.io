// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carlos Angulo',
  url: 'https://cangulo.github.io/',
  baseUrl: '/',
  organizationName: 'cangulo',
  projectName: 'cangulo.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  plugins: [
    '@docusaurus/plugin-content-docs',
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      {
        id: 'posts',
        path: 'blog/posts',
        showReadingTime: true,
        authorsMapPath: '../authors.yml'
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      {
        id: 'cheatsheets',
        path: 'blog/cheatsheets',
        showReadingTime: true,
        routeBasePath: 'cheatsheets',
        authorsMapPath: '../authors.yml'
      }
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    // '@docusaurus/plugin-google-analytics',
    // '@docusaurus/plugin-google-gtag',
    '@docusaurus/plugin-sitemap',
  ],

  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css')
      }
    ]
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Home',
        items: [
          // { type: 'doc', docId: 'intro', position: 'left', label: 'Tutorial' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/cheatsheets', label: 'Cheatsheets', position: 'left' },
          { to: '/about', label: 'About', position: 'left' },
          // { to: '/meetups', label: 'Meetups ', position: 'left' },
          // { to: '/about', label: 'About ', position: 'left' },
          // { to: '/contact', label: 'Contact ', position: 'left' },
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
          // {
          //   items: [
          //     {
          //       label: 'Home',
          //       to: '/home',
          //     }
          //   ],
          // },
          {
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Cheatsheets',
                to: '/cheatsheets',
              },
            ],
          },
          {
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/angulomascarell/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/angulomascarell',
              },
            ],
          }
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
