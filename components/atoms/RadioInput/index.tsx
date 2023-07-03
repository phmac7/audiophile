import { RadioInputProps } from '@/models/componentsProps';
import styles from './RadioInput.module.scss';

const RadioInput: React.FC<RadioInputProps> = ({ value, group, checked }) => {
  return (
    <div className={styles.container}>
      <input
        type="radio"
        name={group}
        id={value}
        className={styles.input}
        defaultChecked={checked === true ? true : false}
      />
      <label htmlFor={value} className={styles.label}>
        {value}
      </label>
    </div>
  );
};

export default RadioInput;
