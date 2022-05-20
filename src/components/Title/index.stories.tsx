import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title } from './index';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'WithTitle',
};
