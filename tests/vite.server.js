// eslint-disable-next-line @typescript-eslint/no-var-requires
const vite = require('vite');

const defaultOptions = {
  root: './',
  base: '/',
  mode: 'development',
  configFile: '',
  logLevel: 'info',
  clearScreen: false,
  host: '0.0.0.0',
};

module.exports.start = async (passedOptions = {}) => {
  const { createServer } = vite;
  const options = Object.assign({}, defaultOptions, passedOptions);

  try {
    const server = await createServer(options);

    if (!server.httpServer) {
      console.error(
        'Error while starting dev server: HTTP server not available.'
      );
      return;
    }

    await server.listen();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const viteVersion = require('vite/package.json').version;

    server.config.logger.info(`Vite v${viteVersion}\nDev server running at:\n`);
    server.printUrls();

    return server;
  } catch (e) {
    console.error(`Error while starting dev server:\n${e.stack}`);
  }
};
