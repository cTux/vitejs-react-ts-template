import { AppDriver } from './driver';
import cn from '../styles.module.scss';

describe('App', () => {
  let driver: AppDriver;

  beforeEach(() => {
    driver = new AppDriver();
  });

  it('should render w/o errors', () => {
    expect(() => driver.render()).not.toThrow();
  });

  it.skip('should have a class', async () => {
    await driver.render();
    expect(driver.component.has.class(cn.app)).toEqual(true);
  });
});
