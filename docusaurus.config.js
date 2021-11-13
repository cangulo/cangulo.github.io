// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carlos Angulo',
  url: 'https://cangulo.github.io',
  baseUrl: '/',
  organizationName: 'cangulo',
  projectName: 'cangulo.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'cheatsheets',
        path: 'blog/cheatsheets',
        showReadingTime: true,
        routeBasePath: 'cheatsheets',
        authorsMapPath: '../authors.yml',
        blogTitle: 'Carlos Angulo Posts',
        blogDescription: 'General Publications I do regarding different subjects as devops or programming 🙂',
        feedOptions: {
          title: 'Carlos Angulo Cheatsheets',
          language: 'en',
          description: 'Here you can find useful cheatsheets about how to do the daily operations a developer does'
        }
      })
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'projects',
        path: 'blog/projects',
        showReadingTime: true,
        routeBasePath: 'projects',
        authorsMapPath: '../authors.yml',
        blogTitle: 'Carlos Angulo Projects',
        blogDescription: 'Publications related to the personal projects I do 💻️',
        feedOptions: {
          title: 'Carlos Angulo Projects',
          language: 'en',
          description: 'Here you can find posts related to the personal projects I do 💻️'
        }
      })
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'meetups',
        path: 'blog/meetups',
        showReadingTime: true,
        routeBasePath: 'meetups',
        authorsMapPath: '../authors.yml',
        blogTitle: 'Carlos Angulo Meetups',
        blogDescription: 'Publications related to the meetups I do 🧑‍🏫',
        feedOptions: {
          title: 'Carlos Angulo Cheatsheets',
          language: 'en',
          description: 'Here you can find useful cheatsheets about how to do the daily operations a developer does'
        }
      })
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'values',
        path: 'blog/values',
        showReadingTime: true,
        routeBasePath: 'values',
        authorsMapPath: '../authors.yml',
        blogTitle: 'Values',
        blogDescription: 'Publications related to the values I follow as a developer🧾',
      })
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').Options} */
      ({
        id: 'posts',
        path: 'blog/posts',
        showReadingTime: true,
        authorsMapPath: '../authors.yml',
        blogTitle: 'Carlos Angulo Posts',
        blogDescription: 'General Publications I do regarding different subjects as devops or programming 🙂',
        feedOptions: {
          title: 'Carlos Angulo Posts',
          language: 'en',
          description: 'Here you can the general publications I do regarding different subjects as devops or programming 🙂'
        }
      })
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Home',
        items: [
          // { type: 'doc', docId: 'intro', position: 'left', label: 'Tutorial' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/cheatsheets', label: 'Cheatsheets', position: 'left' },
          { to: '/projects', label: 'Projects', position: 'left' },
          { to: '/meetups', label: 'Meetups ', position: 'left' },
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
            ],
          },
          {
            items: [
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/angulomascarell/' },
              { label: 'Twitter', href: 'https://twitter.com/angulomascarell' },
            ],
          }
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'csharp']
      },
    }),
};

module.exports = config;
