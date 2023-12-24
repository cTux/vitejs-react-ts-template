import { beforeEach } from 'vitest';

import { CounterDriver } from './driver';

describe('Counter', () => {
  let driver: CounterDriver;

  beforeEach(() => {
    driver = new CounterDriver();
  });

  it('should render w/o errors - default props', async () => {
    await driver.render();
    expect(driver.component.textContent).toEqual('Counter: 0');
  });

  it('should render w/o errors - overriding default props', async () => {
    await driver.render({ value: 1 });
    expect(driver.component.textContent).toEqual('Counter: 1');
  });
});
