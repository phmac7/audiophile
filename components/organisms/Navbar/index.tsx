import React from 'react';
import styles from './Navbar.module.scss';
import { CartIcon, HamburguerIcon, Logo } from '@/components/Ions';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbar__container}>
        <div className={styles.navbar__links}>
          <button
            className={styles.navbar__linksHamburguer}
            aria-label="Menu Hamburguer"
            aria-hidden="true"
            title="Menu"
          >
            <HamburguerIcon />
          </button>
          <ul className={styles.navbar__linksList}></ul>
        </div>
        <div className={styles.navbar__logo}>
          <Link
            href={'/'}
            title="Go Home"
            aria-label="logo, go home"
            className={styles.navbar__logoLink}
          >
            <Logo />
          </Link>
        </div>
        <div className={styles.navbar__cart}>
          <button className={styles.navbar__cartIcon}>
            <CartIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
