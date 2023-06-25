'use client';
import Image from 'next/image';
import React from 'react';
import styles from './ProductHeading.module.scss';
import { AddToCart, H1, H2, Overline, Paragraph } from '@/components/atoms';
import { useWindowSize } from 'usehooks-ts';
import { ProductHeadingProps } from '@/models/componentsProps';

const ProductHeading: React.FC<ProductHeadingProps> = ({
  isNew,
  title,
  description,
  price,
  image,
  id,
}) => {
  const { width } = useWindowSize();
  const getImageWidth = () => {
    if (width < 768) {
      return image?.mobile?.url;
    }
    if (width < 1024) {
      return image?.tabletPdp?.url;
    }
    return image?.desktop?.url;
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image
          src={getImageWidth()!}
          alt={title!}
          fill
          style={{ objectFit: 'cover' }}
          sizes="fill"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89h8AAtEB5wrzxXEAAAAASUVORK5CYII="
          placeholder="blur"
        />
      </div>
      <div className={styles.product__text}>
        {isNew && <Overline text="new product" />}
        <H2 text={title!} />
        <Paragraph text={description!} />
        <span className={styles.product__textPrice}>$ {price}</span>
        <AddToCart
          id={id}
          imgUrl={image?.mobile?.url!}
          name={title!}
          price={price!}
        />
      </div>
    </div>
  );
};

export default ProductHeading;
