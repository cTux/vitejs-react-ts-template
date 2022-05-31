import { TitleDriver } from './driver';

describe('Title', () => {
  let driver;

  beforeEach(() => {
    driver = new TitleDriver();
  });

  it('should render w/o errors and exist', async () => {
    await driver.render();
    expect(driver.component.get.text()).toEqual('App');
  });

  it('should render custom title', async () => {
    const title = 'test.title';
    await driver.render({ title });
    expect(driver.component.get.text()).toEqual(title);
  });
});
