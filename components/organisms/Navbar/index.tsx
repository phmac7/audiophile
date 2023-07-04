'use client';

import { useEffect } from 'react';
import styles from './Navbar.module.scss';
import { CartIcon, HamburguerIcon, Logo } from '@/components/Ions';
import { CartDropDown, MenuDropDown, NavLinks } from '@/components/molecules';
import Link from 'next/link';
import { usenavbarStore } from '@/store/navbar-store';
import { useWindowSize } from 'usehooks-ts';
import { useCartStore } from '@/store/cart-store';

const Navbar: React.FC = () => {
  const closeCart = usenavbarStore((state) => state.closeCart);
  const isCartOpen = usenavbarStore((state) => state.isCartOpen);
  const toggleCartOpen = usenavbarStore((state) => state.toggleCartOpen);
  const isMenuOpen = usenavbarStore((state) => state.isMenuOpen);
  const toggleMenuOpen = usenavbarStore((state) => state.toggleMenuOpen);
  const closeMenu = usenavbarStore((state) => state.closeMenu);
  const { width } = useWindowSize();
  const cartList = useCartStore((state) => state.itemList);

  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add('navbar-open')
      : document.body.classList.remove('navbar-open');

    width >= 1024 ? closeMenu() : null;
  }, [isMenuOpen, width]);

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

  const closeIfOpen = () => {
    if (isMenuOpen) {
      closeMenu();
    } else if (isCartOpen) {
      closeCart();
    }
  };

  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.navbar__container} onClick={closeIfOpen}>
        <div className={styles.navbar__links}>
          <button
            className={styles.navbar__linksHamburguer}
            aria-label="Menu Hamburguer"
            title="Menu"
            onClick={toggleMenu}
          >
            <HamburguerIcon />
          </button>
          <div className={styles.navbar__linksList}>
            <NavLinks />
          </div>
        </div>
        <div className={styles.navbar__logo}>
          <Link
            href={'/'}
            title="Go Home"
            aria-label="logo, go home"
            className={styles.navbar__logoLink}
            onClick={closeIfOpen}
          >
            <Logo />
          </Link>
        </div>
        <div className={styles.navbar__cart}>
          <button
            className={`${styles.navbar__cartIcon} ${
              cartList.length !== 0 ? styles.navbar__cartIconNotification : ''
            }`}
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
