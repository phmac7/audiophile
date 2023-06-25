import { Meta, StoryObj } from '@storybook/react';
import ProductFeatures from '.';
import { ProductFeaturesProps } from '@/models/componentsProps';

export default {
  title: 'Components/Molecules/ProductFeatures',
  component: ProductFeatures,
} as Meta;

export const Default: StoryObj<ProductFeaturesProps> = {
  args: {
    features:
      'Lorem Ipsum d     Pattern     simil dolor sit amet, consectetur adipiscing el     aspect et accusam et mag et nisi et     ullamcorper et et et et et ipsum dolor sit amet et accusam et mag et nisi et ull',
  },
};
