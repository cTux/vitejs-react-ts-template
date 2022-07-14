import { Page } from '@playwright/test';
import { AppDriver } from './driver';

export const fnWrapper = (
  callback: (page: Page, driver: AppDriver) => Promise<void>
) => {
  return async ({ page }) => {
    const driver = new AppDriver(page);
    await callback(page, driver);
  };
};
