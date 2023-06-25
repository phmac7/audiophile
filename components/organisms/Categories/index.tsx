'use client';
import styles from './Categories.module.scss';
import { Category } from '@/components/molecules';
import { GetCategoriesQuery } from '@/graphQL/schema';
import { GET_CATEGORIES } from '@/graphQL/queries';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

const Categories: React.FC = () => {
  const { data }: { data: GetCategoriesQuery } =
    useSuspenseQuery(GET_CATEGORIES);
  return (
    <section className={styles.categories}>
      <ul className={styles.categories__list}>
        {data.categoryCollection?.items?.map((category) => (
          <li key={category?.name} className={styles.categories__item}>
            <Category
              category={category?.name!}
              url={category?.thumbnail?.url!}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export const CategoriesOnMenu: React.FC = () => {
  const { data }: { data: GetCategoriesQuery } =
    useSuspenseQuery(GET_CATEGORIES);
  return (
    <ul className={styles.categories__list}>
      {data.categoryCollection?.items?.map((category) => (
        <li key={category?.name} className={styles.categories__item}>
          <Category
            category={category?.name!}
            url={category?.thumbnail?.url!}
          />
        </li>
      ))}
    </ul>
  );
};

export default Categories;
