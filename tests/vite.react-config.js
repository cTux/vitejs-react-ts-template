import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nightwatchPlugin from 'vite-plugin-nightwatch';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  plugins: [
    react(),
    nightwatchPlugin({
      renderPage: './index.html',
    }),
  ],
});
