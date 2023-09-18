import { notFound } from "next/navigation";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";

const PRODUCTS_PER_PAGE = 3;
const TOTAL_PAGES = 2;

export async function generateStaticParams() {
	return Array.from({ length: TOTAL_PAGES }, (_, i) => ({
		pageNumber: String(i + 1),
	}));
}

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const currentPage = Number(params.pageNumber);
	const products = await getProductsByCategorySlug({
		categorySlug: params.category,
		productsPerPage: PRODUCTS_PER_PAGE,
		productsOffset: (currentPage - 1) * PRODUCTS_PER_PAGE,
	});

	if (!products) {
		return notFound();
	}

	return (
		<>
			<CategoryHeadline
				name={`${params.category} category`}
				page={currentPage}
			/>
			<ProductList products={products} />
			<Pagination
				currentPage={currentPage}
				totalPages={TOTAL_PAGES}
				baseUrl={`/categories${
					params.category && `/${params.category}`
				}`}
			/>
		</>
	);
}
