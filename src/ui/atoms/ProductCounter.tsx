"use client";

import { useState } from "react";

export const ProductCounter = ({}: {}) => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex flex-row items-center justify-center">
			<button
				onClick={() => setCounter((counter) => counter - 1)}
				className="h-10 w-10 cursor-pointer rounded-l bg-gray-200 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700"
			>
				<span className="m-auto text-2xl font-thin">−</span>
			</button>
			<input
				type="text"
				className="text-md md:text-basecursor-default flex h-10 w-10 items-center bg-gray-200 text-center font-semibold text-gray-700  outline-none hover:text-black focus:text-black  focus:outline-none"
				value={counter}
			/>
			<button
				onClick={() => setCounter((counter) => counter + 1)}
				className="h-10 w-10 cursor-pointer rounded-r bg-gray-200 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
			>
				<span className="m-auto text-2xl font-thin">+</span>
			</button>
		</div>
	);
};
