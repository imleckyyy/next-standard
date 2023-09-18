import { notFound } from "next/navigation";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";

const PRODUCTS_PER_PAGE = 3;
const TOTAL_PAGES = 2;

export async function generateStaticParams() {
	return Array.from({ length: TOTAL_PAGES }, (_, i) => ({
		pageNumber: String(i + 1),
	}));
}

export default async function ProductsPage({
	params,
}: {
	params: { pageNumber: string };
}) {
	const currentPage = Number(params.pageNumber);
	const products = await getProductsList({
		productsPerPage: PRODUCTS_PER_PAGE,
		productsOffset: (currentPage - 1) * PRODUCTS_PER_PAGE,
	});

	if (!products) {
		return notFound();
	}

	return (
		<>
			<CategoryHeadline name={"Products"} page={currentPage} />
			<ProductList
				products={products}
				wrapperClass="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
			/>
			<Pagination
				currentPage={currentPage}
				totalPages={TOTAL_PAGES}
				baseUrl={`/products`}
			/>
		</>
	);
}
