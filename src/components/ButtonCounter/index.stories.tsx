import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonCounter } from './index';

export default {
  title: 'Components/ButtonCounter',
  component: ButtonCounter,
} as ComponentMeta<typeof ButtonCounter>;

const Template: ComponentStory<typeof ButtonCounter> = (args) => (
  <ButtonCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {};
