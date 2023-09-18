/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CollectionDetails on Collection {\n  name\n  slug\n  description\n}": types.CollectionDetailsFragmentDoc,
    "query CollectionsGetList($first: Int!) {\n  collections(first: $first) {\n    ...CollectionDetails\n  }\n}": types.CollectionsGetListDocument,
    "fragment ProductDetails on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images {\n    url\n    width\n    height\n  }\n  price\n}": types.ProductDetailsFragmentDoc,
    "query ProductGetById($productId: ID!) {\n  product(where: {id: $productId}) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!, $productsPerPage: Int!, $productsOffset: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $productsPerPage, skip: $productsOffset) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!, $productsPerPage: Int!, $productsOffset: Int!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionDetails\n    products(first: $productsPerPage, skip: $productsOffset) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetBySearchQuery($searchQuery: String!) {\n  products(where: {_search: $searchQuery}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetBySearchQueryDocument,
    "query ProductsGetList($productsPerPage: Int!, $productsOffset: Int!) {\n  products(first: $productsPerPage, skip: $productsOffset) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionDetails on Collection {\n  name\n  slug\n  description\n}"): typeof import('./graphql').CollectionDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($first: Int!) {\n  collections(first: $first) {\n    ...CollectionDetails\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images {\n    url\n    width\n    height\n  }\n  price\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($productId: ID!) {\n  product(where: {id: $productId}) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $productsPerPage: Int!, $productsOffset: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $productsPerPage, skip: $productsOffset) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!, $productsPerPage: Int!, $productsOffset: Int!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionDetails\n    products(first: $productsPerPage, skip: $productsOffset) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearchQuery($searchQuery: String!) {\n  products(where: {_search: $searchQuery}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetBySearchQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($productsPerPage: Int!, $productsOffset: Int!) {\n  products(first: $productsPerPage, skip: $productsOffset) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
