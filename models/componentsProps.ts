export interface ProductDetailsProps {
  product:
    | {
        __typename?: 'Product';
        name?: string | null;
        price?: number | null;
        isNew?: boolean | null;
        description?: {
          __typename?: 'ProductDescription';
          json: {
            content: { content: { value: string; nodeType: string }[] }[];
          };
        } | null;
        features?: {
          __typename?: 'ProductFeatures';
          json: {
            content: { content: { value: string; nodeType: string }[] }[];
          };
        } | null;
        productBoxContentCollection?: {
          __typename?: 'ProductProductBoxContentCollection';
          items: Array<{
            __typename?: 'BoxContent';
            quantity?: number | null;
            item?: string | null;
          } | null>;
        } | null;
        productImages?: {
          __typename?: 'Image';
          mobile?: { __typename?: 'Asset'; url?: string | null } | null;
          tabletPdp?: { __typename?: 'Asset'; url?: string | null } | null;
          desktop?: { __typename?: 'Asset'; url?: string | null } | null;
        } | null;
      }
    | null
    | undefined;
  slug?: string;
  gallery:
    | {
        __typename?: 'GalleryItem';
        mobileCollection?: {
          __typename?: 'AssetCollection';
          items: Array<{ __typename?: 'Asset'; url?: string | null } | null>;
        } | null;
        tabletCollection?: {
          __typename?: 'AssetCollection';
          items: Array<{ __typename?: 'Asset'; url?: string | null } | null>;
        } | null;
        desktopCollection?: {
          __typename?: 'AssetCollection';
          items: Array<{ __typename?: 'Asset'; url?: string | null } | null>;
        } | null;
      }
    | undefined
    | null;
  similarProducts:
    | {
        __typename?: 'ProductRelatedProductsCollection';
        items: Array<{
          __typename?: 'Product';
          slug?: string | null;
          name?: string | null;
          productImages?: {
            __typename?: 'Image';
            desktop?: { __typename?: 'Asset'; url?: string | null } | null;
          } | null;
        } | null>;
      }
    | null
    | undefined;
}

export interface ProductHeadingProps {
  isNew: boolean | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
  price: number | null | undefined;
  image:
    | {
        __typename?: 'Image';
        mobile?: {
          __typename?: 'Asset';
          url?: string | null;
        } | null;
        tabletPdp?: {
          __typename?: 'Asset';
          url?: string | null;
        } | null;
        desktop?: {
          __typename?: 'Asset';
          url?: string | null;
        } | null;
      }
    | null
    | undefined;
}

export interface GalleryProps {
  slug: string;
  galleryData:
    | {
        __typename?: 'GalleryItem';
        mobileCollection?: {
          __typename?: 'AssetCollection';
          items: Array<{ __typename?: 'Asset'; url?: string | null } | null>;
        } | null;
        tabletCollection?: {
          __typename?: 'AssetCollection';
          items: Array<{ __typename?: 'Asset'; url?: string | null } | null>;
        } | null;
        desktopCollection?: {
          __typename?: 'AssetCollection';
          items: Array<{ __typename?: 'Asset'; url?: string | null } | null>;
        } | null;
      }
    | undefined
    | null;
}
