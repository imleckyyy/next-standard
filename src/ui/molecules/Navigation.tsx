import { Bars3Icon } from "@heroicons/react/24/solid";
import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

const navigationItems = [
	{
		name: "Home",
		href: "/",
		exact: true,
	},
	{
		name: "All",
		href: "/products",
		exact: false,
	},
	{
		name: "T-Shirts",
		href: "/categories/t-shirts",
		exact: false,
	},
	{
		name: "Hoodies",
		href: "/categories/hoodies",
		exact: false,
	},
	{
		name: "Accessories",
		href: "/categories/accessories",
		exact: false,
	},
];

export const Navigation = () => {
	return (
		<nav className="order-4 text-center text-xs md:order-2 md:flex-1">
			<button type="button" className="p-2 md:hidden">
				<Bars3Icon className="h-6 w-6" />
			</button>
			<ul className="hidden space-x-4 md:flex">
				{navigationItems.map((item) => {
					return (
						<li key={item.name}>
							<ActiveLink
								href={item.href as Route}
								className="border-b-2 border-transparent text-sm text-gray-700 hover:border-gray-300 hover:text-gray-900"
								activeClassName="border-violet-300"
								exact={item.exact}
							>
								{item.name}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
