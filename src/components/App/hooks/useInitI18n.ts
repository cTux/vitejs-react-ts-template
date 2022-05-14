import { useEffect, useState } from 'react';
import { initializeLocale } from '../utils/i18n';
import { makeCancelable } from '../utils/cancellablePromise';

export const useInitI18n = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeLocalePromise = makeCancelable(initializeLocale());
    initializeLocalePromise.then(() => setLoading(false));

    return () => {
      initializeLocalePromise.cancel();
    };
  }, []);

  return {
    loading,
  };
};
