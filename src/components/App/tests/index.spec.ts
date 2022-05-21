import { AppDriver } from './driver';

describe('App', () => {
  let driver;

  beforeEach(() => {
    driver = new AppDriver();
  });

  it('should have default view', async () => {
    await driver.render();
    expect(driver.component.get.html()).toMatchSnapshot();
  });
});
