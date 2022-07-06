import { beforeEach } from 'vitest';
import { CounterDriver } from './driver';

describe('Counter', () => {
  let driver: CounterDriver;

  beforeEach(() => {
    driver = new CounterDriver();
  });

  it('should render w/o errors', async () => {
    await driver.render({ value: 1 });
    expect(driver.component.textContent).toEqual('Counter: 1');
  });
});
