import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ButtonCounter = () => {
  const { t } = useTranslation();
  const [counter, setCounter] = useState<number>(0);
  const handleClick = () => setCounter((previousValue) => previousValue + 1);

  return (
    <button onClick={handleClick}>
      {t('btn.counter')} {counter}
    </button>
  );
};
