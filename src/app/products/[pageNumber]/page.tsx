import { getProductsList } from "@/api/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

const PRODUCTS_PER_PAGE = 20;
const TOTAL_PAGES = 15;

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const currentPage = Number(params.pageNumber);
	const products = await getProductsList({
		productsPerPage: PRODUCTS_PER_PAGE,
		productsOffset: PRODUCTS_PER_PAGE * (currentPage - 1),
	});

	return (
		<>
			<h1>Page: {params.pageNumber}</h1>
			<ProductList products={products} />
			<Pagination
				currentPage={currentPage}
				totalPages={TOTAL_PAGES}
				baseUrl="/products"
			/>
		</>
	);
}
