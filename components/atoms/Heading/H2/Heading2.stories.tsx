import { Meta, StoryObj } from '@storybook/react';
import { H2 } from '@/components/atoms';
import { HeadingProps } from '@/models/componentsProps';

export default {
  title: 'Components/Atoms/Heading',
  component: H2,
} as Meta;

export const h2: StoryObj<HeadingProps> = {
  args: {
    text: 'Heading',
  },
};
