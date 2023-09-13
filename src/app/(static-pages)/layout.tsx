import { type ReactNode } from "react";

export default function StaticLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <div className="mx-auto max-w-5xl">{children}</div>;
}
