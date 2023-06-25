import { HeadingProps } from '@/models/componentsProps';
import styles from '../Heading.module.scss';

const H2: React.FC<HeadingProps> = ({ text, color = '#000' }) => {
  const style = {
    color: `${color}`,
  };
  return (
    <h2 style={style} className={`${styles.heading__h2} ${styles.heading}`}>
      {text}
    </h2>
  );
};

export default H2;
