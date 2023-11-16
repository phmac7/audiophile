import { ProductList } from '@/components/organisms';
import { getClient } from '@/graphQL/graphQLClient';
import { GET_PRODUCTLIST } from '@/graphQL/queries';
import { GetProductListQuery } from '@/graphQL/schema';

const Speakers = async () => {
  const client = getClient();
  const { data }: { data: GetProductListQuery } = await client.query({
    query: GET_PRODUCTLIST,
    variables: { category: 'Speakers' },
  });
  const productList = data.productCollection?.items;
  return <ProductList productList={productList} />;
};

export default Speakers;
