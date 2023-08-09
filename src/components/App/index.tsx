import cns from 'clsx';
import { useCallback, useState } from 'react';

import { Button } from '~/components/Button';
import { Counter } from '~/components/Counter';

import cn from './styles.module.scss';

export const App = () => {
  const [value, setValue] = useState<number>(
    +import.meta.env.VITE_COUNTER || 0
  );
  const handleOnClick = useCallback(() => setValue((value) => value + 1), []);

  return (
    <div id={'app'} className={cns(cn.app)}>
      <Counter value={value} />
      <Button onClick={handleOnClick} />
    </div>
  );
};
