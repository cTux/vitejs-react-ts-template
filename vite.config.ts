import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import reactJsx from 'vite-react-jsx';
import compress from 'vite-plugin-compress';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development';
  const generateScopedName = isDevelopment
    ? '[local]-[hash:base64:5]'
    : '[hash:base64:5]';
  return {
    plugins: [react(), reactJsx(), VitePWA(), compress(), viteCompression()],
    css: {
      modules: {
        generateScopedName,
      },
    },
  };
});
