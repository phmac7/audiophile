import { Button, H1, Overline } from '@/components/atoms';
import React from 'react';
import styles from './Header.module.scss';

export interface HeaderProps {
  pathname: string;
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  if (pathname === '/') {
    return (
      <header className={styles.header}>
        <div className={styles.header__container}>
          <Overline text="new product" variation="secondary" />
          <H1 text="xx99 mark ii headphones" color="#FFF"></H1>
          <p className={styles.header__description}>
            Experience natural, lifelike audio and expectional build quality
            made for the passionate music enthusiast.
          </p>
          <Button label="see product" />
        </div>
      </header>
    );
  }
  if (
    pathname === '/headphones' ||
    pathname === '/earphones' ||
    pathname === '/speakers'
  ) {
    return (
      <header className={styles.heading}>
        <H1 text={pathname.substring(1)} color="#FFF" />
      </header>
    );
  }
  return null;
};

export default Header;
