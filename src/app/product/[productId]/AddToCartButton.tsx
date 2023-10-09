"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			data-testid="add-to-cart-button"
			className="rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-900 disabled:cursor-wait disabled:bg-gray-200"
		>
			Add to cart
		</button>
	);
};
