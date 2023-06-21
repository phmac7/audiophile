import ProductList from '@/components/organisms/ProductList';
import { getClient } from '@/graphQL/graphQLClient';
import { GET_PRODUCTLIST } from '@/graphQL/queries';
import { GetProductListQuery } from '@/graphQL/schema';

const Headphones = async () => {
  const client = getClient();
  const { data }: { data: GetProductListQuery } = await client.query({
    query: GET_PRODUCTLIST,
    variables: { category: 'Headphones' },
  });
  const productList = data.productCollection?.items;
  console.log(productList);
  return <ProductList productList={productList} />;
};

export default Headphones;
