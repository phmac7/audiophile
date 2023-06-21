import {
  AudiophileBio,
  Categories,
  FeaturedProducts,
} from '@/components/organisms';

import { getClient } from '../graphQL/graphQLClient';
import { GET_CATEGORIES } from '@/graphQL/queries';
import { GetCategoriesQuery } from '@/graphQL/schema';
import { Suspense } from 'react';

export default async function Home() {
  //   const client = getClient();
  //   const { data }: { data: GetCategoriesQuery } = await client.query({
  //     query: GET_CATEGORIES,
  //   });
  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <Categories />
      </Suspense>
      <FeaturedProducts />
      <AudiophileBio />
    </>
  );
}
