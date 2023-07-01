import styles from './SubTitlePrice.module.scss';

interface SubTitlePriceProps {
  variation?: 'primary' | 'secondary';
  title: string;
  price: number | string;
}

const SubTitlePrice: React.FC<SubTitlePriceProps> = ({
  variation = 'primary',
  title,
  price,
}) => {
  const formatPrice = price.toLocaleString();
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span
        className={`${styles.price} ${
          variation === 'secondary' ? styles['price--secondary'] : ''
        }`}
      >
        ${formatPrice}
      </span>
    </div>
  );
};

export default SubTitlePrice;
