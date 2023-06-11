import React from 'react';
import styles from './MenuDropDown.module.scss';
import { CategoriesOnMenu } from '@/components/organisms/Categories';
import { useStore } from '@/store/store';

const MenuDropDown = () => {
  const closeMenu = useStore((state) => state.closeMenu);

  return (
    <>
      <div className={styles.navbar__menuOpen}>
        <CategoriesOnMenu />
      </div>
      <div
        className={styles.navbar__menuOpenBackdrop}
        onClick={closeMenu}
      ></div>
      ;
    </>
  );
};

export default MenuDropDown;
