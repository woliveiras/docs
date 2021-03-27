/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ragu',
  tagline: 'It was never so simple to deliver a frontend!',
  url: 'https://ragu-framework.github.io/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ragu-framework', // Usually your GitHub org/user name.
  projectName: 'ragu', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ragu Docs',
      items: [
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Ask a question',
              href: 'https://github.com/ragu-framework/ragu/issues/new',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ragu-framework/ragu',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/ragu-framework/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
