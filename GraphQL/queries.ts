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
        images {
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
    productCollection(where: { slug: $slug }) {
      items {
        ...GetPDPImages
        name
        price
        isNew
        description {
          json
        }
        features {
          json
        }
        productBoxContentCollection {
          items {
            quantity
            item
          }
        }
      }
    }
  }
  fragment GetPDPImages on Product {
    images {
      desktop {
        url
      }
      tabletPdp {
        url
      }
      mobile {
        url
      }
    }
  }
`;