'use client';
import { ToggleQuantity } from '@/components/atoms';
import Image from 'next/image';
import React from 'react';
import styles from './ProductInCart.module.scss';
import { useCartStore } from '@/store/cart-store';

interface ProductInCartProps {
  id?: string;
  name: string;
  price: number;
  imgUrl: string;
}

const ProductInCart: React.FC<ProductInCartProps> = ({
  name,
  price,
  imgUrl,
  id,
}) => {
  const itemList = useCartStore((state) => state.itemList);
  console.log(itemList);
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
      <ToggleQuantity forCart={true} id={id!} />
    </article>
  );
};

export default ProductInCart;
