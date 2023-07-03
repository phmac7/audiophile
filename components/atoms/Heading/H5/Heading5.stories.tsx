import { Meta, StoryObj } from '@storybook/react';
import { H5 } from '@/components/atoms';
import { HeadingProps } from '@/models/componentsProps';

export default {
  title: 'Components/Atoms/Heading',
  component: H5,
} as Meta;

export const h5: StoryObj<HeadingProps> = {
  args: {
    text: 'Heading',
  },
};
