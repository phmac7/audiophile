'use client';

import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';
import { CartIcon, HamburguerIcon, Logo } from '@/components/Ions';
import Link from 'next/link';
import Categories from '../Categories';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    menuOpen
      ? document.body.classList.add('navbar-open')
      : document.body.classList.remove('navbar-open');
  }, [menuOpen]);

  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbar__container}>
        <div className={styles.navbar__links}>
          <button
            className={styles.navbar__linksHamburguer}
            aria-label="Menu Hamburguer"
            aria-hidden="true"
            title="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
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

      {menuOpen && (
        <>
          <div className={styles.navbar__menuOpen}>
            <Categories></Categories>
          </div>
          <div className={styles.navbar__menuOpenBackdrop}></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
