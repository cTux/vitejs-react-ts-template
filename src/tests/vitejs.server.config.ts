export const getViteServerConfig = (port = 3073) => ({
  configFile: `${__dirname}/../../vite.config.ts`,
  root: `${__dirname}/../../`,
  server: {
    port,
  },
});
