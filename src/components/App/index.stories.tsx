import { Meta } from '@storybook/react';
import { App } from './';

export default {
  component: App,
} as Meta<typeof App>;

export const Primary = () => <App />;
