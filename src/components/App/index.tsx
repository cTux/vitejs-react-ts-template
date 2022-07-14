import { useCallback, useState } from 'react';
import cns from 'clsx';
import { Counter } from '~/components/Counter';
import { Button } from '~/components/Button';
import cn from './styles.module.scss';

export const App = () => {
  const [value, setValue] = useState<number>(0);
  const handleOnClick = useCallback(() => setValue((value) => value + 1), []);

  return (
    <div id={'app'} className={cns(cn.app)}>
      <Counter value={value} />
      <Button onClick={handleOnClick} />
    </div>
  );
};
