import { supportedLanguages } from './supportedLanguages';
import { Language } from './types';
import { useTranslation } from 'react-i18next';
import cn from './styles.module.scss';

export const ButtonsLanguage = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={cn.buttonsContainer}>
      {supportedLanguages.map((lang: Language) => {
        // TODO: Create button component
        return (
          <button
            key={lang}
            data-qa={`btn-${lang}`}
            onClick={() => i18n.changeLanguage(lang)}
          >
            {t(`btn.switch-to.${lang}`)}
          </button>
        );
      })}
    </div>
  );
};
