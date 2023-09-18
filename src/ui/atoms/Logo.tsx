import Link from "next/link";

export const Logo = () => {
	return (
		<Link
			href="/"
			className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="h-10 w-10 rounded-full bg-gray-900 p-2 text-white"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
				/>
			</svg>

			<span className="ml-3 text-xl">Standard</span>
		</Link>
	);
};
