import { Meta, StoryObj } from '@storybook/react';
import Categories from '.';

export default {
  title: 'Components/Organisms/Categories',
  component: Categories,
  decorators: [
    (Story: any) => {
      return (
        <div style={{ marginTop: '70px', width: '1110px' }}>{Story()}</div>
      );
    },
  ],
};

export const Default: StoryObj = {};
