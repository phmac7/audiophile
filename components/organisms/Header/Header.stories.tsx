import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
} as Meta;

export const Homepage: StoryObj = {
  args: {
    pathname: '/',
  },
};

export const Headphones: StoryObj = {
  args: {
    pathname: '/headphones',
  },
};
