import { LoadingMessageDriver } from './driver';

describe('LoadingMessage', () => {
  let driver: LoadingMessageDriver;

  beforeEach(() => {
    driver = new LoadingMessageDriver();
  });

  it('should render w/o errors and exist', async () => {
    await driver.render();
    expect(driver.component.textContent).toEqual('Loading...');
  });
});
