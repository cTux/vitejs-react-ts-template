import { ComponentMeta } from '@storybook/react';
import { App } from './';

export default {
  component: App,
} as ComponentMeta<typeof App>;

export const Primary = () => <App />;
