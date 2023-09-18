import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

const PRODUCTS_PER_PAGE = 3;
const TOTAL_PAGES = 2;

export default async function CollectionPage({
	params,
}: {
	params: { collectionName: string; pageNumber: string };
}) {
	const currentPage = Number(params.pageNumber);
	const products = await getProductsByCollectionSlug({
		collectionSlug: params.collectionName,
		productsPerPage: PRODUCTS_PER_PAGE,
		productsOffset: (currentPage - 1) * PRODUCTS_PER_PAGE,
	});

	if (!products) {
		return notFound();
	}
	return (
		<>
			<CategoryHeadline
				name={`${params.collectionName} collection`}
				page={currentPage}
			/>
			<ProductList products={products} />
			<Pagination
				currentPage={currentPage}
				totalPages={TOTAL_PAGES}
				baseUrl={`/collections${
					params.collectionName && `/${params.collectionName}`
				}`}
			/>
		</>
	);
}
