'use client';
import { useRef, useState } from 'react';
import styles from './Input.module.scss';
import { useFormStore } from '@/store/form-store';

interface InputProps {
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'address';
  placeholder: string;
  id?:
    | 'name'
    | 'email'
    | 'phone'
    | 'address'
    | 'zip'
    | 'city'
    | 'country'
    | 'paymentMethod'
    | 'eMoneyNumber'
    | 'eMoneyPin';
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, id }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState<boolean>(true);
  const setValid = useFormStore((state) => state.setValid);
  const setInvalid = useFormStore((state) => state.setInvalid);

  const validator = () => {
    const value = inputRef.current?.value;
    if (type === 'text') {
      const regex = new RegExp('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$');
      if (regex.test(value!)) {
        setIsValid(true);
        setValid(id!);
      } else {
        setIsValid(false);
        setInvalid(id!);
      }
    }
    if (type === 'email') {
      const regex = new RegExp(
        '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$'
      );
      if (regex.test(value!)) {
        setIsValid(true);
        setValid(id!);
      } else {
        setIsValid(false);
        setInvalid(id!);
      }
    }
    if (type === 'tel') {
      const regex = new RegExp('^[0-9]{10,14}$');
      if (regex.test(value!)) {
        setIsValid(true);
        setValid(id!);
      } else {
        setIsValid(false);
        setInvalid(id!);
      }
    }
    if (type === 'address') {
      const regex = new RegExp(
        '^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9, ]+$'
      );
      if (regex.test(value!)) {
        setIsValid(true);
        setValid(id!);
      } else {
        setIsValid(false);
        setInvalid(id!);
      }
    }
    if (type === 'number') {
      const regex = new RegExp('^[0-9]{5,9}$');
      if (regex.test(value!)) {
        setIsValid(true);
        setValid(id!);
      } else {
        setIsValid(false);
        setInvalid(id!);
      }
    }
    console.log(isValid);
  };

  const blankValidator = () => {
    if (
      inputRef.current?.value === '' ||
      inputRef.current?.value === undefined
    ) {
      setIsValid(false);
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <div
          className={`${styles.label__text} ${
            isValid ? '' : styles['label__text--notValid']
          }`}
        >
          <span>{label}</span>
          {!isValid ? <span>Wrong Format</span> : null}
        </div>
        <input
          id={id}
          type={type === 'address' ? 'text' : type}
          className={`${styles.input} ${
            isValid ? '' : styles['input--notValid']
          }`}
          placeholder={placeholder}
          ref={inputRef}
          onChange={validator}
          onBlur={blankValidator}
        />
      </label>
    </div>
  );
};

export default Input;
