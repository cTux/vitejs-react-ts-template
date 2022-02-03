import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from '../';

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = () => <Title />;
export const CustomTitle: ComponentStory<typeof Title> = () => (
  <Title title={'Custom Title'} />
);
