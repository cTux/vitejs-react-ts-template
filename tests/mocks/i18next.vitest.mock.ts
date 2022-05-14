import { i18next } from './i18next.mock';

// eslint-disable-next-line
// @ts-ignore
vi.mock('i18next', () => ({
  default: i18next,
}));
