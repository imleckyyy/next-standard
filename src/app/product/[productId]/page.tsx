export default function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	return <div>Product {params.productId}</div>;
}
