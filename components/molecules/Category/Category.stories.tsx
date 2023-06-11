import { Meta, StoryObj } from '@storybook/react';
import Category from '.';

export default {
  title: 'Components/Molecules/Category',
  component: Category,
  decorators: [
    (Story: any) => {
      return <div style={{ marginTop: '70px' }}>{Story()}</div>;
    },
  ],
} as Meta;

export const Headphones: StoryObj = {
  args: { category: 'headphones' },
};
export const Earphones: StoryObj = {
  args: { category: 'earphones' },
};
export const Speakers: StoryObj = {
  args: { category: 'speakers' },
};
