import { ProductList } from "./ProductList";
import { getProductsList } from "@/api/products";

export const SuggestedProducts = async ({
	headline,
	wrapperClass,
	sectionType,
}: {
	headline: string;
	wrapperClass?: string;
	sectionType?: string;
}) => {
	const products = await getProductsList({
		productsPerPage: 4,
		productsOffset: 0,
	});
	return (
		<section>
			<h2 className="text-lg">{headline || "Suggested products"}</h2>
			<ProductList
				products={products.slice(-4)}
				wrapperClass={wrapperClass}
				sectionType={sectionType}
			/>
		</section>
	);
};
