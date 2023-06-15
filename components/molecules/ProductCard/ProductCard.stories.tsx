import { Meta, StoryObj } from '@storybook/react';
import ProductCard, { ProductCardProps } from '.';
import data from '@/data.json';

const product = data[0];

export default {
  title: 'Components/Molecules/ProductCard',
  component: ProductCard,
  argTypes: {
    indexInArray: {
      name: 'image to the right on desktop',
      options: [0, 1],
      control: { type: 'boolean' },
    },
  },
} as Meta;

// const getNumber = ()

export const Primary: StoryObj<ProductCardProps> = {
  args: {
    description: product.description,
    desktopImgUrl: product.image.desktop,
    isNew: true,
    indexInArray: 0,
    mobileImgUrl: product.image.mobile,
    slug: product.slug,
    tabletImgUrl: product.image.tablet,
    title: product.name,
  },
};
export const Secondary: StoryObj<ProductCardProps> = {
  args: {
    description: product.description,
    desktopImgUrl: product.image.desktop,
    isNew: true,
    indexInArray: 1,
    mobileImgUrl: product.image.mobile,
    slug: product.slug,
    tabletImgUrl: product.image.tablet,
    title: product.name,
  },
};
