import React from 'react';
import styles from '../Heading.module.scss';
import { HeadingProps } from '../H1';

const H5: React.FC<HeadingProps> = ({ text, color }) => {
  const style = {
    color: `${color}`,
  };
  return (
    <h5 style={style} className={`${styles.heading__h5} ${styles.heading}`}>
      {text}
    </h5>
  );
};

export default H5;
