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
    expect(driver.title.get.text()).toEqual('App');
    expect(driver.btn.get.text()).toEqual('Counter: 0');
    expect(driver.component.get.props()).toEqual({});
  });

  it('should match snapshot when props passed', () => {
    const title = 'Test';
    driver.render({ title });
    expect(driver.title.get.text()).toEqual(title);
    expect(driver.btn.get.text()).toEqual('Counter: 0');
    expect(driver.component.get.props()).toEqual({ title });
  });

  it('should increment the counter', () => {
    driver.render();
    expect(driver.btn.get.text()).toEqual('Counter: 0');
    driver.btn.when.clicked();
    expect(driver.btn.get.text()).toEqual('Counter: 1');
  });
});
