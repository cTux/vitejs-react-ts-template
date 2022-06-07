import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { App } from './components/App';
import './index.scss';

createRoot(document.getElementById('root')).render(<App />);
