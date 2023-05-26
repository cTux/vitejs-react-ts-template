import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

export const port = 5173;

export default defineConfig(
  (configEnv): UserConfig => ({
    base: './',
    publicDir: './src/assets',
    server: {
      port,
      strictPort: true,
    },
    plugins: [
      react(),
      basicSsl(),
      chunkSplitPlugin({
        strategy: 'all-in-one',
        customSplitting: {
          vendors: ['react', 'react-dom', 'normalize.css', 'clsx'],
        },
      }),
    ],
    css: {
      devSourcemap: true,
      modules: {
        generateScopedName:
          configEnv.mode === 'development'
            ? '[local]-[hash:base64:5]'
            : '[hash:base64:5]',
      },
    },
    test: {
      globals: true,
      exclude: [
        '**/.{idea,git,github,husky,run,storybook,cache,output,temp}/**',
        '**/{dist,node_modules,playwright,coverage,storybook-static,test-results}/**',
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
  })
);
