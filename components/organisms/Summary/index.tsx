'use client';
import { Button, H2, SubTitlePrice } from '@/components/atoms';
import styles from './Summary.module.scss';
import { useCartStore } from '@/store/cart-store';
import { ProductInCart } from '@/components/molecules';

const Summary = () => {
  const productList = useCartStore((state) => state.itemList);
  const totalPrice = productList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
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
        <Button label="continue & pay" form={'checkout'} />
      </div>
    </section>
  );
};

export default Summary;
