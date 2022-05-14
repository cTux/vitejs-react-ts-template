import { AppDriver as EnzymeAppDriver } from './driver.enzyme';
import { AppDriver as TestingLibraryAppDriver } from './driver.tl';
import cn from '../styles.module.scss';

describe('App', () => {
  [EnzymeAppDriver, TestingLibraryAppDriver].forEach((Driver) => {
    describe(`${Driver.displayName}`, () => {
      let driver;

      beforeEach(() => {
        driver = new Driver();
      });

      it('should render w/o errors', () => {
        expect(() => driver.render()).not.toThrow();
      });

      it('should have default view', async () => {
        await driver.render();
        expect(driver.component.get.html()).toMatchSnapshot();
      });
    });
  });
});
