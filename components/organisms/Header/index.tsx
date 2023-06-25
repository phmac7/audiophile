import { Button, H1, Overline, Paragraph } from '@/components/atoms';
import styles from './Header.module.scss';
import { HeaderProps } from '@/models/componentsProps';

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  if (pathname === '/') {
    return (
      <header className={styles.headerMain}>
        <div className={styles.header}>
          <div className={styles.header__container}>
            <Overline text="new product" variation="secondary" />
            <H1 text="xx99 mark ii headphones" color="#FFF"></H1>
            <div className={styles.header__description}>
              <Paragraph
                text="Experience natural, lifelike audio and expectional build quality
                made for the passionate music enthusiast."
                variation="secondary"
              />
            </div>
            <Button label="see product" />
          </div>
        </div>
      </header>
    );
  }
  if (
    pathname === '/headphones' ||
    pathname === '/earphones' ||
    pathname === '/speakers'
  ) {
    return (
      <header className={styles.heading}>
        <H1 text={pathname.substring(1)} color="#FFF" />
      </header>
    );
  }
  return null;
};

export default Header;
