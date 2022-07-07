import { test, expect } from '@playwright/test';
import { AppDriver } from './driver';

test('App', async ({ page }, testInfo, driver = new AppDriver(page)) => {
  await driver.render();
  await expect(driver.component).toHaveScreenshot('app.png');
  await expect(driver.counter.component).toHaveText('Counter: 0');
  await driver.button.component.click();
  await expect(driver.counter.component).toHaveText('Counter: 1');
});
