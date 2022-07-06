import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { LoadingMessage } from './components/LoadingMessage';
import { App } from './components/App';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<LoadingMessage />}>
    <App />
  </Suspense>
);
