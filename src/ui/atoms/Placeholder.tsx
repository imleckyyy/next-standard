export const Placeholder = () => {
	return (
		<div role="status" className="mb-8 w-full animate-pulse">
			<div className="h-24 w-full rounded-lg bg-gray-200 dark:bg-gray-300"></div>
			<span className="sr-only">Loading...</span>
		</div>
	);
};
