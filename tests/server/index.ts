import { createServer, ViteDevServer } from 'vite';
import { serverPort } from './server.config';

let server: ViteDevServer;

export const startServer = async (port = serverPort): Promise<void> => {
  if (!server) {
    const server = await createServer({
      configFile: `${__dirname}/../../vite.config.ts`,
      root: `${__dirname}/../../`,
      server: {
        port,
      },
    });
    await server.listen(port);
  } else {
    await restartServer();
  }
};

export const restartServer = async (): Promise<void> => {
  if (server) {
    await server.restart();
  }
};
