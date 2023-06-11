'use client';

import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import { CartIcon, HamburguerIcon, Logo } from '@/components/Ions';
import Link from 'next/link';
import { useStore } from '@/store/store';
import { useWindowSize } from 'usehooks-ts';
import { CartDropDown, MenuDropDown } from '@/components/molecules';

const Navbar: React.FC = () => {
  const {
    closeCart,
    isCartOpen,
    toggleCartOpen,
    isMenuOpen,
    toggleMenuOpen,
    closeMenu,
  } = useStore();
  const { width } = useWindowSize();

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add('navbar-open')
      : document.body.classList.remove('navbar-open');

    width >= 1024 ? closeMenu() : null;
  }, [isMenuOpen, width]);

  const linksList = [
    { title: 'home', link: '/' },
    { title: 'headphones', link: '/headphones' },
    { title: 'speakers', link: '/speakers' },
    { title: 'earphones', link: '/earphones' },
  ];

  const toggleMenu = () => {
    if (isCartOpen) {
      closeCart();
    }
    toggleMenuOpen();
  };
  const toggleCart = () => {
    if (isMenuOpen) {
      closeMenu();
    }
    toggleCartOpen();
  };

  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbar__container}>
        <div className={styles.navbar__links}>
          <button
            className={styles.navbar__linksHamburguer}
            aria-label="Menu Hamburguer"
            title="Menu"
            onClick={toggleMenu}
          >
            <HamburguerIcon />
          </button>
          <ul className={styles.navbar__linksList}>
            {linksList.map((item) => (
              <li key={item.title} className={styles.navbar__linksItem}>
                <Link href={item.link} className={styles.navbar__link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
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
          <button
            className={styles.navbar__cartIcon}
            onClick={toggleCart}
            title="Cart"
            aria-label="Cart"
          >
            <CartIcon />
          </button>
        </div>
      </div>

      {isMenuOpen && <MenuDropDown />}
      {isCartOpen && <CartDropDown />}
    </nav>
  );
};

export default Navbar;
