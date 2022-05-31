import { TitleProps } from './types';

export const Title = ({ title }: TitleProps) => {
  return <h1>{title || 'App'}</h1>;
};
