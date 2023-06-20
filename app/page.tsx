import {
  AudiophileBio,
  Categories,
  FeaturedProducts,
} from '@/components/organisms';

import { getClient } from '../GraphQL/graphQLClient';
import { GET_CATEGORIES } from '@/GraphQL/queries';
import { GetCategoriesQuery } from '@/GraphQL/schema';

export default async function Home() {
  const client = getClient();
  const { data }: { data: GetCategoriesQuery } = await client.query({
    query: GET_CATEGORIES,
  });
  return (
    <>
      <Categories />
      <FeaturedProducts />
      <AudiophileBio />
    </>
  );
}
