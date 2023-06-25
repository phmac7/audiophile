import { Button, H3, H4 } from '@/components/atoms';
import styles from './YouMayAlsoLike.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { YouMayAlsoLikeProps } from '@/models/componentsProps';

const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = ({ products }) => {
  return (
    <div className={styles.like}>
      <H3 text="you may also like" />
      <div className={styles.like__itemsContainer}>
        {products?.items.map((item) => (
          <article key={item?.slug} className={styles.like__item}>
            <div className={styles.like__backgroundImg}>
              <Link
                href={'/products/' + item?.slug}
                className={styles.like__link}
              >
                <div className={styles.like__img}>
                  <Image
                    alt={item?.name!}
                    src={item?.productImages?.desktop?.url!}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="fill"
                  />
                </div>
              </Link>
            </div>
            <H4 text={item?.name!} />
            <Link href={'/products/' + item?.slug}>
              <Button label="see product" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
