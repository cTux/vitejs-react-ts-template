import { useTranslation } from 'react-i18next';
import { TitleProps } from './types';

export const Title = ({ title }: TitleProps) => {
  const { t } = useTranslation();
  return <h1>{title || t('app.title')}</h1>;
};
