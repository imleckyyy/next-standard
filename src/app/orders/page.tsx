import { currentUser } from "@clerk/nextjs";
import { getOrdersByEmail } from "@/api/orders";

export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;

	if (!email) {
		return <div>Please sign in to view your orders.</div>;
	}

	const orders = await getOrdersByEmail(email);

	return (
		<div>
			<h1>Orders Page</h1>
			<ul>
				{orders.map((order) => (
					<li key={order.id}>{order.id}</li>
				))}
			</ul>
		</div>
	);
}
