import { type ReactNode } from "react";

export const Headline = ({ children }: { children: ReactNode }) => {
	return <h2 className="mb-6 text-lg">{children}</h2>;
};
