import { Meta, StoryObj } from '@storybook/react';
import { H3 } from '@/components/atoms';
import { HeadingProps } from '@/components/atoms/Heading/H1';

export default {
  title: 'Components/Atoms/Heading',
  component: H3,
} as Meta;

export const h3: StoryObj<HeadingProps> = {
  args: {
    text: 'Heading',
  },
};
