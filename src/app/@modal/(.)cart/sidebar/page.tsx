import Link from "next/link";
import { Overlay } from "./Overlay";
import { formatPrice } from "@/utils";
import { getCartFromCookies } from "@/api/cart";

export default async function ModalCart() {
	const cart = await getCartFromCookies();

	if (!cart) return null;

	const totalWorth = cart.orderItems.reduce((acc, item) => {
		if (!item.product) return acc;
		return acc + item.product.price * item.quantity;
	}, 0);

	return (
		<>
			<Overlay />
			<div className="fixed right-0 top-0 z-30 flex h-screen w-full max-w-sm flex-col bg-white p-8">
				<div className="flex justify-between">
					<h2 className="mb-4 text-lg font-medium text-gray-900">
						Shopping cart
					</h2>
					<Link href="/cart">View full cart</Link>
				</div>

				{cart ? (
					<ul
						role="list"
						className="-my-6 flex-1 divide-y divide-gray-200"
					>
						{cart.orderItems.map((item) => {
							if (!item.product) return null;
							return (
								<li key={item.product.id} className="flex py-6">
									<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
										<img
											src={item.product.images[0]?.url}
											alt={item.product.id}
											className="h-full w-full object-cover object-center"
										/>
									</div>

									<div className="ml-4 flex flex-1 flex-col">
										<div>
											<div className="flex justify-between text-base font-medium text-gray-900">
												<h3>
													<a href={`/product/${item.product.id}`}>
														{item.product.name}
													</a>
												</h3>
												<p className="ml-4">
													{formatPrice(item.product.price)}
												</p>
											</div>
										</div>
										<div className="flex flex-1 items-end justify-between text-sm">
											<p className="text-gray-500">
												Qty {item.quantity}
											</p>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				) : (
					<div className="flex-1">Cart is empty</div>
				)}

				<div className="flex justify-between">
					<span>Total:</span>{" "}
					<span className="font-bold">{formatPrice(totalWorth)}</span>
				</div>
			</div>
		</>
	);
}
