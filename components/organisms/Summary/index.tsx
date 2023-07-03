'use client';
import { Button, H2, Paragraph, SubTitlePrice } from '@/components/atoms';
import styles from './Summary.module.scss';
import { useCartStore } from '@/store/cart-store';
import { ProductInCart } from '@/components/molecules';
import { useModalStore } from '@/store/modal-store';
import Modal from '@/components/molecules/Modal';
import OrderConfirm from '../OrderConfirm';
import { useFormStore } from '@/store/form-store';
import { useState } from 'react';

const Summary = () => {
  const [errorForm, setErrorForm] = useState<boolean>(false);
  const [errorEmptyCart, setErrorEmptyCart] = useState<boolean>(false);
  const productList = useCartStore((state) => state.itemList);
  const totalPrice = productList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const modalOpen = useModalStore((state) => state.isOpen);
  const openModal = useModalStore((state) => state.openModal);

  const formValid = useFormStore((state) => state.isValid);

  const onClickHandler = () => {
    if (Object.values(formValid).includes(false)) {
      setErrorForm(true);
      return;
    }
    setErrorForm(false);
    if (productList.length === 0) {
      setErrorEmptyCart(true);
      return;
    }
    setErrorEmptyCart(false);
    openModal();
  };

  return (
    <>
      <section className={styles.summary}>
        <H2 text="summary" />
        <div className={styles.summary__products}>
          {productList.length === 0 ? (
            <p>No product in cart yet</p>
          ) : (
            productList.map((product) => (
              <ProductInCart
                key={product.id}
                id={product.id}
                imgUrl={product.imgUrl}
                name={product.name}
                price={product.price}
                withToggle={false}
              />
            ))
          )}
        </div>
        <div className={styles.summary__info}>
          <SubTitlePrice price={totalPrice} title={'total'} />
          <SubTitlePrice title="shipping" price={50} />
          <SubTitlePrice title="vat (included)" price={totalPrice * 0.2} />
        </div>
        <div className={styles.summary__total}>
          <SubTitlePrice
            title="grand total"
            price={totalPrice + 50}
            variation="secondary"
          />
        </div>
        <div className={styles.summary__btn}>
          <Button
            label="continue & pay"
            form={'checkout'}
            onClick={onClickHandler}
          />
        </div>
        {errorForm ? (
          <span className={styles.summary__error}>
            Please, rectify the errors in the form prior to making the payment.
          </span>
        ) : null}
        {errorEmptyCart ? (
          <span className={styles.summary__error}>
            It appears that your cart is empty! Please try adding an item before
            proceeding.
          </span>
        ) : null}
      </section>
      {modalOpen ? (
        <Modal closeOnBackdrop={false}>
          <OrderConfirm />
        </Modal>
      ) : null}
    </>
  );
};

export default Summary;
