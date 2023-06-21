'use client';
import React, { useLayoutEffect, useState } from 'react';
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
  isNew?: boolean | null | undefined;
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
  const [imageSize, setImageSize] = useState<string>(desktopImgUrl);
  const { width } = useWindowSize();

  useLayoutEffect(() => {
    const getSize = () => {
      if (width < 468) {
        setImageSize(mobileImgUrl);
        return;
      }
      if (width < 1024) {
        setImageSize(tabletImgUrl);
        return;
      }
      setImageSize(desktopImgUrl);
    };
    getSize();
  }, [width]);
  const isEven = () => {
    return indexInArray % 2 === 0;
  };

  return (
    <article className={styles.card}>
      <Link
        href={'/products/' + slug}
        className={`${styles.card__imgLink} ${
          isEven()
            ? `${styles['card__imgLink--left']}`
            : `${styles['card__imgLink--right']}`
        }`}
      >
        <div className={styles.card__img}>
          <Image
            src={imageSize}
            alt={title}
            fill
            sizes="fill"
            style={{ objectFit: 'cover' }}
            priority={imageSize === desktopImgUrl}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89h8AAtEB5wrzxXEAAAAASUVORK5CYII="
            placeholder="blur"
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
          <Link href={'/products/' + slug}>
            <Button label="see product" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
