import { H3 } from '@/components/atoms';
import styles from './InTheBox.module.scss';
import { InTheBoxProps } from '@/models/componentsProps';

const InTheBox: React.FC<InTheBoxProps> = ({ items }) => {
  return (
    <div className={styles.box}>
      <H3 text="In the box" />
      <ul className={styles.box__list}>
        {items?.map((item, index) => (
          <li key={index} className={styles.box__item}>
            <span className={styles.box__itemQuantity}>{item?.quantity}x</span>{' '}
            {item?.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InTheBox;
