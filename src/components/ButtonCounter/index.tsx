import { useState } from 'react';

export const ButtonCounter = () => {
  const [counter, setCounter] = useState<number>(0);
  const handleClick = () => setCounter((previousValue) => previousValue + 1);
  return <button onClick={handleClick}>Counter: {counter}</button>;
};
