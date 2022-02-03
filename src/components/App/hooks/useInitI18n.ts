import { useEffect, useState } from 'react';
import { initializeLocale } from '../utils/i18n';

export const useInitI18n = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    initializeLocale().then(() => setLoading(false));
  }, []);

  return {
    loading,
  };
};
