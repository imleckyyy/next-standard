import { type ReactNode } from "react";

export default function StaticLayout({
	children,
}: {
	children: ReactNode;
}) {
	return <div>{children}</div>;
}
