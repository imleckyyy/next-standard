import { Navigation } from "../molecules/Navigation";
import { Logo } from "../atoms/Logo";

export const Header = () => {
	return (
		<header className="sticky top-0 z-10 border-b border-b-gray-100 bg-white">
			<div className="mx-auto flex w-full max-w-2xl items-center justify-between gap-4 px-4 py-4 lg:max-w-7xl">
				<Logo />
				<Navigation />
			</div>
		</header>
	);
};
