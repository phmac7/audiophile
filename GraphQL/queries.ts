import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories {
    categoryCollection {
      items {
        name
        thumbnail {
          url
        }
      }
    }
  }
`;

export const GET_PRODUCTLIST = gql`
  query getProductList($category: String) {
    productCollection(where: { category: { name: $category } }) {
      items {
        name
        description {
          json
        }
        isNew
        productImages {
          desktop {
            url
          }
          tablet {
            url
          }
          mobile {
            url
          }
        }
        sys {
          id
        }
        slug
      }
    }
  }
`;

export const GET_PRODUCTPAGE_INFO = gql`
  query getProductPageINFO($slug: String) {
    productCollection(where: { slug: $slug }, limit: 1) {
      items {
        name
        sys {
          id
        }
        price
        isNew
        description {
          json
        }
        features {
          json
        }
        productBoxContentCollection(limit: 10) {
          items {
            quantity
            item
          }
        }
        productImages {
          mobile {
            url
          }
          tabletPdp {
            url
          }
          desktop {
            url
          }
        }
        gallery {
          mobileCollection(limit: 3) {
            items {
              url
            }
          }
          tabletCollection(limit: 3) {
            items {
              url
            }
          }
          desktopCollection(limit: 3) {
            items {
              url
            }
          }
        }
        relatedProductsCollection(limit: 3) {
          items {
            name
            slug
            productImages {
              desktop {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct {
    productCollection {
      items {
        name
      }
    }
  }
`;
