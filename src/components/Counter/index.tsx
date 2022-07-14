import { clsx } from 'clsx';
import { CounterProps } from './types';
import cn from './styles.module.scss';

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
