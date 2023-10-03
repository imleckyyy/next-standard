import { Overlay } from "./Overlay";
import { getCartFromCookies } from "@/api/cart";

export default async function ModalCart() {
	const cart = await getCartFromCookies();

	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-30 h-screen w-full max-w-sm bg-white">
				{cart ? (
					<ul>
						{cart.orderItems.map((item) => (
							<li key={item.id}>
								<img src={item.product?.images[0]?.url}></img>
								{item.product?.name} - {item.quantity}
							</li>
						))}
					</ul>
				) : (
					<div>Cart is empty</div>
				)}
			</div>
		</>
	);
}
