'use client';

import { H1, H2, H5, H6, RadioInput } from '@/components/atoms';
import styles from './CheckoutForm.module.scss';
import Input from '@/components/atoms/Input';
import { FormEvent } from 'react';
import { useFormStore } from '@/store/form-store';

const CheckoutForm = () => {
  const formIsValid = useFormStore((state) => state.isValid);
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section>
      <form
        className={styles.form}
        id="checkout"
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <H1 text="checkout" />
        <div className={styles.form__user}>
          <H5 text="billing details" color="var(--primary)" />
          <Input
            label="Name"
            type="text"
            placeholder={'Alexei Ward'}
            id="name"
          />
          <Input
            label="Email"
            type="email"
            placeholder={'alexei@gmail.com'}
            id="email"
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder={'(21) 98444-4444'}
            id="phone"
          />
        </div>
        <div className={styles.form__address}>
          <H5 text="shipping info" color="var(--primary)" />
          <Input
            label="Address"
            type="address"
            placeholder="1137 Williams Avenue"
            id="address"
          />
          <Input
            label="ZIP Code(CEP)"
            type="number"
            placeholder="99999999"
            id="zip"
          />
          <Input
            label="City"
            type="text"
            placeholder="Rio de Janeiro"
            id="city"
          />
          <Input
            label="Country"
            type="text"
            placeholder="Brazil"
            id="country"
          />
        </div>
        <div className={styles.form__payment}>
          <H5 text="payment details" color="var(--primary)" />
          <H6 text="Payment Method" />
          <RadioInput value="e-Money" group="payment" checked={true} />
          <RadioInput value="Cash on Delivery" group="payment" />
          <Input
            label="e-Money Number"
            placeholder="238521993"
            type="number"
            id="eMoneyNumber"
          />
          <Input
            label="e-Money PIN"
            placeholder="6891"
            type="number"
            id="eMoneyPin"
          />
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
