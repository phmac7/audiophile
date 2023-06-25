import styles from './ProductFeatures.module.scss';
import { H3, Paragraph } from '@/components/atoms';
import { ProductFeaturesProps } from '@/models/componentsProps';

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  return (
    <div className={styles.features}>
      <H3 text={'Features'} />
      <Paragraph text={features} />
    </div>
  );
};

export default ProductFeatures;
