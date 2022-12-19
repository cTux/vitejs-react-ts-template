import type { PlaywrightTestConfig } from '@playwright/test';

const url = 'http://localhost:6006';
const baseURL = `${url}/`;
const timeout = 30000;
const globalTimeout = 120000;

const config: PlaywrightTestConfig = {
  timeout,
  globalTimeout,
  expect: {
    timeout,
  },
  webServer: {
    timeout,
    url,
    command: 'pnpm run dev:storybook',
    reuseExistingServer: !process.env.CI,
    ignoreHTTPSErrors: true,
  },
  use: {
    baseURL,
    actionTimeout: timeout,
    navigationTimeout: timeout,
    headless: true,
    ignoreHTTPSErrors: true,
  },
};

export default config;
