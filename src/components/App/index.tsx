import { CssBaseline } from '@mui/material';
import { useCallback, useState } from 'react';

import { AppContainer } from '~/components/App/styles';
import { Button } from '~/components/Button';
import { Counter } from '~/components/Counter';

export const App = () => {
  const [value, setValue] = useState<number>(
    +import.meta.env.VITE_COUNTER || 0
  );

  const handleOnClick = useCallback(() => setValue((value) => value + 1), []);

  return (
    <AppContainer id="app">
      <CssBaseline />
      <Counter value={value} />
      <Button onClick={handleOnClick} />
    </AppContainer>
  );
};
