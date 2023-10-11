import { executeGraphql } from "./graphqlApi";
import { OrdersGetByEmailDocument } from "@/gql/graphql";

export const getOrdersByEmail = async (email: string) => {
	const graphqlResponse = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: {
			email,
		},
		next: {
			revalidate: 60,
		},
	});

	const orders = graphqlResponse.orders;

	return orders;
};
