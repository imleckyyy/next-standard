"use server";

import { addReview } from "@/api/reviews";

export const addReviewAction = async (formData: FormData) => {
	"use server";

	const productId = formData.get("productId");
	const headline = formData.get("headline");
	const content = formData.get("content");
	const rating = formData.get("rating");
	const name = formData.get("name");
	const email = formData.get("email");

	if (!headline || !content || !rating || !name || !email) {
		throw new Error("Missing required fields");
	}

	await addReview({
		productId: productId as string,
		headline: headline as string,
		content: content as string,
		rating: Number(rating),
		name: name as string,
		email: email as string,
	});
};
