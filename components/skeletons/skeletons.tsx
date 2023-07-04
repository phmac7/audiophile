import React from 'react';
import styles from './skeletons.module.scss';

export const CategoriesSkeleton = () => {
  return (
    <div className={`${styles.categoriesSkeleton__container}`}>
      <div className={`${styles.categoriesSkeleton__card}`}>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__img}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__text}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__text}`}
        ></div>
      </div>
      <div className={`${styles.categoriesSkeleton__card}`}>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__img}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__text}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__text}`}
        ></div>
      </div>
      <div className={`${styles.categoriesSkeleton__card}`}>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__img}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__text}`}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.categoriesSkeleton__text}`}
        ></div>
      </div>
    </div>
  );
};
