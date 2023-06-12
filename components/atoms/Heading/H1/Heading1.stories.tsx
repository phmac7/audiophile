import { Meta, StoryObj } from '@storybook/react';
import { H1 } from '@/components/atoms';
import { HeadingProps } from '@/components/atoms/Heading/H1';

export default {
  title: 'Components/Atoms/Heading',
  component: H1,
} as Meta;

export const h1: StoryObj<HeadingProps> = {
  args: {
    text: 'Heading',
  },
};
