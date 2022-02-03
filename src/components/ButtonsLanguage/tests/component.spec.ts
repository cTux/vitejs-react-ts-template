import { ButtonsLanguageDriver } from './driver';
import cn from '../styles.module.scss';
import { supportedLanguages } from '../supportedLanguages';
import { Language } from '../types';
import i18next from '../../../../tests/mocks/i18next.mock';

describe('ButtonsLanguage', () => {
  let driver: ButtonsLanguageDriver;
  let spyOnI18n;

  beforeEach(() => {
    driver = new ButtonsLanguageDriver();
    spyOnI18n = jest.spyOn(i18next, 'changeLanguage');
  });

  afterEach(() => {
    jest.restoreAllMocks();
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
      expect(spyOnI18n).toHaveBeenCalledWith(lang);
    });
  });
});
