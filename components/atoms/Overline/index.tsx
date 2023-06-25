import { OverlineProps } from '@/models/componentsProps';
import styles from './Overline.module.scss';

const Overline: React.FC<OverlineProps> = ({ text, variation = 'primary' }) => {
  return (
    <span className={`${styles.overline} ${styles[`overline--${variation}`]}`}>
      {text}
    </span>
  );
};

export default Overline;
