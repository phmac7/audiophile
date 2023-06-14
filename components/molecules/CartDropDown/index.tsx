import React from 'react';
import styles from './CartDropDown.module.scss';
import { useStore } from '@/store/store';
import { Button } from '@/components/atoms';

const CartDropDown = () => {
  const closeCart = useStore((state) => state.closeCart);

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cartHeading}>
          <span className={styles.cartHeadingTitle}>CART(0)</span>
          <button className={styles.cartHeadingBtn}>Remove All</button>
        </div>
        <div className={styles.cartProducts}>PRODUCTS HERE</div>
        <div className={styles.cartTotal}>
          <span className={styles.cartTotalTitle}>Total</span>
          <span className={styles.cartTotalValue}>$5,396</span>
        </div>
        <Button label="checkout" variation="primary" />
      </div>
      <div className={styles.cartBackdrop} onClick={closeCart}></div>
    </>
  );
};

export default CartDropDown;
