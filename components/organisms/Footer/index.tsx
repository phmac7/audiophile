import styles from './Footer.module.scss';
import { Logo } from '@/components/Ions';
import { NavLinks, SocialLinks } from '@/components/molecules';
import { Paragraph } from '@/components/atoms';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <Link
            href={'/'}
            className={styles.footer__logoLink}
            aria-label="logo, go home"
          >
            <Logo />
          </Link>
        </div>
        <div className={styles.footer__listLinks}>
          <NavLinks />
        </div>
        <div className={styles.footer__audiophileBio}>
          <Paragraph
            text="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week."
            variation="secondary"
          />
        </div>
        <div className={styles.footer__copyright}>
          <span>Copyright 2021. All Rights Reserved</span>
        </div>
        <div className={styles.footer__socialLinks}>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
