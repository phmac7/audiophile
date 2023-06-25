import styles from '../Heading.module.scss';
import { HeadingProps } from '@/models/componentsProps';

const H4: React.FC<HeadingProps> = ({ text, color = '#000' }) => {
  const style = {
    color: `${color}`,
  };
  return (
    <h4 style={style} className={`${styles.heading__h4} ${styles.heading}`}>
      {text}
    </h4>
  );
};

export default H4;
