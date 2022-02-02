import { useState } from 'react';
import cns from 'classnames';
import { AppProps } from './types';
import cn from './styles.module.scss';

export const App = ({ title = 'App' }: AppProps) => {
  const [counter, setCounter] = useState<number>(0);
  const handleClick = () => setCounter((previousValue) => previousValue + 1);
  return (
    <div className={cns(cn.app)}>
      <h1>{title}</h1>
      <button onClick={handleClick}>Counter: {counter}</button>
    </div>
  );
};
