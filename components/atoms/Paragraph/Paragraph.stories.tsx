import { Meta, StoryObj } from '@storybook/react';
import Paragraph from '.';
import { ParagraphProps } from '@/models/componentsProps';

export default {
  title: 'Components/Atoms/Paragraph',
  component: Paragraph,
} as Meta;

export const Primary: StoryObj<ParagraphProps> = {
  args: {
    text: 'Lorem Ipsum is Lorem Ipsum in a Vestibulum tell us Lorem Ipsum. Lorem Ipsum is Lorem Ipsum',
  },
};

export const secondary: StoryObj<ParagraphProps> = {
  args: {
    text: 'Lorem Ipsum is Lorem Ipsum in a Vestibulum tell us Lorem Ipsum. Lorem Ipsum is Lorem Ipsum',
    variation: 'secondary',
  },
};
