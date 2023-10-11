import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const HeaderUser = () => {
	return (
		<div className="order-2 md:order-4">
			<SignedIn>
				<UserButton
					userProfileMode="navigation"
					afterSignOutUrl="/"
				/>
			</SignedIn>
			<SignedOut>
				<Link href="/sign-in">
					<UserIcon className="h-6 w-6" />
				</Link>
			</SignedOut>
		</div>
	);
};
