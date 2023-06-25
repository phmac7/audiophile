export interface ProductDetailsProps {
  product:
    | {
        __typename?: 'Product';
        name?: string | null;
        sys: { __typename?: 'Sys'; id: string };
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
  id: string;
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

export interface AddToCartProps {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
}

export interface ToggleQuantityProps {
  decreaseQuantity?: any;
  increaseQuantity?: any;
  forCart?: boolean;
  quantity?: number;
  id?: string;
}

export interface ButtonProps {
  label: string;
  variation?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}

export interface HeadingProps {
  text: string;
  color?: '#000' | '#FFF' | '#fff';
}

export interface OverlineProps {
  text: string;
  variation?: 'primary' | 'secondary';
}

export interface ParagraphProps {
  text?: string;
  variation?: 'primary' | 'secondary';
}

export interface CategoryProps {
  category: string;
  url: string;
}

export interface FeaturedProductProps {
  title: string;
  variation: 'primary' | 'secondary' | 'tertiary';
  description?: string;
  mobileImg: string;
  desktopImg: string;
  tabletImg?: string;
}

export interface InTheBoxProps {
  items:
    | ({
        __typename?: 'BoxContent' | undefined;
        quantity?: number | null | undefined;
        item?: string | null | undefined;
      } | null)[]
    | undefined;
}

export interface ProductCardProps {
  mobileImgUrl: string;
  tabletImgUrl: string;
  desktopImgUrl: string;
  title: string;
  description: string;
  isNew?: boolean | null | undefined;
  indexInArray: number;
  slug: string;
}

export interface ProductFeaturesProps {
  features: string | undefined;
}

export interface ProductInCartProps {
  id?: string;
  name: string;
  price: number;
  imgUrl: string;
}
export interface YouMayAlsoLikeProps {
  products: ProductDetailsProps['similarProducts'];
}
export interface HeaderProps {
  pathname: string;
}

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
