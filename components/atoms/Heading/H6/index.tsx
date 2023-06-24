import React from 'react';
import styles from '../Heading.module.scss';
import { HeadingProps } from '../H1';

const H6: React.FC<HeadingProps> = ({ text, color = '#000' }) => {
  const style = {
    color: `${color}`,
  };
  return (
    <h6 style={style} className={`${styles.heading__h6} ${styles.heading}`}>
      {text}
    </h6>
  );
};

export default H6;
