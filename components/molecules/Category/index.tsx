'use client';
import React from 'react';
import styles from './Category.module.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import Link from 'next/link';
import { useStore } from '@/store/store';

export interface CategoryProps {
  category: 'headphones' | 'speakers' | 'earphones';
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { closeMenu, isMenuOpen } = useStore();

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

  const onClickHandler = () => {
    if (isMenuOpen) {
      closeMenu();
    }
  };

  return (
    <article className={styles.category}>
      <Link
        className={styles.category__link}
        href={`/${category}`}
        onClick={onClickHandler}
      >
        <div className={styles.category__img}>{getCategoryImage()}</div>
        <span className={styles.category__label}>{category}</span>
        <Button label={'shop'} variation="tertiary" />
      </Link>
    </article>
  );
};

export default Category;
