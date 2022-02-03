import i18next from './i18next.mock';

export const useTranslation = () => {
  return {
    t: i18next.t,
    i18n: i18next,
  };
};

export const Trans = ({ children }) => <>{children}</>;
