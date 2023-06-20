export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  imageCollection?: Maybe<ImageCollection>;
  productCollection?: Maybe<ProductCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsImageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetLinkingCollectionsImageCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsProductCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Item that goes in the product box [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/boxContent) */
export type BoxContent = Entry & {
  __typename?: 'BoxContent';
  contentfulMetadata: ContentfulMetadata;
  item?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<BoxContentLinkingCollections>;
  quantity?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
};


/** Item that goes in the product box [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/boxContent) */
export type BoxContentItemArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Item that goes in the product box [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/boxContent) */
export type BoxContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Item that goes in the product box [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/boxContent) */
export type BoxContentQuantityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BoxContentCollection = {
  __typename?: 'BoxContentCollection';
  items: Array<Maybe<BoxContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BoxContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<BoxContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BoxContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  item?: InputMaybe<Scalars['String']['input']>;
  item_contains?: InputMaybe<Scalars['String']['input']>;
  item_exists?: InputMaybe<Scalars['Boolean']['input']>;
  item_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  item_not?: InputMaybe<Scalars['String']['input']>;
  item_not_contains?: InputMaybe<Scalars['String']['input']>;
  item_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quantity_gt?: InputMaybe<Scalars['Int']['input']>;
  quantity_gte?: InputMaybe<Scalars['Int']['input']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quantity_lt?: InputMaybe<Scalars['Int']['input']>;
  quantity_lte?: InputMaybe<Scalars['Int']['input']>;
  quantity_not?: InputMaybe<Scalars['Int']['input']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BoxContentLinkingCollections = {
  __typename?: 'BoxContentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  productCollection?: Maybe<ProductCollection>;
};


export type BoxContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BoxContentLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BoxContentLinkingCollectionsProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BoxContentLinkingCollectionsProductCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BoxContentOrder {
  ItemAsc = 'item_ASC',
  ItemDesc = 'item_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Category of a list of products [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/category) */
export type Category = Entry & {
  __typename?: 'Category';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CategoryLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  productsCollection?: Maybe<CategoryProductsCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Category of a list of products [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/category) */
export type CategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Category of a list of products [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/category) */
export type CategoryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Category of a list of products [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/category) */
export type CategoryProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Category of a list of products [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/category) */
export type CategorySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  items: Array<Maybe<Category>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CategoryLinkingCollections = {
  __typename?: 'CategoryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  productCollection?: Maybe<ProductCollection>;
};


export type CategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CategoryLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryLinkingCollectionsProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CategoryLinkingCollectionsProductCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CategoryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CategoryProductsCollection = {
  __typename?: 'CategoryProductsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Product images for desktop, tablet and mobile. [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/image) */
export type Image = Entry & {
  __typename?: 'Image';
  contentfulMetadata: ContentfulMetadata;
  desktop?: Maybe<Asset>;
  linkedFrom?: Maybe<ImageLinkingCollections>;
  mobile?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tablet?: Maybe<Asset>;
};


/** Product images for desktop, tablet and mobile. [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/image) */
export type ImageDesktopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Product images for desktop, tablet and mobile. [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/image) */
export type ImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Product images for desktop, tablet and mobile. [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/image) */
export type ImageMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Product images for desktop, tablet and mobile. [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/image) */
export type ImageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Product images for desktop, tablet and mobile. [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/image) */
export type ImageTabletArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageCollection = {
  __typename?: 'ImageCollection';
  items: Array<Maybe<Image>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tablet_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type ImageLinkingCollections = {
  __typename?: 'ImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  productCollection?: Maybe<ProductCollection>;
};


export type ImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ImageLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ImageLinkingCollectionsProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImageLinkingCollectionsProductCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type Product = Entry & {
  __typename?: 'Product';
  category?: Maybe<Category>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<ProductDescription>;
  features?: Maybe<ProductFeatures>;
  galleryCollection?: Maybe<AssetCollection>;
  galleryDesktopCollection?: Maybe<AssetCollection>;
  galleryTabletCollection?: Maybe<AssetCollection>;
  images?: Maybe<Image>;
  linkedFrom?: Maybe<ProductLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  productBoxContentCollection?: Maybe<ProductProductBoxContentCollection>;
  relatedProductsCollection?: Maybe<ProductRelatedProductsCollection>;
  sys: Sys;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductFeaturesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductGalleryDesktopCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductGalleryTabletCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductImagesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductProductBoxContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductProductBoxContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BoxContentFilter>;
};


/** product [See type definition](https://app.contentful.com/spaces/tl62fqhd48qy/content_types/product) */
export type ProductRelatedProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductRelatedProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};

export type ProductCollection = {
  __typename?: 'ProductCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProductDescription = {
  __typename?: 'ProductDescription';
  json: Scalars['JSON']['output'];
  links: ProductDescriptionLinks;
};

export type ProductDescriptionAssets = {
  __typename?: 'ProductDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProductDescriptionEntries = {
  __typename?: 'ProductDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProductDescriptionLinks = {
  __typename?: 'ProductDescriptionLinks';
  assets: ProductDescriptionAssets;
  entries: ProductDescriptionEntries;
};

export type ProductFeatures = {
  __typename?: 'ProductFeatures';
  json: Scalars['JSON']['output'];
  links: ProductFeaturesLinks;
};

export type ProductFeaturesAssets = {
  __typename?: 'ProductFeaturesAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ProductFeaturesEntries = {
  __typename?: 'ProductFeaturesEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ProductFeaturesLinks = {
  __typename?: 'ProductFeaturesLinks';
  assets: ProductFeaturesAssets;
  entries: ProductFeaturesEntries;
};

export type ProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductFilter>>>;
  category?: InputMaybe<CfCategoryNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  features_contains?: InputMaybe<Scalars['String']['input']>;
  features_exists?: InputMaybe<Scalars['Boolean']['input']>;
  features_not_contains?: InputMaybe<Scalars['String']['input']>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  galleryDesktopCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  galleryTabletCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  images?: InputMaybe<CfImageNestedFilter>;
  images_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  productBoxContent?: InputMaybe<CfBoxContentNestedFilter>;
  productBoxContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  relatedProducts?: InputMaybe<CfProductNestedFilter>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ProductLinkingCollections = {
  __typename?: 'ProductLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  productCollection?: Maybe<ProductCollection>;
};


export type ProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductLinkingCollectionsProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductLinkingCollectionsProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProductLinkingCollectionsProductCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ProductOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ProductProductBoxContentCollection = {
  __typename?: 'ProductProductBoxContentCollection';
  items: Array<Maybe<BoxContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ProductProductBoxContentCollectionOrder {
  ItemAsc = 'item_ASC',
  ItemDesc = 'item_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ProductRelatedProductsCollection = {
  __typename?: 'ProductRelatedProductsCollection';
  items: Array<Maybe<Product>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ProductRelatedProductsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  boxContent?: Maybe<BoxContent>;
  boxContentCollection?: Maybe<BoxContentCollection>;
  category?: Maybe<Category>;
  categoryCollection?: Maybe<CategoryCollection>;
  entryCollection?: Maybe<EntryCollection>;
  image?: Maybe<Image>;
  imageCollection?: Maybe<ImageCollection>;
  product?: Maybe<Product>;
  productCollection?: Maybe<ProductCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBoxContentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBoxContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BoxContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BoxContentFilter>;
};


export type QueryCategoryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CategoryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryImageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ImageFilter>;
};


export type QueryProductArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type CfBoxContentNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBoxContentNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBoxContentNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  item?: InputMaybe<Scalars['String']['input']>;
  item_contains?: InputMaybe<Scalars['String']['input']>;
  item_exists?: InputMaybe<Scalars['Boolean']['input']>;
  item_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  item_not?: InputMaybe<Scalars['String']['input']>;
  item_not_contains?: InputMaybe<Scalars['String']['input']>;
  item_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quantity_gt?: InputMaybe<Scalars['Int']['input']>;
  quantity_gte?: InputMaybe<Scalars['Int']['input']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quantity_lt?: InputMaybe<Scalars['Int']['input']>;
  quantity_lte?: InputMaybe<Scalars['Int']['input']>;
  quantity_not?: InputMaybe<Scalars['Int']['input']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCategoryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCategoryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfImageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfImageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfImageNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tablet_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfProductNestedFilter>>>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  features_contains?: InputMaybe<Scalars['String']['input']>;
  features_exists?: InputMaybe<Scalars['Boolean']['input']>;
  features_not_contains?: InputMaybe<Scalars['String']['input']>;
  galleryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  galleryDesktopCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  galleryTabletCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  images_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  productBoxContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  relatedProductsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categoryCollection?: { __typename?: 'CategoryCollection', items: Array<{ __typename?: 'Category', name?: string | null } | null> } | null };
