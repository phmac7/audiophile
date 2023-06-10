import React from 'react';
import styles from './Categories.module.scss';
import { Category } from '@/components/molecules';

export interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <section className={styles.categories}>
      <ul className={styles.categories__list}>
        <li className={styles.categories__item}>
          <Category category="headphones" />
        </li>
        <li className={styles.categories__item}>
          <Category category="speakers" />
        </li>
        <li className={styles.categories__item}>
          <Category category="earphones" />
        </li>
      </ul>
    </section>
  );
};

export default Categories;
