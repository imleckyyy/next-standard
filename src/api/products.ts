import { executeGraphql } from "./graphqlApi";
import {
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetBySearchQueryDocument,
	ProductsGetListCountDocument,
	ProductsGetByCategorySlugCountDocument,
} from "@/gql/graphql";

export const getProductsList = async ({
	productsPerPage,
	productsOffset,
}: {
	productsPerPage: number;
	productsOffset: number;
}) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			productsPerPage: productsPerPage,
			productsOffset: productsOffset,
		},
	});

	return graphqlResponse.products;
};

export const getProductsListCount = async () => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListCountDocument,
		variables: {},
	});
	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductsByCategorySlug = async ({
	categorySlug,
	productsPerPage,
	productsOffset,
}: {
	categorySlug: string;
	productsPerPage: number;
	productsOffset: number;
}) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: categorySlug,
			productsPerPage: productsPerPage,
			productsOffset: productsOffset,
		},
	});

	const products = graphqlResponse.categories[0]?.products;

	return products;
};

export const getProductsCountByCategorySlug = async (
	slug: string,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCategorySlugCountDocument,
		variables: {
			slug: slug,
		},
	});
	return graphqlResponse.productsConnection.aggregate.count;
};

export const getProductsByCollectionSlug = async ({
	collectionSlug,
}: {
	collectionSlug: string;
}) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: collectionSlug,
		},
	});

	const products = graphqlResponse.collections[0]?.products;

	return products;
};

export const getProductsBySearchQuery = async ({
	searchQuery,
}: {
	searchQuery: string;
}) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetBySearchQueryDocument,
		variables: {
			searchQuery: searchQuery,
		},
	});

	const products = graphqlResponse.products;

	return products;
};

export const getProductById = async (
	id: ProductListItemFragment["id"],
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			productId: id,
		},
	});

	const product = graphqlResponse.product;

	return product;
};
