import styles from './ProductDetails.module.scss';
import {
  ProductHeading,
  ProductFeatures,
  InTheBox,
  Gallery,
  YouMayAlsoLike,
} from '@/components/molecules';
import { ProductDetailsProps } from '@/models/componentsProps';

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  slug,
  gallery,
  similarProducts,
}) => {
  return (
    <div className={styles.productDetails}>
      <ProductHeading
        description={product?.description?.json.content[0].content[0].value}
        isNew={product?.isNew}
        price={product?.price}
        title={product?.name}
        image={product?.productImages}
        id={product?.sys.id!}
      />
      <div className={styles.productDetails__feat}>
        <ProductFeatures
          features={product?.features?.json.content[0].content[0].value}
        />
        <InTheBox items={product?.productBoxContentCollection?.items} />
      </div>
      <Gallery slug={slug!} galleryData={gallery} />
      <YouMayAlsoLike products={similarProducts} />
    </div>
  );
};

export default ProductDetails;
