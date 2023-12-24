import { App } from '~/components/App';
import { useThemedFavicon } from '~/hooks/useThemedFavicon';

export const AppHooksWrapper = () => {
  useThemedFavicon();

  return <App />;
};
