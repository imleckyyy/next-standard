"use client";
import {
	experimental_useOptimistic as useOptimistic,
	useRef,
} from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FormInput } from "../atoms/FormInput";
import { Headline } from "../atoms/Headline";
import { RateStars } from "../molecules/RateStars";
import { addReviewAction } from "@/actions/reviews";
import { type Stage, type ReviewItemFragment } from "@/gql/graphql";

export const ProductReviews = ({
	productId,
	reviews,
}: {
	productId: string;
	reviews: ReviewItemFragment[];
}) => {
	const ref = useRef<HTMLFormElement>(null);

	const formStatus = useFormStatus();

	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(state, newReview: ReviewItemFragment) => {
			return [...state, newReview];
		},
	);

	const averageRating = reviews.length
		? Math.round(
				reviews.reduce((acc, review) => acc + review.rating, 0) /
					reviews.length,
		  )
		: 0;

	return (
		<section>
			<Headline>Customer Reviews</Headline>

			<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-6">
				<div className="md:col-span-4 lg:col-span-3">
					{reviews.length > 0 && (
						<div className="mb-4 flex items-center gap-4">
							<RateStars rate={averageRating} />
							<p className="text-sm">
								Based on {reviews.length} reviews
							</p>
						</div>
					)}
					<form
						action={async (formData) => {
							ref.current?.reset();
							setOptimisticReviews({
								id: "optimistic-" + Math.random(),
								stage: "DRAFT" as Stage,
								headline: formData.get("headline") as string,
								content: formData.get("content") as string,
								rating: Number(formData.get("rating")),
								name: formData.get("name") as string,
								email: formData.get("email") as string,
							});
							await addReviewAction(formData);
						}}
						ref={ref}
						className="flex flex-col"
						data-testid="add-review-form"
					>
						<input type="hidden" name="productId" value={productId} />
						<div className="mb-4 sm:col-span-4">
							<FormInput
								id="headline"
								type="headline"
								label="Review title"
							/>
						</div>

						<div className="mb-4 sm:col-span-4">
							<FormInput
								id="content"
								type="content"
								label="Review content"
							/>
						</div>

						<div className="mb-4 sm:col-span-4">
							<label
								htmlFor="rating"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Rating
							</label>
							<select id="rating" name="rating" defaultValue={5}>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>

						<div className="mb-4 sm:col-span-4">
							<FormInput id="name" type="name" label="Your name" />
						</div>

						<div className="mb-4 sm:col-span-4">
							<FormInput id="email" type="email" label="Your email" />
						</div>

						<button
							type="submit"
							disabled={formStatus.pending}
							className="rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-900 disabled:cursor-wait disabled:bg-gray-200"
						>
							Submit review
						</button>
					</form>
				</div>
				<div className="mt-16 md:col-span-7 md:col-start-4 lg:col-span-7 lg:col-start-4 lg:mt-0">
					{optimisticReviews.length > 0 ? (
						optimisticReviews.map((review) => (
							<div key={review.id} className="mb-6">
								{review.stage !== "PUBLISHED" && (
									<p className="text-sm text-gray-500">
										Review is pending approval
									</p>
								)}
								<div>
									<p className="font-bold text-gray-700">
										{review.name}
									</p>
									<RateStars rate={review.rating} />
								</div>
								<div>
									<p>{review.headline}</p>
									{review.content}
								</div>
							</div>
						))
					) : (
						<p>No reviews yet.</p>
					)}
				</div>
			</div>
		</section>
	);
};
