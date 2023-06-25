import styles from './CartDropDown.module.scss';
import { usenavbarStore } from '@/store/navbar-store';
import { Button } from '@/components/atoms';
import ProductInCart from '../ProductInCart';
import { useCartStore } from '@/store/cart-store';

const CartDropDown = () => {
  const closeCart = usenavbarStore((state) => state.closeCart);
  const productList = useCartStore((state) => state.itemList);
  const cleanCart = useCartStore((state) => state.cleanCart);

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cartHeading}>
          <span className={styles.cartHeadingTitle}>
            CART({productList.reduce((total, item) => total + item.quantity, 0)}
            )
          </span>
          <button className={styles.cartHeadingBtn} onClick={cleanCart}>
            Remove All
          </button>
        </div>
        <div className={styles.cartProducts}>
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
        <div className={styles.cartTotal}>
          <span className={styles.cartTotalTitle}>Total</span>
          <span className={styles.cartTotalValue}>
            $
            {productList.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </span>
        </div>
        <Button label="checkout" variation="primary" />
      </div>
      <div className={styles.cartBackdrop} onClick={closeCart}></div>
    </>
  );
};

export default CartDropDown;
