import { supportedLanguages } from './supportedLanguages';
import { Language } from './types';
import { useTranslation } from 'react-i18next';
import cn from './styles.module.scss';
import { i18n } from './utils/changeLanguage';

export const ButtonsLanguage = () => {
  const { t, i18n: i18nInstance } = useTranslation();

  return (
    <div className={cn.buttonsContainer}>
      {supportedLanguages.map((language: Language) => {
        return (
          <button
            key={language}
            data-testid={`btn-${language}`}
            onClick={() => i18n.changeLanguage(i18nInstance, language)}
          >
            {t(`btn.switch-to.${language}`)}
          </button>
        );
      })}
    </div>
  );
};
