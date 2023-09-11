import { type ReactNode } from "react";

export default function StaticLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="mx-auto max-w-3xl bg-red-300 text-center">
			{children}
		</div>
	);
}
