import { Meta, StoryObj } from '@storybook/react';
import YouMayAlsoLike from '.';
import { YouMayAlsoLikeProps } from '@/models/componentsProps';

export default {
  title: 'Components/Molecules/YouMayAlsoLike',
  component: YouMayAlsoLike,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>{Story()}</div>
    ),
  ],
} as Meta;

export const Default: StoryObj<YouMayAlsoLikeProps> = {
  args: {
    products: {
      items: [
        {
          name: 'Product 1',
          slug: 'product-1',
          productImages: {
            desktop: {
              url: '/assets/product-yx1-earphones/desktop/image-product.jpg',
            },
          },
        },
        {
          name: 'Product 2',
          slug: 'product-2',
          productImages: {
            desktop: {
              url: '/assets/product-yx1-earphones/desktop/image-product.jpg',
            },
          },
        },
        {
          name: 'Product 3',
          slug: 'product-3',
          productImages: {
            desktop: {
              url: '/assets/product-yx1-earphones/desktop/image-product.jpg',
            },
          },
        },
      ],
    },
  },
};
