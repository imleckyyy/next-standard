import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getCartFromCookies } from "@/api/cart";

export const HeaderCart = async () => {
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems.length ?? 0;

	return (
		<div className="order-3 md:order-5">
			<Link href="/cart/sidebar" className="flex items-center">
				<ShoppingBagIcon className="mr-1 h-6 w-6" />
				<span className="text-sm">{quantity}</span>
			</Link>
		</div>
	);
};
