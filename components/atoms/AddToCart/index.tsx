'use client';
import { useState } from 'react';
import Button from '../Button';
import ToggleQuantity from '../ToggleQuantity';
import styles from './AddToCart.module.scss';
import { useCartStore } from '@/store/cart-store';
import { AddToCartProps } from '@/models/componentsProps';

const AddToCart: React.FC<AddToCartProps> = ({ id, name, price, imgUrl }) => {
  const addItemToCart = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState<number>(1);
  const decreaseQuantity = () => {
    quantity > 0 && setQuantity((prev) => prev - 1);
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.addCart}>
      <ToggleQuantity
        quantity={quantity}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
      <Button
        label="add to cart"
        onClick={() =>
          addItemToCart({ id: id, quantity: quantity, name, price, imgUrl })
        }
      />
    </div>
  );
};

export default AddToCart;
