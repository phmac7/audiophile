import { Meta, StoryObj } from '@storybook/react';
import Button from './';

export default {
  title: 'Componentes/Atoms/Button',
  component: Button,
  args: {
    label: 'see product',
  },
} as Meta;

export const Primary: StoryObj = {
  args: {
    variation: 'primary',
  },
};
export const Secondary: StoryObj = {
  args: {
    variation: 'secondary',
  },
};
export const Tertiary: StoryObj = {
  args: {
    variation: 'tertiary',
  },
};
