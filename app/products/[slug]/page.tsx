import GoBackLink from '@/components/atoms/GoBackLink';
import { ProductDetails } from '@/components/organisms';
import { getClient } from '@/graphQL/graphQLClient';
import { GET_PRODUCTPAGE_INFO } from '@/graphQL/queries';
import { GetProductPageInfoQuery } from '@/graphQL/schema';
import { notFound } from 'next/navigation';
import React from 'react';

const Page = async ({ params }: { params: { slug: string } }) => {
  const client = getClient();
  const { data }: { data: GetProductPageInfoQuery } = await client.query({
    query: GET_PRODUCTPAGE_INFO,
    variables: { slug: params.slug },
  });

  if (!data.productCollection?.items[0]?.sys.id) {
    return notFound();
  }

  return (
    <section>
      <GoBackLink />
      <ProductDetails
        product={data.productCollection?.items[0]}
        slug={params.slug}
        gallery={data.productCollection?.items[0]?.gallery}
        similarProducts={
          data.productCollection?.items[0]?.relatedProductsCollection
        }
      />
    </section>
  );
};

export default Page;
