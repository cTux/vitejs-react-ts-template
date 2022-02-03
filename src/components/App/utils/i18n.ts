import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Fetch from 'i18next-fetch-backend';

export const initializeLocale = (lng = 'en') =>
  i18n
    .use(Fetch)
    .use(initReactI18next)
    .init({
      debug: false, // TODO: Use query param
      initImmediate: false,
      backend: {
        loadPath: './locales/{{lng}}.json',
      },
      detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie'],
      },
      lng,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
