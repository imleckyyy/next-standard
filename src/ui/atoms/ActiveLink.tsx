"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	children,
	className,
	activeClassName,
	exact,
}: {
	href: Route<T>;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href.toString());

	return (
		<Link
			href={href}
			className={clsx(className, isActive && activeClassName)}
		>
			{children}
		</Link>
	);
};
