import type { PlaywrightTestConfig } from '@playwright/test';

const url = 'https://localhost:5173';
const baseURL = `${url}/`;

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm serve',
    timeout: 30000, // 30 seconds
    url,
    reuseExistingServer: !process.env.CI,
    ignoreHTTPSErrors: true,
  },
  use: {
    baseURL,
    ignoreHTTPSErrors: true,
  },
};

export default config;
