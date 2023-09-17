import { type ReactNode } from "react";

export default function ProductsPageLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="grid sm:grid-cols-12">
			<aside className="col-start-1 col-end-4 hidden sm:flex">
				Filters
			</aside>
			<div className="col-start-4 col-end-13 mx-auto max-w-5xl">
				{children}
			</div>
		</div>
	);
}
