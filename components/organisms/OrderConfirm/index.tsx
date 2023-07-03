'use client';
import { Button, H2, Paragraph } from '@/components/atoms';
import React from 'react';
import styles from './OrderConfirm.module.scss';
import Link from 'next/link';
import { useCartStore } from '@/store/cart-store';
import { ProductInCart } from '@/components/molecules';
import { useModalStore } from '@/store/modal-store';

const OrderConfirm = () => {
  const productList = useCartStore((state) => state.itemList);
  const clearCart = useCartStore((state) => state.cleanCart);
  const totalPrice = productList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const closeModal = useModalStore((state) => state.closeModal);
  const onClickHandler = () => {
    clearCart();
    closeModal();
  };

  return (
    <div className={styles.order}>
      <H2 text="thank you for your order" />
      <Paragraph text="you will receive an email confirmation shortly" />
      <div>
        <div className={styles.order__productsInfo}>
          <ProductInCart
            imgUrl={productList[0]?.imgUrl}
            name={productList[0]?.name}
            price={productList[0]?.price}
            id={productList[0]?.id}
            withToggle={false}
          />
          {productList.length > 1 && (
            <div className={styles.order__productsInfoText}>
              <Paragraph
                text={`and ${productList.length - 1} other item${
                  productList.length - 1 > 2 ? '(s)' : ''
                }`}
              />
            </div>
          )}
        </div>
        <div className={styles.order__total}>
          <span className={styles.order__totalText}>GRAND TOTAL</span>
          <span className={styles.order__totalPrice}>${totalPrice}</span>
        </div>
      </div>
      <Link href={'/'} className={styles.order__link} onClick={onClickHandler}>
        <Button label="back to home" role="link" />
      </Link>
    </div>
  );
};

export default OrderConfirm;
