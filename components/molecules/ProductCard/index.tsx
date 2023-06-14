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
  indexInArray: number;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  mobileImgUrl,
  tabletImgUrl,
  desktopImgUrl,
  description,
  title,
  isNew = false,
  indexInArray,
  slug,
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

  const isEven = () => {
    return indexInArray % 2 === 0;
  };

  return (
    <article className={styles.card}>
      <Link
        href={'/product/' + slug}
        className={`${styles.card__imgLink} ${
          isEven()
            ? `${styles['card__imgLink--left']}`
            : `${styles['card__imgLink--right']}`
        }`}
      >
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
      <div className={styles.card__textContainer}>
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
          <Link href={'/'}>
            <Button label="see product" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
