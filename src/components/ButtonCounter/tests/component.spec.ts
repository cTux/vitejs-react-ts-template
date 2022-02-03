import { ButtonCounterDriver } from './driver';

describe('ButtonCounter', () => {
  let driver: ButtonCounterDriver;

  beforeEach(() => {
    driver = new ButtonCounterDriver();
  });

  it('should render w/o errors', () => {
    expect(() => driver.render()).not.toThrow();
  });

  it('should increment counter', async () => {
    await driver.render();
    expect(driver.btn.get.text()).toEqual('btn.counter 0');
    driver.btn.when.clicked();
    expect(driver.btn.get.text()).toEqual('btn.counter 1');
  });
});
