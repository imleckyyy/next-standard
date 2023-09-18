import { UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const HeaderUser = () => {
	return (
		<div className="order-2 md:order-4">
			<Link href="/user">
				<UserIcon className="h-6 w-6" />
			</Link>
		</div>
	);
};
