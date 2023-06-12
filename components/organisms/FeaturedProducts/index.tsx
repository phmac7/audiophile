import React from 'react';
import styles from './FeaturedProducts.module.scss';
import { FeaturedProduct } from '@/components/molecules';

const FeaturedProducts = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.featured__container}>
        <FeaturedProduct
          title="zx9 speaker"
          variation="primary"
          description="upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          desktopImg="/assets/home/desktop/image-speaker-zx9.png"
          mobileImg="/assets/home/desktop/image-speaker-zx9.png"
        />
        <FeaturedProduct
          title="zx7 speaker"
          variation="secondary"
          mobileImg="/assets/home/mobile/image-speaker-zx7.jpg"
          tabletImg="/assets/home/tablet/image-speaker-zx7.jpg"
          desktopImg="/assets/home/desktop/image-speaker-zx7.jpg"
        />
        <FeaturedProduct
          title="yx1 earphones"
          variation="tertiary"
          mobileImg="/assets/home/mobile/image-earphones-yx1.jpg"
          tabletImg="/assets/home/tablet/image-earphones-yx1.jpg"
          desktopImg="/assets/home/desktop/image-earphones-yx1.jpg"
        />
      </div>
    </section>
  );
};

export default FeaturedProducts;
