import { Meta, StoryObj } from '@storybook/react';
import Navbar from '.';
import { MenuDropDown } from '@/components/molecules';

export default {
  title: 'Components/Organisms/Navbar',
  component: Navbar,
} as Meta;

export const Default: StoryObj = {};

export const MenuDropdown: StoryObj = {
  decorators: [
    () => {
      return <MenuDropDown />;
    },
  ],
};
