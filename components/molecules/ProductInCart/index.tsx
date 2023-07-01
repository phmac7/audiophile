'use client';
import { ToggleQuantity } from '@/components/atoms';
import Image from 'next/image';
import styles from './ProductInCart.module.scss';
import { useCartStore } from '@/store/cart-store';
import { ProductInCartProps } from '@/models/componentsProps';

const ProductInCart: React.FC<ProductInCartProps> = ({
  name,
  price,
  imgUrl,
  id,
  withToggle = 'false',
}) => {
  const itemList = useCartStore((state) => state.itemList);
  const itemQuantity = itemList.find((item) => item.id === id)?.quantity;
  return (
    <article className={styles.product}>
      <Image
        src={imgUrl}
        alt={name}
        width={64}
        height={64}
        className={styles.product__img}
      />
      <div className={styles.product__text}>
        <span className={styles.product__textTitle}>{name}</span>
        <span className={styles.product__textPrice}>${price}</span>
      </div>
      {withToggle ? (
        <ToggleQuantity forCart={true} id={id!} />
      ) : (
        <span>{itemQuantity}</span>
      )}
    </article>
  );
};

export default ProductInCart;
