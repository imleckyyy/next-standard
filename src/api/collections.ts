import { executeGraphql } from "./graphqlApi";
import {
	CollectionsGetBySlugDocument,
	CollectionsGetListDocument,
} from "@/gql/graphql";

export const getCollectionsList = async ({
	first,
}: {
	first: number;
}) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: {
			first: first,
		},
	});

	return graphqlResponse.collections;
};

export const getCollectionsListBySlug = async ({
	slug,
}: {
	slug: string;
}) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetBySlugDocument,
		variables: {
			slug: slug,
		},
	});

	return graphqlResponse.collections;
};
