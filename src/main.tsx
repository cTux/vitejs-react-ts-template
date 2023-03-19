import 'normalize.css';
import './index.scss';

import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '~/components/App';
import { LoadingMessage } from '~/components/LoadingMessage';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadingMessage />}>
    <App />
  </Suspense>
);
