import { H1, H2, H6 } from '@/components/atoms';
import styles from './CheckoutForm.module.scss';
import Input from '@/components/atoms/Input';

const CheckoutForm = () => {
  return (
    <div className={styles.form}>
      <H1 text="checkout" />
      <div>
        <H6 text="billing details" color="var(--primary)" />
        <Input label="Name" type="text" placeholder={'Alexei Ward'} />
        <Input label="Email" type="email" placeholder={'alexei@gmail.com'} />
        <Input
          label="Phone Number"
          type="tel"
          placeholder={'(21) 98444-4444'}
        />
      </div>
      <div>
        <H6 text="shipping info" color="var(--primary)" />
        <Input
          label="Address"
          type="address"
          placeholder="1137 Williams Avenue"
        />
        <Input label="ZIP Code(CEP)" type="number" placeholder="99999999" />
        <Input label="City" type="text" placeholder="Rio de Janeiro" />
        <Input label="Country" type="text" placeholder="Brazil" />
      </div>
      <div>
        <H6 text="payment details" color="var(--primary)" />
      </div>
    </div>
  );
};

export default CheckoutForm;
