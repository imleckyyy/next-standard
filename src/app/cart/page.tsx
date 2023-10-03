import { redirect } from "next/navigation";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { RemoveButton } from "./RemoveButton";
import { getCartFromCookies } from "@/api/cart";
import { formatPrice } from "@/utils";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th className="px-4">Quantity</th>
						<th>Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map(
						(item) =>
							item.product && (
								<tr key={item.id}>
									<td>{item.product.name}</td>
									<td className="px-4">
										<IncrementProductQuantity
											itemId={item.id}
											quantity={item.quantity}
										/>
									</td>
									<td>{formatPrice(item.product.price)}</td>
									<td>
										<RemoveButton itemId={item.id} />
									</td>
								</tr>
							),
					)}
				</tbody>
			</table>
		</div>
	);
}
