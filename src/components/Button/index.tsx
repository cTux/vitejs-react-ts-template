import { ButtonProps } from './types';

export const Button = (props: ButtonProps = {}) => {
  const { onClick } = props;
  return <button onClick={onClick}>Click me!</button>;
};
