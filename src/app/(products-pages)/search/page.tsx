import { type Metadata } from "next";
import { getProductsBySearchQuery } from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({
	searchParams,
}: {
	searchParams: { query: string };
}): Promise<Metadata> => {
	return {
		title: `Searching for ${searchParams.query} - Sklep internetowy`,
	};
};

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
				<ProductList
					products={products}
					wrapperClass="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
					sectionType="products-list"
				/>
			) : (
				<p>There are no products matching your search query.</p>
			)}
		</>
	);
}
