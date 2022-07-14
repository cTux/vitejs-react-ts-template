import { test, expect } from '@playwright/test';
import { fnWrapper } from './fnWrapper';

test(
  'App - should match snapshot',
  fnWrapper(async (page, driver) => {
    await driver.render();
    await expect(driver.component).toHaveScreenshot('app.png');
  })
);

test(
  'App - should change state and re-render',
  fnWrapper(async (page, driver) => {
    await driver.render();
    await expect(driver.counter.component).toHaveText('Counter: 0');
    await driver.button.component.click();
    await expect(driver.counter.component).toHaveText('Counter: 1');
  })
);
