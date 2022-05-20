import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoadingMessage } from './index';

export default {
  title: 'Components/LoadingMessage',
  component: LoadingMessage,
} as ComponentMeta<typeof LoadingMessage>;

const Template: ComponentStory<typeof LoadingMessage> = (args) => (
  <LoadingMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
