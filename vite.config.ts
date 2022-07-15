import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import basicSSL from '@vitejs/plugin-basic-ssl';
import unoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development';
  const generateScopedName = isDevelopment
    ? '[local]-[hash:base64:5]'
    : '[hash:base64:5]';
  return {
    base: './',
    publicDir: './src/assets',
    plugins: [react(), VitePWA(), basicSSL(), unoCSS()],
    css: {
      modules: {
        generateScopedName,
      },
    },
    test: {
      globals: true,
      exclude: [
        '**/coverage/**',
        '**/dist/**',
        '**/node_modules/**',
        '**/playwright/**',
        '**/.{idea,git,cache,output,temp,husky,github}/**',
      ],
      environment: 'happy-dom',
      setupFiles: './src/tests/vitest.setup.ts',
      passWithNoTests: true,
      allowOnly: true,
    },
    resolve: {
      alias: {
        '~/': `${__dirname}/src/`,
      },
    },
  };
});
