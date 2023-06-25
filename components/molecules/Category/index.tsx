'use client';
import styles from './Category.module.scss';
import Image from 'next/image';
import { Button } from '@/components/atoms';
import Link from 'next/link';
import { usenavbarStore } from '@/store/navbar-store';
import { CategoryProps } from '@/models/componentsProps';

const Category: React.FC<CategoryProps> = ({ category, url }) => {
  const { closeMenu, isMenuOpen } = usenavbarStore();

  const getCategoryImage = () => {
    return (
      <Image
        src={url}
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
        href={`/${category.toLowerCase()}`}
        onClick={onClickHandler}
        aria-label={category}
      >
        <div className={styles.category__img}>{getCategoryImage()}</div>
        <span className={styles.category__label}>{category}</span>
        <Button label={'shop'} variation="tertiary" />
      </Link>
    </article>
  );
};

export default Category;
