import {
  AudiophileBio,
  Categories,
  FeaturedProducts,
} from '@/components/organisms';

import { GraphQLClient, gql } from 'graphql-request';

const endpoint = process.env.ENDPOINT_CONTENTFUL as string;
const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.CONTENT_DELIVERY_KEY}`,
  },
});

const query = gql`
  {
    categoryCollection {
      items {
        name
      }
    }
  }
`;

export default async function Home() {
  const data = await client.request(query);
  console.log(data);

  return (
    <>
      <Categories />
      <FeaturedProducts />
      <AudiophileBio />
    </>
  );
}
