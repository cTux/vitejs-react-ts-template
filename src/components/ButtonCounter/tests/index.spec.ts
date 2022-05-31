import { ButtonCounterDriver } from './driver';

describe('ButtonCounter', () => {
  let driver: ButtonCounterDriver;

  beforeEach(() => {
    driver = new ButtonCounterDriver();
  });

  it('should increment counter', async () => {
    await driver.render();
    expect(driver.component.get.text()).toEqual('Counter: 0');
    driver.component.when.clicked();
    expect(driver.component.get.text()).toEqual('Counter: 1');
  });
});
