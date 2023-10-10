"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "./actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] =
		useOptimistic(quantity);

	return (
		<form className="flex flex-row items-center justify-center">
			<button
				data-testid="decrement"
				formAction={async () => {
					const newQuantity =
						optimisticQuantity - 1 < 1 ? 1 : optimisticQuantity - 1;
					setOptimisticQuantity(newQuantity);
					await changeItemQuantity(itemId, newQuantity);
				}}
				className="h-10 w-10 cursor-pointer rounded-l bg-gray-200 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700"
			>
				<span className="m-auto text-2xl font-thin">-</span>
			</button>
			<span
				data-testid="quantity"
				className="text-md md:text-basecursor-default flex h-10 w-10 items-center bg-gray-200 text-center font-semibold text-gray-700  outline-none hover:text-black focus:text-black  focus:outline-none"
			>
				{optimisticQuantity}
			</span>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="h-10 w-10 cursor-pointer rounded-r bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
			>
				<span className="m-auto text-2xl font-thin">+</span>
			</button>
		</form>
	);
};
