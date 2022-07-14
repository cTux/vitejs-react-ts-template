import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    ignoreHTTPSErrors: true,
  },
};

export default config;
