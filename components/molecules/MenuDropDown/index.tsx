import { Categories } from '@/components/organisms';
import styles from './MenuDropDown.module.scss';
import { usenavbarStore } from '@/store/navbar-store';
import { Suspense } from 'react';

const MenuDropDown = () => {
  const closeMenu = usenavbarStore((state) => state.closeMenu);

  return (
    <>
      <div className={styles.navbar__menuOpen}>
        <Categories />
      </div>
      <div
        className={styles.navbar__menuOpenBackdrop}
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default MenuDropDown;
