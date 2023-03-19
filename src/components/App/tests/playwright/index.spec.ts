import { expect, test } from '@playwright/test';

import { fnWrapper } from './fnWrapper';

test(
  'App - should change state and re-render',
  fnWrapper(async (page, driver) => {
    await driver.render();
    await expect(driver.counter.component).toHaveText('Counter: 0');
    await driver.button.component.click();
    await expect(driver.counter.component).toHaveText('Counter: 1');
  })
);
