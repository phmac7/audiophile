import { Meta, StoryObj } from '@storybook/react';
import Gallery from '.';
import { GalleryProps } from '@/models/componentsProps';

export default {
  title: 'Components/Molecules/Gallery',
  component: Gallery,
  decorators: [
    (Story) => {
      return <div style={{ maxWidth: '1110px' }}>{Story()}</div>;
    },
  ],
} as Meta;

export const Default: StoryObj<GalleryProps> = {
  args: {
    galleryData: {
      desktopCollection: {
        items: [
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
          },
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-2.jpg',
          },
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-3.jpg',
          },
        ],
      },
      mobileCollection: {
        items: [
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-2.jpg',
          },
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-3.jpg',
          },
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
          },
        ],
      },
      tabletCollection: {
        items: [
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-3.jpg',
          },
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-2.jpg',
          },
          {
            url: '/assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
          },
        ],
      },
    },
  },
};
