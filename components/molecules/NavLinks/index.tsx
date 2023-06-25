import styles from './NavLinks.module.scss';
import Link from 'next/link';

const NavLinks = () => {
  const linksList = [
    { title: 'home', link: '/' },
    { title: 'headphones', link: '/headphones' },
    { title: 'speakers', link: '/speakers' },
    { title: 'earphones', link: '/earphones' },
  ];
  return (
    <ul className={styles.navLinks}>
      {linksList.map((item) => (
        <li key={item.title} className={styles.navLinks__item}>
          <Link href={item.link} className={styles.navLinks__link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
