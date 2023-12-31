import { Navigation } from "../molecules/Navigation";
import { Logo } from "../atoms/Logo";
import { SearchBar } from "../molecules/SearchBar";
import { HeaderCart } from "../atoms/HeaderCart";
import { HeaderUser } from "../atoms/HeaderUser";

export const Header = () => {
	return (
		<header className="z-10 border-b border-b-gray-100 bg-white">
			<div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 md:flex-nowrap lg:max-w-7xl">
				<div className="flex flex-1 items-start md:mr-10 md:flex-initial">
					<Logo />
				</div>
				<Navigation />
				<SearchBar />
				<HeaderUser />
				<HeaderCart />
			</div>
		</header>
	);
};
