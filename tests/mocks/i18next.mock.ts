import { I18Next } from './types';
import { t } from '../utils/t';

export const i18next: I18Next = {
  t,
  language: 'en',
  changeLanguage: () => Promise.resolve({}),
  use: () => i18next,
  init: () => Promise.resolve(i18next),
};

export default i18next;
