import { Meta, StoryObj } from '@storybook/react';
import Overline from '.';

export default {
  title: 'Components/Atoms/Overline',
  component: Overline,
  argTypes: {
    variation: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta;

export const Primary: StoryObj = {
  args: {
    text: 'New Product',
    variation: 'primary',
  },
};
export const Secondary: StoryObj = {
  args: {
    text: 'New Product',
    variation: 'secondary',
  },
};
