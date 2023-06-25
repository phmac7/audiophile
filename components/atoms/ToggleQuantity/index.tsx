'use client';

import { useCartStore } from '@/store/cart-store';
import styles from './ToggleQuantity.module.scss';
import { ToggleQuantityProps } from '@/models/componentsProps';

const ToggleQuantity: React.FC<ToggleQuantityProps> = ({
  decreaseQuantity,
  increaseQuantity,
  quantity,
  forCart = false,
  id,
}) => {
  const decreaseQuantityInCart = useCartStore(
    (state) => state.decreaseQuantity
  );
  const increaseQuantityInCart = useCartStore(
    (state) => state.increaseQuantity
  );
  const itemList = useCartStore((state) => state.itemList);

  const getQuantityInCart = () => {
    return itemList.find((item) => item.id === id)?.quantity;
  };

  const descreaseHandler = () => {
    if (forCart) {
      decreaseQuantityInCart(id);
      return;
    }
    decreaseQuantity();
  };
  const increaseHandler = () => {
    if (forCart) {
      increaseQuantityInCart(id);
      return;
    }
    increaseQuantity();
  };

  return (
    <div
      className={
        forCart
          ? `${styles.toggleQuantity} ${styles.toggleQuantity__small}`
          : styles.toggleQuantity
      }
    >
      <button
        className={styles.toggleQuantity__decrease}
        title="decrease"
        aria-label="decrease quantity"
        onClick={descreaseHandler}
      >
        <span className={styles.toggleQuantity__decreaseIcon}></span>
      </button>
      <span className={styles.toggleQuantity__quantity}>
        {forCart ? getQuantityInCart() : quantity}
      </span>
      <button
        className={styles.toggleQuantity__increase}
        title="increase"
        aria-label="increase quantity"
        onClick={increaseHandler}
      >
        <span className={styles.toggleQuantity__increaseIcon}></span>
      </button>
    </div>
  );
};

export default ToggleQuantity;
