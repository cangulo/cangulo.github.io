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

  tagline: 'Dinosaurs are cool',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        items: [
          // { type: 'doc', docId: 'intro', position: 'left', label: 'Tutorial' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/cheatsheets', label: 'Cheatsheets', position: 'left' },
          { to: '/meetups', label: 'Meetups ', position: 'left' },
          { to: '/about', label: 'About ', position: 'left' },
          { to: '/contact', label: 'Contact ', position: 'left' },
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
          {
            items: [
              {
                label: 'Home',
                to: '/home',
              }
            ],
          },
          {
            title: 'Posts',
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
