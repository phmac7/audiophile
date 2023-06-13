'use client';
import React from 'react';
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import { Button, H2, Overline, Paragraph } from '@/components/atoms';
import { useWindowSize } from 'usehooks-ts';
import Link from 'next/link';

export interface ProductCardProps {
  mobileImgUrl: string;
  tabletImgUrl: string;
  desktopImgUrl: string;
  title: string;
  description: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  mobileImgUrl,
  tabletImgUrl,
  desktopImgUrl,
  description,
  title,
  isNew = false,
}) => {
  const { width } = useWindowSize();

  const getImage = () => {
    if (width < 768) {
      return mobileImgUrl;
    }
    if (width < 1024) {
      return tabletImgUrl;
    }
    return desktopImgUrl;
  };

  return (
    <article className={styles.card}>
      <Link href={'/'} className={styles.card__imgLink}>
        <div className={styles.card__img}>
          <Image
            src={getImage()}
            alt={title}
            fill
            sizes="fill"
            style={{ objectFit: 'cover' }}
            priority={getImage() === mobileImgUrl}
          />
        </div>
      </Link>
      {isNew && (
        <div className={styles.card__newLabel}>
          <Overline text="new product" variation="primary" />
        </div>
      )}
      <div className={styles.card__title}>
        <H2 text={title} />
      </div>
      <div className={styles.card__description}>
        <Paragraph text={description} />
      </div>
      <div className={styles.card__btn}>
        <Button label="see product" />
      </div>
    </article>
  );
};

export default ProductCard;
