import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import {
	getProductsByCategorySlug,
	getProductsCountByCategorySlug,
} from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";
import { capitalizeString } from "@/utils";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}): Promise<Metadata> => {
	return {
		title: `${capitalizeString(params.category)} #${
			params.pageNumber
		} - Sklep internetowy`,
	};
};

const PRODUCTS_PER_PAGE = 3;

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const currentPage = Number(params.pageNumber);

	const productsCount = await getProductsCountByCategorySlug(
		params.category,
	);
	const totalPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

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
			<ProductList
				products={products}
				wrapperClass="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
				sectionType="products-list"
			/>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				baseUrl={`/categories${
					params.category && `/${params.category}`
				}`}
			/>
		</>
	);
}
