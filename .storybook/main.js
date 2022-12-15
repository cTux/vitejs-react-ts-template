module.exports = {
  stories: ['../src/**/*.stories.{ts,tsx}'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
};
