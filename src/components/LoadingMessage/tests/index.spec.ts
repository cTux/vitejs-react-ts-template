import { LoadingMessageDriver } from './driver';
import cn from '../styles.module.scss';

describe('LoadingMessage', () => {
  let driver: LoadingMessageDriver;

  beforeEach(() => {
    driver = new LoadingMessageDriver();
  });

  it('should render w/o errors and exist', async () => {
    await driver.render();
    expect(driver.component.classList.contains(cn.anyOtherClass));
    expect(driver.component.textContent).toEqual('Loading...');
  });
});
