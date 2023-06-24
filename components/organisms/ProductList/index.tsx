'use client';
import React from 'react';
import { ProductCard } from '@/components/molecules';
import styles from './ProductList.module.scss';

export interface ProductListProps {
  productList:
    | Array<{
        __typename?: 'Product';
        name?: string | null;
        isNew?: boolean | null;
        slug?: string | null;
        description?: { __typename?: 'ProductDescription'; json: any } | null;
        productImages?: {
          __typename?: 'Image';
          desktop?: { __typename?: 'Asset'; url?: string | null } | null;
          tablet?: { __typename?: 'Asset'; url?: string | null } | null;
          mobile?: { __typename?: 'Asset'; url?: string | null } | null;
        } | null;
        sys: { __typename?: 'Sys'; id: string };
      } | null>
    | undefined;
}

const ProductList: React.FC<ProductListProps> = ({ productList }) => {
  if (productList?.length === 0 || productList?.length === undefined) {
    return (
      <section className={styles.productList}>
        Ooops it seems that we don&apos;t have any product for this section yet
      </section>
    );
  }
  const SortedProduts = [
    ...productList.filter((product) => product?.isNew),
    ...productList.filter((product) => !product?.isNew),
  ];
  return (
    <section className={styles.productList}>
      {SortedProduts?.map((product, index) => (
        <ProductCard
          key={product?.sys.id!}
          title={product?.name!}
          description={product?.description?.json.content[0].content[0].value}
          desktopImgUrl={product?.productImages?.desktop?.url!}
          mobileImgUrl={product?.productImages?.mobile?.url!}
          tabletImgUrl={product?.productImages?.tablet?.url!}
          isNew={product?.isNew}
          indexInArray={index}
          slug={product?.slug!}
        />
      ))}
    </section>
  );
};

export default ProductList;
