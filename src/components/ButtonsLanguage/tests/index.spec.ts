import { SinonSpy, spy } from 'sinon';
import { ButtonsLanguageDriver } from './driver';
import { supportedLanguages } from '../supportedLanguages';
import { i18n } from '../utils/changeLanguage';
import { Language } from '../types';
import cn from '../styles.module.scss';

describe('ButtonsLanguage', () => {
  let driver: ButtonsLanguageDriver;
  let changeLanguageSpy: SinonSpy;

  beforeEach(() => {
    driver = new ButtonsLanguageDriver();
    changeLanguageSpy = spy(i18n, 'changeLanguage');
  });

  afterEach(() => {
    changeLanguageSpy.restore();
  });

  it('should render w/o errors and exist', async () => {
    await driver.render();
    expect(driver.component.has.class(cn.buttonsContainer));
    expect(driver.btn.get.length()).toEqual(2);
  });

  supportedLanguages.forEach((lang: Language) => {
    it(`should trigger ${lang} change`, async () => {
      await driver.render();
      driver.btn.when.clicked(lang);
      expect(changeLanguageSpy.calledOnce).toEqual(true);
    });
  });
});
