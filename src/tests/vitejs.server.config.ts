import { port as defaultPort } from '../../vite.config';

export const getViteServerConfig = (port = defaultPort) => ({
  configFile: `${__dirname}/../../vite.config.ts`,
  root: `${__dirname}/../../`,
  server: {
    port,
  },
});
