import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async ({
	headline,
	wrapperClass,
}: {
	headline: string;
	wrapperClass?: string;
}) => {
	const products = await getProductsList({
		productsPerPage: 4,
		productsOffset: 0,
	});
	await sleep(2000);
	return (
		<>
			<h2 className="text-lg">{headline || "Suggested products"}</h2>
			<ProductList
				products={products.slice(-4)}
				wrapperClass={wrapperClass}
			/>
		</>
	);
};
