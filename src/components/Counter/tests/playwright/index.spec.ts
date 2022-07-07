import { test, expect } from '@playwright/test';
import { CounterDriver } from './driver';

test('Counter', async ({ page }, testInfo, driver = new CounterDriver(
  page
)) => {
  await driver.render();
  await expect(driver.component).toHaveScreenshot('counter.png');
  await expect(driver.component).toHaveText('Counter: 0');
});
