import { Meta, StoryObj } from '@storybook/react';
import FeaturedProduct from '.';
import { FeaturedProductProps } from '@/models/componentsProps';

export default {
  title: 'Components/Molecules/FeaturedProduct',
  component: FeaturedProduct,
} as Meta;

export const Primary: StoryObj<FeaturedProductProps> = {
  args: {
    title: 'Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adip',
    mobileImg: '/assets/home/desktop/image-speaker-zx9.png',
    tabletImg: '/assets/home/desktop/image-speaker-zx9.png',
    desktopImg: '/assets/home/desktop/image-speaker-zx9.png',
    variation: 'primary',
  },
};

export const Secondary: StoryObj<FeaturedProductProps> = {
  args: {
    title: 'Title',
    mobileImg: '/assets/home/mobile/image-speaker-zx7.jpg',
    tabletImg: '/assets/home/tablet/image-speaker-zx7.jpg',
    desktopImg: '/assets/home/desktop/image-speaker-zx7.jpg',
    variation: 'secondary',
  },
};

export const Tertiary: StoryObj<FeaturedProductProps> = {
  args: {
    title: 'Title',
    mobileImg: '/assets/home/mobile/image-earphones-yx1.jpg',
    tabletImg: '/assets/home/tablet/image-earphones-yx1.jpg',
    desktopImg: '/assets/home/desktop/image-earphones-yx1.jpg',
    variation: 'tertiary',
  },
};
