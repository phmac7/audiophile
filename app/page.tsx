import { Button } from '@/components/atoms';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <Button label="see product" variation="primary" />
      <Button label="see product" variation="secondary" />
      <Button label="see product" variation="tertiary" />
    </>
  );
}
