import cns from 'clsx';
import { AppProps } from './types';
import { Title } from '../Title';
import { ButtonCounter } from '../ButtonCounter';
import cn from './styles.module.scss';

export const App = ({ title }: AppProps) => {
  return (
    <div className={cns(cn.app)}>
      <Title title={title} />
      <ButtonCounter />
    </div>
  );
};
