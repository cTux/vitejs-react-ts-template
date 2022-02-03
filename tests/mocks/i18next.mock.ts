import { I18Next } from './types';

const replaceBetween = (
  startIndex: number,
  endIndex: number,
  original: string,
  insertion: string
) =>
  original.substring(0, startIndex) + insertion + original.substring(endIndex);

const t = (i18nKey: string, args?: object) => {
  let key = i18nKey;

  // TODO: Replace the real localization string
  while (key.includes('{{')) {
    const startIndex = key.indexOf('{{');
    const endIndex = key.indexOf('}}');

    const currentArg = key.substring(startIndex + 2, endIndex);
    const value = args[currentArg];

    key = replaceBetween(startIndex, endIndex + 2, key, value);
  }

  return key;
};

const i18next = jest.createMockFromModule<I18Next>('i18next');
i18next.t = t;
i18next.language = 'en';
i18next.changeLanguage = () => new Promise(() => ({}));
i18next.use = () => i18next;
i18next.init = () => Promise.resolve(i18next);

export default i18next;
