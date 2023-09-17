import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const products = await getProductsList({
		productsPerPage: 10,
		productsOffset: 10,
	});
	await sleep(2000);
	return (
		<>
			<h2 className="text-lg">Inni kupili również</h2>
			<ProductList products={products.slice(-4)} />
		</>
	);
};
