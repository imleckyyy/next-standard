import Link from "next/link";
import { Navigation } from "../molecules/Navigation";

export const Header = () => {
	return (
		<header>
			<div className="mx-auto flex w-full max-w-2xl items-center justify-between gap-4 px-4 py-4 lg:max-w-7xl">
				<div>
					<Link href="/">Logo</Link>
				</div>
				<Navigation />
			</div>
		</header>
	);
};
