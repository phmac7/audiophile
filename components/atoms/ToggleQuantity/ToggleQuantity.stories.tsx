import { Meta, StoryObj } from '@storybook/react';
import ToggleQuantity from '.';
import { ToggleQuantityProps } from '@/models/componentsProps';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Components/Atoms/ToggleQuantity',
  component: ToggleQuantity,
  argTypes: {
    id: {
      table: { disable: true },
    },
    forCart: {
      table: { disable: true },
    },
    decreaseQuantity: {
      table: { disable: true },
    },
    increaseQuantity: {
      table: { disable: true },
    },
  },
} as Meta<ToggleQuantityProps>;

export const Default = ({ quantity = 1 }) => {
  const [args, updateArgs] = useArgs();

  const increase = () => updateArgs({ quantity: quantity + 1 });
  const decrease = () => updateArgs({ quantity: quantity - 1 });
  // const handleClose = () => updateArgs({ isOpen: !isOpen });

  return (
    <ToggleQuantity
      quantity={quantity}
      increaseQuantity={increase}
      decreaseQuantity={decrease}
    />
  );
};
