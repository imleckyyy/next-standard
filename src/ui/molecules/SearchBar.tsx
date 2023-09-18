"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchBar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchQuery = searchParams.get("query");

	const [inputValue, setInputValue] = useState(searchQuery || "");
	const [debouncedInputValue, setDebouncedInputValue] =
		useState(inputValue);

	useEffect(() => {
		const delayInputTimeoutId = setTimeout(() => {
			setDebouncedInputValue(inputValue);
		}, 500);
		return () => clearTimeout(delayInputTimeoutId);
	}, [inputValue]);

	useEffect(() => {
		if (debouncedInputValue.trim() === "") return;
		if (debouncedInputValue.length < 3) return;
		router.push(`/search?query=${debouncedInputValue}`);
	}, [router, debouncedInputValue]);

	return (
		<div className="g-2 relative flex items-center rounded-md border p-1">
			<input
				type="text"
				placeholder="Search"
				className="rounded-md py-1 pl-10 pr-2"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<MagnifyingGlassIcon className="pointer-events-none absolute left-2 h-6 w-6 text-gray-500" />
		</div>
	);
};
