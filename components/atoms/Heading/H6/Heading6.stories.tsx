import { Meta, StoryObj } from '@storybook/react';
import { H6 } from '@/components/atoms';
import { HeadingProps } from '@/components/atoms/Heading/H1';

export default {
  title: 'Components/Atoms/Heading',
  component: H6,
} as Meta;

export const h6: StoryObj<HeadingProps> = {
  args: {
    text: 'Heading',
  },
};
