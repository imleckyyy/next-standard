import { executeGraphql } from "./graphqlApi";
import { CollectionsGetListDocument } from "@/gql/graphql";

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
