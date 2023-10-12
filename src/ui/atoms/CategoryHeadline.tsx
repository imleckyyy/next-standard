import { capitalizeString } from "@/utils";

export const CategoryHeadline = ({
	name,
	page,
}: {
	name: string;
	page?: number;
}) => {
	return (
		<div className="flex flex-col">
			<h1>
				<span className="text-2xl font-semibold first-letter:uppercase">
					{capitalizeString(name)}
				</span>
			</h1>
			{page && (
				<span className="text-xs text-gray-400">Page: {page}</span>
			)}
		</div>
	);
};
