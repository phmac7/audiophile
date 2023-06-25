import { Meta, StoryObj } from '@storybook/react';
import InTheBox from '.';
import { InTheBoxProps } from '@/models/componentsProps';

export default {
  title: 'Components/Molecules/InTheBox',
  component: InTheBox,
} as Meta;

export const Default: StoryObj<InTheBoxProps> = {
  args: {
    items: [
      { item: 'Headphone', quantity: 1 },
      { item: 'Headphone', quantity: 2 },
      { item: 'User Manual', quantity: 4 },
    ],
  },
};
