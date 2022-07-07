import { test, expect } from '@playwright/test';
import { ButtonDriver } from './driver';

test('Button', async ({ page }, testInfo, driver = new ButtonDriver(page)) => {
  await driver.render();
  await expect(driver.component).toHaveScreenshot('button.png');
});
