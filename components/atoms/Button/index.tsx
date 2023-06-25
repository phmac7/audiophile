'use client';
import React from 'react';
import styles from '../Button/Button.module.scss';
import { RightArrowIcon } from '@/components/Ions';

export interface ButtonProps {
  label: string;
  variation?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variation = 'primary',
  onClick,
}) => {
  const onClickHandler = () => {
    onClick ? onClick() : null;
  };
  return (
    <button
      onClick={onClickHandler}
      className={`${styles[`button--${variation}`]} ${styles.button}`}
    >
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
