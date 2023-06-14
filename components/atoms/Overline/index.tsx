import React from 'react';
import styles from './Overline.module.scss';

export interface OverlineProps {
  text: string;
  variation?: 'primary' | 'secondary';
}

const Overline: React.FC<OverlineProps> = ({ text, variation = 'primary' }) => {
  return (
    <span className={`${styles.overline} ${styles[`overline--${variation}`]}`}>
      {text}
    </span>
  );
};

export default Overline;
