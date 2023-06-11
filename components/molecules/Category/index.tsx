import React from 'react';
import styles from './Category.module.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import Link from 'next/link';

export interface CategoryProps {
  category: 'headphones' | 'speakers' | 'earphones';
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const getCategoryImage = () => {
    return (
      <Image
        src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
        alt={category}
        fill
        style={{
          objectFit: 'cover',
        }}
        sizes="fill"
      />
    );
  };

  return (
    <article className={styles.category}>
      <Link className={styles.category__link} href={`/${category}`}>
        <div className={styles.category__img}>{getCategoryImage()}</div>
        <span className={styles.category__label}>{category}</span>
        <Button label={'shop'} variation="tertiary" />
      </Link>
    </article>
  );
};

export default Category;
