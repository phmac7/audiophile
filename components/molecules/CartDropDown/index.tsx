import styles from './CartDropDown.module.scss';
import { usenavbarStore } from '@/store/navbar-store';
import { Button } from '@/components/atoms';
import ProductInCart from '../ProductInCart';
import { useCartStore } from '@/store/cart-store';
import Link from 'next/link';

const CartDropDown = () => {
  const closeCart = usenavbarStore((state) => state.closeCart);
  const productList = useCartStore((state) => state.itemList);
  const cleanCart = useCartStore((state) => state.cleanCart);

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart__Heading}>
          <span className={styles.cart__HeadingTitle}>
            CART({productList.reduce((total, item) => total + item.quantity, 0)}
            )
          </span>
          <button className={styles.cart__HeadingBtn} onClick={cleanCart}>
            Remove All
          </button>
        </div>
        <div className={styles.cart__Products}>
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
              />
            ))
          )}
        </div>
        <div className={styles.cart__Total}>
          <span className={styles.cart__TotalTitle}>Total</span>
          <span className={styles.cart__TotalValue}>
            $
            {productList.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </span>
        </div>
        <Link
          href={'/checkout'}
          onClick={closeCart}
          className={styles.cart__CheckoutButton}
        >
          <Button label="checkout" variation="primary" />
        </Link>
      </div>
      <div className={styles.cart__Backdrop} onClick={closeCart}></div>
    </>
  );
};

export default CartDropDown;
