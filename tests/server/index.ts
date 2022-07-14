import { createServer, ViteDevServer } from 'vite';
import { getViteServerConfig } from '../vitejs.server.config';

let server: ViteDevServer;

export const startServer = async (port?: number): Promise<void> => {
  if (!server) {
    server = await createServer(getViteServerConfig(port));
    await server.listen();
  }
};
