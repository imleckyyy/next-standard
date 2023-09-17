import { Bars3Icon } from "@heroicons/react/24/solid";
import { ActiveLink } from "../atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="text-center text-xs">
			<button type="button" className="p-2 sm:hidden">
				<Bars3Icon className="h-6 w-6" />
			</button>
			<ul className="hidden justify-center space-x-4 sm:flex">
				<li>
					<ActiveLink
						href="/"
						className="text-sm text-gray-700 hover:text-gray-900"
						activeClassName="underline"
						exact
					>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						href="/products"
						className="text-sm text-gray-700 hover:text-gray-900"
						activeClassName="underline"
					>
						All
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						href="/regulamin"
						className="text-sm text-gray-700 hover:text-gray-900"
						activeClassName="underline"
						exact
					>
						Regulamin
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
