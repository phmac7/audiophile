import { GoBackLink } from '@/components/atoms';
import { CheckoutForm, Summary } from '@/components/organisms';
import styles from '@/styles/checkout.module.scss';

export default function Checkout() {
  return (
    <div className={styles.checkout}>
      <GoBackLink />
      <CheckoutForm />
      <Summary />
    </div>
  );
}
