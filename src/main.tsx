import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { AppHooksWrapper } from '~/components/AppHooksWrapper';
import { LoadingMessage } from '~/components/LoadingMessage';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadingMessage />}>
    <AppHooksWrapper />
  </Suspense>
);
