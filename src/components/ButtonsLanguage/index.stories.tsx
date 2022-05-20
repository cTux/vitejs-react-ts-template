import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonsLanguage } from './index';

export default {
  title: 'Components/ButtonsLanguage',
  component: ButtonsLanguage,
} as ComponentMeta<typeof ButtonsLanguage>;

const Template: ComponentStory<typeof ButtonsLanguage> = (args) => (
  <ButtonsLanguage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
