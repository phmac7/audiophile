import {
  AudiophileBio,
  Categories,
  FeaturedProducts,
} from '@/components/organisms';
import { Suspense } from 'react';
import { CategoriesSkeleton } from '@/components/skeletons/skeletons';

export default async function Home() {
  //   const client = getClient();
  //   const { data }: { data: GetCategoriesQuery } = await client.query({
  //     query: GET_CATEGORIES,
  //   });
  return (
    <>
      <Categories />
      <FeaturedProducts />
      <AudiophileBio />
    </>
  );
}
