'use client';
import styles from './Gallery.module.scss';
import Image from 'next/image';
import { useWindowSize } from 'usehooks-ts';
import { GalleryProps } from '@/models/componentsProps';

const Gallery: React.FC<GalleryProps> = ({ slug, galleryData }) => {
  const { width } = useWindowSize();

  if (galleryData === undefined || galleryData === null) {
    return <p>a</p>;
  }

  const getCollection = () => {
    if (width < 768) {
      return galleryData.mobileCollection;
    }
    if (width < 1024) {
      return galleryData.tabletCollection;
    }
    return galleryData.desktopCollection;
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__img1}>
        <Image
          src={getCollection()?.items[0]?.url!}
          alt={slug}
          fill
          style={{ objectFit: 'cover' }}
          sizes="fill"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89h8AAtEB5wrzxXEAAAAASUVORK5CYII="
          placeholder="blur"
        />
      </div>
      <div className={styles.gallery__img2}>
        <Image
          src={getCollection()?.items[1]?.url!}
          alt={slug}
          fill
          style={{ objectFit: 'cover' }}
          sizes="fill"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89h8AAtEB5wrzxXEAAAAASUVORK5CYII="
          placeholder="blur"
        />
      </div>
      <div className={styles.gallery__img3}>
        <Image
          src={getCollection()?.items[2]?.url!}
          alt={slug}
          fill
          style={{ objectFit: 'cover' }}
          sizes="fill"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89h8AAtEB5wrzxXEAAAAASUVORK5CYII="
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Gallery;
