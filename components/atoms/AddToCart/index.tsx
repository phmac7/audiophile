'use client';
import React, { useState } from 'react';
import Button from '../Button';
import styles from './AddToCart.module.scss';

const AddToCart = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const decreaseQuantity = () => {
    quantity > 0 && setQuantity((prev) => prev - 1);
  };

  return (
    <div className={styles.addCart}>
      <div className={styles.addCart__setQuantity}>
        <button
          className={styles.addCart__decrease}
          title="decrease"
          aria-label="decrease quantity"
          onClick={decreaseQuantity}
        >
          <span className={styles.addCart__decreaseIcon}></span>
        </button>
        <span className={styles.addCart__quantity}>{quantity}</span>
        <button
          className={styles.addCart__increase}
          title="increase"
          aria-label="increase quantity"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <span className={styles.addCart__increaseIcon}></span>
        </button>
      </div>
      <Button label="add to cart" />
    </div>
  );
};

export default AddToCart;
