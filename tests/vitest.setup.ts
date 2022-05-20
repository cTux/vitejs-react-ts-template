import fetch from 'node-fetch';
import './mocks/i18next.vitest.mock';

// eslint-disable-next-line
// @ts-ignore
global.fetch = fetch;
