import { ValidateEnv } from '@julr/vite-plugin-validate-env';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import svgr from 'vite-plugin-svgr';

import { envSchema } from './env.schema';

export const port = 5173;

export default defineConfig(
  (configEnv): UserConfig => ({
    base: './',
    publicDir: './public',
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
          app: [/src\//],
          vendors: [/node_modules\//],
        },
      }),
      svgr(),
      ValidateEnv({
        validator: 'zod',
        schema: envSchema,
      }),
    ],
    css: {
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
