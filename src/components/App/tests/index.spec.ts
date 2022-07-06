import { AppDriver } from './driver';

describe('App', () => {
  let driver: AppDriver;

  beforeEach(() => {
    driver = new AppDriver();
  });

  it('should change state and re-render', async () => {
    await driver.render();
    expect(driver.counter.component.textContent).toEqual('Counter: 0');
    driver.button.when.buttonClicked();
    expect(driver.counter.component.textContent).toEqual('Counter: 1');
  });
});
