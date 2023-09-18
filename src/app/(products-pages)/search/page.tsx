import { getProductsBySearchQuery } from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { query: string };
}) {
	const products = await getProductsBySearchQuery({
		searchQuery: searchParams.query,
	});

	return (
		<>
			<CategoryHeadline
				name={`Searching for: ${searchParams.query} (${products.length})`}
			/>

			{products.length ? (
				<ProductList products={products} />
			) : (
				<p>There are no products matching your search query.</p>
			)}
		</>
	);
}
