import React from 'react';
import styles from './ProductFeatures.module.scss';
import { H3, Paragraph } from '@/components/atoms';

interface ProductFeaturesProps {
  features: string | undefined;
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <div className={styles.features}>
      <H3 text={'Features'} />
      <Paragraph text={features} />
    </div>
  );
};

export default ProductFeatures;
