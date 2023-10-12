"use client";

import { type Route } from "next";
import {
	usePathname,
	useRouter,
	useSearchParams,
} from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const SortingSelect = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams()!;

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	const [currentSort, setCurrentSort] = useState(
		searchParams.get("sort"),
	);

	useEffect(() => {
		if (currentSort) {
			const newPath =
				pathname + "?" + createQueryString("sort", currentSort);
			router.push(newPath as Route);
		}
	}, [currentSort, pathname, createQueryString, router]);

	return (
		<>
			<select
				onChange={(e) => setCurrentSort(e.target.value)}
				value={currentSort || ""}
				className="arrow-down-bg block w-48 cursor-pointer appearance-none rounded-md border-gray-300 px-2 py-1 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 lg:mt-1"
			>
				<option
					value="weightedRating_DESC"
					data-testid="sort-by-rating"
				>
					Rating (High to Low)
				</option>
				<option
					value="weightedRating_ASC"
					data-testid="sort-by-rating"
				>
					Rating (Low to High)
				</option>
				<option value="name_ASC">Name (A-Z)</option>
				<option value="name_DESC">Name (Z-A)</option>
				<option value="price_ASC" data-testid="sort-by-price">
					Price (Low to High)
				</option>
				<option value="price_DESC" data-testid="sort-by-price">
					Price (High to Low)
				</option>
			</select>
		</>
	);
};
