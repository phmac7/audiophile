import { Meta, StoryObj } from '@storybook/react';
import Navbar from '.';
import { CartDropDown, MenuDropDown } from '@/components/molecules';

export default {
  title: 'Components/Organisms/Navbar',
  component: Navbar,
} as Meta;

export const Default: StoryObj = {};

export const MenuOpen: StoryObj = {
  decorators: [
    () => {
      return <MenuDropDown />;
    },
  ],
};

export const CartOpen: StoryObj = {
  decorators: [
    () => {
      return <CartDropDown />;
    },
  ],
};
