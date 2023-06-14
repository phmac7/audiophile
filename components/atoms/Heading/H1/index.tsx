import React from 'react';
import styles from '../Heading.module.scss';

export interface HeadingProps {
  text: string;
  color?: '#000' | '#FFF' | '#fff';
}

const H1: React.FC<HeadingProps> = ({ text, color = '#000' }) => {
  const style = {
    color: `${color}`,
  };
  return (
    <h1 style={style} className={`${styles.heading__h1} ${styles.heading}`}>
      {text}
    </h1>
  );
};

export default H1;
