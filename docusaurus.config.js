/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ragu',
  tagline: 'It was never so simple to deliver a frontend!',
  url: 'https://ragu-framework.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://ragu-framework.github.io/favicon.ico',
  organizationName: 'ragu-framework', // Usually your GitHub org/user name.
  projectName: 'ragu', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-179608896-1',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true
    },
    navbar: {
      title: 'Ragu Docs',
      items: [
      ],
    },
    footer: {
      style: 'dark',
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
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
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
