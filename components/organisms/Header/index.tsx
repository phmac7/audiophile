import { Button, Overline } from '@/components/atoms';
import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Overline text="new product" variation="secondary" />
        <h1 className={styles.header__title}>xx99 mark ii headphones</h1>
        <p className={styles.header__description}>
          Experience natural, lifelike audio and expectional build quality made
          for the passionate music enthusiast.
        </p>
        <Button label="see product" />
      </div>
    </header>
  );
};

export default Header;
