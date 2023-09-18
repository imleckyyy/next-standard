import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const HeaderCart = () => {
	return (
		<div className="order-3 md:order-5">
			<Link href="/cart">
				<ShoppingBagIcon className="h-6 w-6" />
			</Link>
		</div>
	);
};
