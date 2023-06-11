'use client';

import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import { CartIcon, HamburguerIcon, Logo } from '@/components/Ions';
import Link from 'next/link';
import { useStore } from '@/store/store';
import { useWindowSize } from 'usehooks-ts';
import { MenuDropDown } from '@/components/molecules';

const Navbar: React.FC = () => {
  const menuOpen = useStore((state) => state.menuOpen);
  const toggleMenuOpen = useStore((state) => state.toggleMenuOpen);
  const closeMenu = useStore((state) => state.closeMenu);
  const { width } = useWindowSize();

  useEffect(() => {
    menuOpen
      ? document.body.classList.add('navbar-open')
      : document.body.classList.remove('navbar-open');

    width >= 1024 ? closeMenu() : null;
  }, [menuOpen, width]);

  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbar__container}>
        <div className={styles.navbar__links}>
          <button
            className={styles.navbar__linksHamburguer}
            aria-label="Menu Hamburguer"
            aria-hidden="true"
            title="Menu"
            onClick={toggleMenuOpen}
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

      {menuOpen && <MenuDropDown />}
    </nav>
  );
};

export default Navbar;
