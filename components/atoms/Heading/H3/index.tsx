import React from 'react';
import styles from '../Heading.module.scss';
import { HeadingProps } from '../H1';

const H3: React.FC<HeadingProps> = ({ text, color = '#000' }) => {
  const style = {
    color: `${color}`,
  };
  return (
    <h3 style={style} className={`${styles.heading__h3} ${styles.heading}`}>
      {text}
    </h3>
  );
};

export default H3;
