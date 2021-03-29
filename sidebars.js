module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        '01-01-getting-started',
        '01-02-setting-up-workspace',
      ],
    },
    {
      type: 'category',
      label: 'Core concepts',
      collapsed: false,
      items: [
        '02-01-micro-frontends',
        '02-02-consuming-a-micro-frontend',
        '02-03-server-side-rendering'
      ],
    },
    {
      type: 'category',
      label: 'React',
      collapsed: true,
      items: [
        'react/01-exposing-a-micro-frontend',
        'react/02-consuming-a-micro-frontend',
      ],
    },
  ],
};
