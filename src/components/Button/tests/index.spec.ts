import { ButtonDriver } from './driver';
import { fakeFn } from '../../../../tests/mocks/fn';

describe('Button', () => {
  let driver: ButtonDriver;

  beforeEach(() => {
    driver = new ButtonDriver();
  });

  it('should render w/o errors', async () => {
    await driver.render();
    expect(driver.component.textContent).toEqual('Click me!');
  });

  it('should trigger callback fn', async () => {
    const onClick = fakeFn();
    await driver.render({ onClick });
    driver.trigger.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
