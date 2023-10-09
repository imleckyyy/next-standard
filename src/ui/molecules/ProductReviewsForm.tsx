"use client";

import { FormInput } from "../atoms/FormInput";

export const ProductReviewsForm = () => {
	return (
		<form
			action={addReviewAction}
			className="flex flex-col"
			data-testid="add-review-form"
		>
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
				className="rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-900 disabled:cursor-wait disabled:bg-gray-200"
			>
				Submit review
			</button>
		</form>
	);
};
