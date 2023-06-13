import React from 'react';
import styles from './SocialLinks.module.scss';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from '@/components/Ions';

const SocialLinks = () => {
  return (
    <div className={styles.social}>
      <ul className={styles.social__list}>
        <li className={styles.social__item}>
          <Link
            className={styles.social__link}
            href={'#'}
            aria-label="link to Facebook"
            title="Facebook"
          >
            <Facebook />
          </Link>
        </li>
        <li className={styles.social__item}>
          <Link
            className={styles.social__link}
            href={'#'}
            aria-label="link to Twitter"
            title="Twitter"
          >
            <Twitter />
          </Link>
        </li>
        <li className={styles.social__item}>
          <Link
            className={styles.social__link}
            href={'#'}
            aria-label="link to Instagram"
            title="Instagram"
          >
            <Instagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
