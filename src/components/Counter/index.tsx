import { clsx } from 'clsx';

import cn from './styles.module.scss';
import { CounterProps } from './types';

export const Counter = (props: CounterProps) => {
  const { value, shouldUseBoldClass } = props;
  return (
    <h3
      className={clsx({
        [cn.counter]: true,
        [cn.bold]: !!shouldUseBoldClass,
      })}
    >
      Counter: {value}
    </h3>
  );
};
