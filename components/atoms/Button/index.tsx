import React from 'react';
import Image from 'next/image';
import styles from '../Button/Button.module.scss';
import { RightArrowIcon } from '@/components/Ions';

export interface ButtonProps {
  label: string;
  variation?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({ label, variation = 'primary' }) => {
  return (
    <button className={`${styles[`button--${variation}`]} ${styles.button}`}>
      {variation === 'tertiary' ? (
        <>
          {label} <RightArrowIcon />
        </>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
