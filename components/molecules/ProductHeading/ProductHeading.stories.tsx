import { Meta, StoryObj } from '@storybook/react';
import ProductHeading from '.';
import { ProductHeadingProps } from '@/models/componentsProps';

export default {
  title: 'Components/Molecules/ProductHeading',
  component: ProductHeading,
} as Meta;

export const Default: StoryObj<ProductHeadingProps> = {
  args: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adip sapien sed diam non pro id elit. Ut enim ad minim veniam et   dolore magna aliqu',
    id: '1',
    image: {
      desktop: {
        url: '/assets/product-yx1-earphones/desktop/image-product.jpg',
      },
      mobile: { url: '/assets/product-yx1-earphones/mobile/image-product.jpg' },
      tabletPdp: {
        url: '/assets/product-yx1-earphones/tablet/image-product.jpg',
      },
    },
    isNew: true,
    price: 99999.99,
    title: 'Product Title',
  },
};
