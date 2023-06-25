import { ParagraphProps } from '@/models/componentsProps';
import styles from './Paragraph.module.scss';

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  variation = 'primary',
}) => {
  return (
    <p className={`${styles.paragraph} ${styles[`paragraph--${variation}`]}`}>
      {text}
    </p>
  );
};

export default Paragraph;
