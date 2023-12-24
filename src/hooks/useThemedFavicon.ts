import { useCallback, useEffect } from 'react';

export const useThemedFavicon = () => {
  const matcher = window.matchMedia('(prefers-color-scheme: dark)');
  const lightSchemeIcon = window.document.querySelector('#fav-dark');
  const darkSchemeIcon = window.document.querySelector('#fav-light');

  const onUpdate = useCallback(() => {
    if (matcher.matches) {
      lightSchemeIcon.remove();
      window.document.head.append(darkSchemeIcon);
    } else {
      window.document.head.append(lightSchemeIcon);
      darkSchemeIcon.remove();
    }
  }, []);

  useEffect(() => {
    matcher.addEventListener('change', onUpdate);
    onUpdate();

    return () => matcher.removeEventListener('change', onUpdate);
  }, []);
};
