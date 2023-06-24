import React from 'react';
import styles from '../Heading.module.scss';
import { HeadingProps } from '../H1';

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
