import { Navigation } from "../molecules/Navigation";
import { Logo } from "../atoms/Logo";
import { SearchBar } from "../molecules/SearchBar";

export const Header = () => {
	return (
		<header className="sticky top-0 z-10 border-b border-b-gray-100 bg-white">
			<div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 md:flex-nowrap lg:max-w-7xl">
				<div className="md:mr-10">
					<Logo />
				</div>
				<Navigation />
				<SearchBar />
			</div>
		</header>
	);
};
