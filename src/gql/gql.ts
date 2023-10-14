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
    "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n    product {\n      id\n      name\n      price\n    }\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      ...ProductListItem\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "fragment CollectionDetails on Collection {\n  name\n  slug\n  description\n  image {\n    url\n    width\n    height\n  }\n}": types.CollectionDetailsFragmentDoc,
    "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionDetails\n  }\n}": types.CollectionsGetBySlugDocument,
    "query CollectionsGetList($first: Int!) {\n  collections(first: $first) {\n    ...CollectionDetails\n  }\n}": types.CollectionsGetListDocument,
    "query OrdersGetByEmail($email: String!) {\n  orders(where: {email: $email}) {\n    id\n    total\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        id\n        name\n        price\n        images {\n          url\n        }\n      }\n    }\n  }\n}": types.OrdersGetByEmailDocument,
    "fragment ProductDetails on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images {\n    url\n    width\n    height\n  }\n  price\n}": types.ProductDetailsFragmentDoc,
    "query ProductGetById($productId: ID!) {\n  product(where: {id: $productId}) {\n    ...ProductDetails\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  averageRating\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!, $productsPerPage: Int!, $productsOffset: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $productsPerPage, skip: $productsOffset) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCategorySlugCount($slug: String!) {\n  productsConnection(where: {categories_every: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetByCategorySlugCountDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionDetails\n    products(first: 20) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetBySearchQuery($searchQuery: String!) {\n  products(where: {_search: $searchQuery}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetBySearchQueryDocument,
    "query ProductsGetList($productsPerPage: Int!, $productsOffset: Int!, $orderBy: ProductOrderByInput) {\n  products(first: $productsPerPage, skip: $productsOffset, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetListCountDocument,
    "fragment ReviewItem on Review {\n  id\n  name\n  rating\n  stage\n  headline\n  email\n  content\n}": types.ReviewItemFragmentDoc,
    "mutation ReviewsAddReview($headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!, $productId: ID!) {\n  createReview(\n    data: {headline: $headline, content: $content, rating: $rating, name: $name, email: $email, product: {connect: {id: $productId}}}\n  ) {\n    ...ReviewItem\n  }\n}": types.ReviewsAddReviewDocument,
    "query getReviewsByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    ...ReviewItem\n  }\n}": types.GetReviewsByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n    product {\n      id\n      name\n      price\n    }\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionDetails on Collection {\n  name\n  slug\n  description\n  image {\n    url\n    width\n    height\n  }\n}"): typeof import('./graphql').CollectionDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionDetails\n  }\n}"): typeof import('./graphql').CollectionsGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($first: Int!) {\n  collections(first: $first) {\n    ...CollectionDetails\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OrdersGetByEmail($email: String!) {\n  orders(where: {email: $email}) {\n    id\n    total\n    orderItems {\n      id\n      quantity\n      total\n      product {\n        id\n        name\n        price\n        images {\n          url\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').OrdersGetByEmailDocument;
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
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  averageRating\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $productsPerPage: Int!, $productsOffset: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: $productsPerPage, skip: $productsOffset) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlugCount($slug: String!) {\n  productsConnection(where: {categories_every: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionDetails\n    products(first: 20) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearchQuery($searchQuery: String!) {\n  products(where: {_search: $searchQuery}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetBySearchQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($productsPerPage: Int!, $productsOffset: Int!, $orderBy: ProductOrderByInput) {\n  products(first: $productsPerPage, skip: $productsOffset, orderBy: $orderBy) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItem on Review {\n  id\n  name\n  rating\n  stage\n  headline\n  email\n  content\n}"): typeof import('./graphql').ReviewItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewsAddReview($headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!, $productId: ID!) {\n  createReview(\n    data: {headline: $headline, content: $content, rating: $rating, name: $name, email: $email, product: {connect: {id: $productId}}}\n  ) {\n    ...ReviewItem\n  }\n}"): typeof import('./graphql').ReviewsAddReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getReviewsByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    ...ReviewItem\n  }\n}"): typeof import('./graphql').GetReviewsByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
