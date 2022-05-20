import { spy } from 'sinon';
import { i18n } from '../utils/changeLanguage';

describe('changeLanguage', () => {
  it('should return undefined', () => {
    expect(i18n.changeLanguage({}, 'en')).toEqual(undefined);
  });

  it('should trigger function with argument', () => {
    const language = 'en';
    const changeLanguage = spy();
    i18n.changeLanguage({ changeLanguage }, language);
    expect(changeLanguage.calledWith(language)).toEqual(true);
  });
});
