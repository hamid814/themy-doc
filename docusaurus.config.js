module.exports = {
  title: 'Themy',
  tagline: 'lightweight Js theme toggler',
  url: 'https://hamid814.github.io',
  baseUrl: '/themy/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'hamid814',
  projectName: 'themy',
  themeConfig: {
    navbar: {
      title: 'themy',
      logo: {
        alt: 'themy',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/hamid814/themy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Installation',
              to: 'docs/installation/',
            },
          ],
        },
        {
          title: 'Contact Me',
          items: [
            {
              label: 'Email',
              href: 'mailto:hamid331994@gmail.com',
            },
            {
              label: 'Github',
              href: 'https://github.com/hamid814',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/hamid331994',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Medium (Demo)',
              href: 'http://medium.com/',
            },
            {
              label: 'Dev.to (Demo)',
              href: 'https://dev.to',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} themy by hamid814. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'installation',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/hamid814/themy-doc/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/hamid814/themy-doc/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
