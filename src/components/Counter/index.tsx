import { Typography } from '@mui/material';

import { CounterProps } from './types';

export const Counter = (props: CounterProps) => {
  const { value } = props;
  return (
    <Typography variant="h3" id="counter">
      Counter: {value}
    </Typography>
  );
};
