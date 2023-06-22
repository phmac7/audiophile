import { getClient } from '@/graphQL/graphQLClient';
import { GET_PRODUCTPAGE_INFO } from '@/graphQL/queries';
import { GetProductPageInfoQuery } from '@/graphQL/schema';
import React from 'react';

const Page = async ({ params }: { params: { slug: string } }) => {
  const client = getClient();
  const { data }: { data: GetProductPageInfoQuery } = await client.query({
    query: GET_PRODUCTPAGE_INFO,
    variables: { slug: params.slug },
  });
  return <div>Page: {params.slug}</div>;
};

export default Page;
