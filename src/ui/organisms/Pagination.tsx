import { type Route } from "next";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({
	currentPage,
	totalPages,
	baseUrl,
}: {
	currentPage: number;
	totalPages: number;
	baseUrl: string;
}) => {
	return (
		<nav className="flex items-center justify-center py-6">
			<ul className="flex flex-wrap md:-mt-px">
				{currentPage > 1 && (
					<li>
						<ActiveLink
							href={`${baseUrl}/${currentPage - 1}` as Route<string>}
							className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
							activeClassName="border-indigo-500 bg-indigo-50 text-indigo-600"
							exact
						>
							<ArrowLeftIcon className="h-5 w-5" />
						</ActiveLink>
					</li>
				)}
				{Array.from({ length: totalPages }, (_, i) => (
					<li key={i}>
						<ActiveLink
							href={`${baseUrl}/${i + 1}` as Route<string>}
							className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
							activeClassName="border-indigo-500 bg-indigo-50 text-indigo-600"
							exact
						>
							{i + 1}
						</ActiveLink>
					</li>
				))}
				{currentPage !== totalPages && (
					<li>
						<ActiveLink
							href={`${baseUrl}/${currentPage + 1}` as Route<string>}
							className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
							activeClassName="border-indigo-500 bg-indigo-50 text-indigo-600"
							exact
						>
							<ArrowRightIcon className="h-5 w-5" />
						</ActiveLink>
					</li>
				)}
			</ul>
		</nav>
	);
};
