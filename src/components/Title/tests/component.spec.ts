import { TitleDriver as TitleDriverEnzyme } from './driver.enzyme';
import { TitleDriver as TitleDriverTestingLibrary } from './driver.tl';

[TitleDriverEnzyme, TitleDriverTestingLibrary].forEach((Driver) => {
  describe('Title', () => {
    let driver;

    beforeEach(() => {
      driver = new Driver();
    });

    it('should render w/o errors and exist', async () => {
      await driver.render();
      expect(driver.component.get.text()).toEqual('app.title');
    });

    it('should render custom title', async () => {
      const title = 'test.title';
      await driver.render({ title });
      expect(driver.component.get.text()).toEqual(title);
    });
  });
});
