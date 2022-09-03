import { createServer, ViteDevServer } from 'vite';
import { getViteServerConfig } from '../vitejs.server.config';

let server: ViteDevServer;

export const startServer = async (port?: number): Promise<void> => {
  if (!server) {
    const options = getViteServerConfig(port);
    server = await createServer(options);
    await server.listen();
    console.info(`Server started on ${options.server.port} port.`);
  }
};
