import { LoadingMessageDriver as LoadingMessageDriverEnzyme } from './driver.enzyme';
import { LoadingMessageDriver as TitleDriverTestingLibrary } from './driver.tl';
import cn from '../styles.module.scss';

[LoadingMessageDriverEnzyme, TitleDriverTestingLibrary].forEach((Driver) => {
  describe('LoadingMessage', () => {
    let driver;

    beforeEach(() => {
      driver = new Driver();
    });

    it('should render w/o errors and exist', async () => {
      await driver.render();
      expect(driver.component.has.class(cn.loadingMessage));
      expect(driver.component.get.text()).toEqual('Loading...');
    });
  });
});
