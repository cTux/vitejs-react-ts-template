import { Button as ButtonMUI } from '@mui/material';

import { ButtonProps } from './types';

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <ButtonMUI id="clickMe" variant="contained" onClick={onClick}>
      Click me!
    </ButtonMUI>
  );
};
