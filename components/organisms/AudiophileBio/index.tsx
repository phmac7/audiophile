'use client';
import React from 'react';
import { useWindowSize } from 'usehooks-ts';
import styles from './AudiophileBio.module.scss';
import Image from 'next/image';
import { Paragraph } from '@/components/atoms';

const AudiophileBio = () => {
  const { width } = useWindowSize();

  const getImage = () => {
    if (width < 768) {
      return '/assets/shared/mobile/image-best-gear.jpg';
    }
    if (width < 1024) {
      return '/assets/shared/tablet/image-best-gear.jpg';
    }
    return '/assets/shared/desktop/image-best-gear.jpg';
  };

  return (
    <section className={styles.bio}>
      <div className={styles.bio__img}>
        <Image
          src={getImage()}
          alt={'a man touching his headphone and looking to his left'}
          fill
          sizes="fill"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.bio__text}>
        <h2 className={styles.bio__textHeading}>
          Bringing you the
          <span className={styles.bio__textHeadingColoured}> best</span> audio
          gear
        </h2>
        <div className={styles.bio__textDescription}>
          <Paragraph
            text="Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment."
          />
        </div>
      </div>
    </section>
  );
};

export default AudiophileBio;
