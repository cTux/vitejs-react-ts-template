import { LoadingMessageDriver } from './driver';
import cn from '../styles.module.scss';

describe('LoadingMessage', () => {
  let driver: LoadingMessageDriver;

  beforeEach(() => {
    driver = new LoadingMessageDriver();
  });

  it('should render w/o errors and exist', async () => {
    await driver.render();
    expect(driver.component.has.class(cn.loadingMessage));
    expect(driver.component.get.text()).toEqual('Loading...');
  });
});
