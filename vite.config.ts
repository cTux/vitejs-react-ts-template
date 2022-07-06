import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import nightwatchPlugin from 'vite-plugin-nightwatch';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development';
  const generateScopedName = isDevelopment
    ? '[local]-[hash:base64:5]'
    : '[hash:base64:5]';
  return {
    base: './',
    publicDir: './src/assets',
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },
    plugins: [
      react(),
      VitePWA(),
      nightwatchPlugin({
        componentType: 'react',
        renderPage: './index.html',
      }),
    ],
    css: {
      modules: {
        generateScopedName,
      },
    },
    test: {
      globals: true,
      setupFiles: './tests/vitest.setup.ts',
    },
  };
});
