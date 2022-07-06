import { clsx } from 'clsx';
import { CounterProps } from './types';
import cn from './styles.module.scss';

export const Counter = (props: CounterProps) => {
  return <h3 className={clsx(cn.counter, cn.bold)}>Counter: {props.value}</h3>;
};
