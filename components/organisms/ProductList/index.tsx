'use client';
import React from 'react';
import data from '@/data.json';
import ProductCard from '@/components/molecules/ProductCard';
import styles from './ProductList.module.scss';

export type Data = typeof data;

export interface ProductListProps {
  category: string;
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const Products: Data = data;

  const FilteredProducts = Products.filter(
    (product) => product.category === category
  );

  const SortedProduts = [
    ...FilteredProducts.filter((product) => product.new),
    ...FilteredProducts.filter((product) => !product.new),
  ];

  return (
    <section className={styles.productList}>
      {SortedProduts?.map((product, index) => (
        <ProductCard
          key={product.id}
          title={product.name}
          description={product.description}
          desktopImgUrl={product.categoryImage.desktop}
          mobileImgUrl={product.categoryImage.mobile}
          tabletImgUrl={product.categoryImage.tablet}
          isNew={product.new}
          indexInArray={index}
          slug={product.slug}
        />
      ))}
    </section>
  );
};

export default ProductList;
