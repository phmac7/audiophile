import { GoBackLink } from '@/components/atoms';
import { CheckoutForm, Summary } from '@/components/organisms';

export default function Checkout() {
  return (
    <>
      <section>
        <GoBackLink />
        <CheckoutForm />
      </section>
      <Summary />
    </>
  );
}
