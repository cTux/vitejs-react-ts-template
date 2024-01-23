import { CssBaseline } from '@mui/material';
import { useCallback, useState } from 'react';

import { AppContainer } from '~/components/App/styles';
import { Button } from '~/components/Button';
import { Counter } from '~/components/Counter';
import { counterDefaultValue } from '~/env.variables';

export const App = () => {
  const [counterValue, setCounterValue] = useState<number>(counterDefaultValue);

  const handleOnClick = useCallback(
    () => setCounterValue((value) => value + 1),
    []
  );

  return (
    <AppContainer id="app">
      <CssBaseline />
      <Counter value={counterValue} />
      <Button onClick={handleOnClick} />
    </AppContainer>
  );
};
