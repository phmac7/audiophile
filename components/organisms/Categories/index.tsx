'use client';
import styles from './Categories.module.scss';
import { Category } from '@/components/molecules';
import { GetCategoriesQuery } from '@/graphQL/schema';
import { GET_CATEGORIES } from '@/graphQL/queries';
import {
  useQuery,
  useSuspenseQuery,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { CategoriesSkeleton } from '@/components/skeletons/skeletons';

const Categories: React.FC = () => {
  const { data, loading } = useQuery<GetCategoriesQuery>(GET_CATEGORIES);

  if (loading) {
    return <CategoriesSkeleton />;
  }

  return (
    <section className={styles.categories}>
      <ul className={styles.categories__list}>
        {data?.categoryCollection?.items?.map((category) => (
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

export default Categories;
