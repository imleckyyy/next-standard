import { executeGraphql } from "./graphqlApi";
import {
	GetReviewsByProductIdDocument,
	ReviewsAddReviewDocument,
	type ProductListItemFragment,
	ProductGetByIdDocument,
	ProductSetAverageRatingDocument,
} from "@/gql/graphql";

export const getReviewsByProductId = async (
	id: ProductListItemFragment["id"],
) => {
	const graphqlResponse = await executeGraphql({
		query: GetReviewsByProductIdDocument,
		variables: {
			productId: id,
		},
		next: {
			revalidate: 60,
		},
	});

	const reviews = graphqlResponse.reviews;

	return reviews;
};

export async function addReview({
	headline,
	content,
	rating,
	name,
	email,
	productId,
}: {
	headline: string;
	content: string;
	rating: number;
	name: string;
	email: string;
	productId: ProductListItemFragment["id"];
}) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			productId: productId,
		},
		cache: "no-store",
	});

	if (!product) {
		throw new Error("Product not found");
	}

	await executeGraphql({
		query: ReviewsAddReviewDocument,
		variables: {
			headline,
			content,
			rating,
			name,
			email,
			productId,
		},
		cache: "no-store",
	});
}

export async function updateAverageRating(productId: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			productId,
		},
		cache: "no-store",
	});

	if (!product) {
		throw new Error("Product not found");
	}

	const reviews = await getReviewsByProductId(productId);

	const averageRating =
		reviews.reduce((acc, review) => acc + review.rating, 0) /
		reviews.length;

	await executeGraphql({
		query: ProductSetAverageRatingDocument,
		variables: {
			productId,
			averageRating,
		},
		cache: "no-store",
	});
}
