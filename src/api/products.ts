import { executeGraphql } from "./graphqlApi";
import {
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductsGetByCollectionSlugDocument,
} from "@/gql/graphql";

export const getProductsList = async ({
	productsPerPage,
	productsOffset,
}: {
	productsPerPage: number;
	productsOffset: number;
}) => {
	const graphqlResponse = await executeGraphql(
		ProductsGetListDocument,
		{
			productsPerPage: productsPerPage,
			productsOffset: productsOffset,
		},
	);

	return graphqlResponse.products;
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
	const graphqlResponse = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{
			slug: categorySlug,
			productsPerPage: productsPerPage,
			productsOffset: productsOffset,
		},
	);

	const products = graphqlResponse.categories[0]?.products;

	return products;
};

export const getProductsByCollectionSlug = async ({
	collectionSlug,
	productsPerPage,
	productsOffset,
}: {
	collectionSlug: string;
	productsPerPage: number;
	productsOffset: number;
}) => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCollectionSlugDocument,
		{
			slug: collectionSlug,
			productsPerPage: productsPerPage,
			productsOffset: productsOffset,
		},
	);

	const products = graphqlResponse.collections[0]?.products;

	return products;
};

export const getProductById = async (
	id: ProductListItemFragment["id"],
) => {
	const graphqlResponse = await executeGraphql(
		ProductGetByIdDocument,
		{
			productId: id,
		},
	);

	const product = graphqlResponse.product;

	return product;
};
