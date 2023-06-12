'use client';
import { Button, H2 } from '@/components/atoms';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from './FeaturedProduct.module.scss';
import { useWindowSize } from 'usehooks-ts';

export interface FeaturedProductProps {
  title: string;
  variation: 'primary' | 'secondary' | 'tertiary';
  description?: string;
  mobileImg: string;
  desktopImg: string;
  tabletImg?: string;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({
  title,
  variation,
  description,
  mobileImg,
  desktopImg,
  tabletImg,
}) => {
  const { width } = useWindowSize();
  const [imageSize, setImageSize] = useState<string>(mobileImg);

  useEffect(() => {
    if (width < 768) {
      setImageSize(mobileImg);
      return;
    }
    if (tabletImg) {
      if (width < 1024) {
        setImageSize(tabletImg);
        return;
      }
    }
    setImageSize(desktopImg);
  }, [width]);

  if (variation === 'primary') {
    return (
      <article className={styles.featuredPrimary}>
        <div className={styles.featuredPrimary__container}>
          <div className={styles.featuredPrimary__img}>
            <Image
              alt={title}
              src={imageSize}
              fill
              style={{
                objectFit: 'contain',
              }}
              sizes="fill"
            />
          </div>
          <div className={styles.featuredPrimary__text}>
            <H2 text={title} color="#FFF" />
            <p className={styles.featuredPrimary__textDescription}>
              {description}
            </p>
            <Button label="see product" variation="secondary" />
          </div>
        </div>
      </article>
    );
  }
  if (variation === 'secondary') {
    return (
      <article className={styles.featuredSecondary}>
        <div className={styles.featuredSecondary__container}>
          <H2 text={title} />
          <Button label="see product" variation="secondary" />
          <div className={styles.featuredSecondary__img}>
            <Image
              alt={title}
              src={imageSize}
              fill
              style={{ objectFit: 'cover' }}
              sizes="fill"
            />
          </div>
        </div>
      </article>
    );
  }
  if (variation === 'tertiary') {
    return (
      <article className={styles.featuredTertiary}>
        <div className={styles.featuredTertiary__container}>
          <div className={styles.featuredTertiary__img}>
            <Image
              alt={title}
              src={imageSize}
              fill
              style={{ objectFit: 'cover' }}
              sizes="fill"
            />
          </div>
          <div className={styles.featuredTertiary__text}>
            <div className={styles.featuredTertiary__textContainer}>
              <H2 text={title} />
              <Button label="see product" variation="secondary" />
            </div>
          </div>
        </div>
      </article>
    );
  }
};

export default FeaturedProduct;
