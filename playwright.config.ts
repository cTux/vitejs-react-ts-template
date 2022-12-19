import type { PlaywrightTestConfig } from '@playwright/test';

const url = 'http://localhost:6006';
const baseURL = `${url}/`;

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm run dev:storybook',
    timeout: 30000, // 30 seconds
    url,
    reuseExistingServer: !process.env.CI,
    ignoreHTTPSErrors: true,
  },
  use: {
    headless: true,
    baseURL,
    ignoreHTTPSErrors: true,
  },
};

export default config;
