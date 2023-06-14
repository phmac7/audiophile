import { Meta, StoryObj } from '@storybook/react';
import { H4 } from '@/components/atoms';
import { HeadingProps } from '@/components/atoms/Heading/H1';

export default {
  title: 'Components/Atoms/Heading',
  component: H4,
} as Meta;

export const h4: StoryObj<HeadingProps> = {
  args: {
    text: 'Heading',
  },
};
