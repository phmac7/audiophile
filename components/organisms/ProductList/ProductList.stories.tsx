import { Meta, StoryObj } from '@storybook/react';
import ProductList from '.';
import { ProductListProps } from '@/models/componentsProps';

export default {
  title: 'Components/Organisms/ProductList',
  component: ProductList,
} as Meta;

export const Populated: StoryObj<ProductListProps> = {
  args: {
    productList: [
      {
        name: 'Product 1',
        sys: { id: '1' },
        description: {
          json: { content: [{ content: [{ value: 'Lorem Lorem' }] }] },
        },
        isNew: true,
        productImages: {
          desktop: {
            url: '/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg',
          },
          mobile: {
            url: '/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg',
          },
          tablet: {
            url: '/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg',
          },
        },
        slug: 'product-1',
      },
      {
        name: 'Product 2',
        sys: { id: '2' },
        description: {
          json: { content: [{ content: [{ value: 'Lorem Lorem' }] }] },
        },
        isNew: true,
        productImages: {
          desktop: {
            url: '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
          },
          mobile: {
            url: '/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
          },
          tablet: {
            url: '/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
          },
        },
        slug: 'product-1',
      },
    ],
  },
};

export const Empty: StoryObj<ProductListProps> = {
  args: {
    productList: [],
  },
};
