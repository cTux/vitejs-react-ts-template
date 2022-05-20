import cns from 'clsx';
import { Title } from '../Title';
import { useInitI18n } from './hooks/useInitI18n';
import { AppProps } from './types';
import cn from './styles.module.scss';
import { ButtonCounter } from '../ButtonCounter';
import { ButtonsLanguage } from '../ButtonsLanguage';
import { LoadingMessage } from '../LoadingMessage';

export const App = ({ title }: AppProps) => {
  const { loading } = useInitI18n();

  if (loading) {
    return <LoadingMessage />;
  }

  return (
    <div className={cns(cn.app)}>
      <Title title={title} />
      <ButtonCounter />
      <ButtonsLanguage />
    </div>
  );
};
