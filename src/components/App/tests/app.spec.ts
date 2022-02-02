import { AppDriver } from './driver';

describe('App', () => {
  let driver: AppDriver;

  beforeEach(() => {
    driver = new AppDriver();
  });

  it('should render w/o errors', () => {
    expect(() => driver.render()).not.toThrow();
  });

  it('should match initial snapshot', () => {
    driver.render();
    expect(driver.title.text()).toEqual('App');
    expect(driver.btn.text()).toEqual('Counter: 0');
    expect(driver.component.props()).toEqual({});
  });

  it('should match snapshot when props passed', () => {
    const title = 'Test';
    driver.render({ title });
    expect(driver.title.text()).toEqual(title);
    expect(driver.btn.text()).toEqual('Counter: 0');
    expect(driver.component.props()).toEqual({ title });
  });

  it('should increment the counter', () => {
    driver.render();
    expect(driver.btn.text()).toEqual('Counter: 0');
    driver.btn.click();
    expect(driver.btn.text()).toEqual('Counter: 1');
  });
});
