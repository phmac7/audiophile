'use client';
import { ButtonProps } from '@/models/componentsProps';
import styles from '../Button/Button.module.scss';
import { RightArrowIcon } from '@/components/Ions';

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
