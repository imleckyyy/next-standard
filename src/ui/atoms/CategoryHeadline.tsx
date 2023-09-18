export const CategoryHeadline = ({
	name,
	page,
}: {
	name: string;
	page?: number;
}) => {
	return (
		<h1 className="flex flex-col">
			<span className="text-2xl font-semibold first-letter:uppercase">
				{name}
			</span>
			{page && (
				<span className="text-xs text-gray-400">Page: {page}</span>
			)}
		</h1>
	);
};
