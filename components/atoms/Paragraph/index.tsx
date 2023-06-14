import React from 'react';
import styles from './Paragraph.module.scss';

export interface ParagraphProps {
  text?: string;
  variation?: 'primary' | 'secondary';
}

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
