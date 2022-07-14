import { Page } from '@playwright/test';
import { AppDriver } from './driver';

export const fnWrapper = (
  callback: (page: Page, driver: AppDriver) => Promise<void>
) => {
  let driver: AppDriver;

  return async ({ page }) => {
    if (!driver) {
      driver = new AppDriver(page);
    }
    await callback(page, driver);
  };
};
