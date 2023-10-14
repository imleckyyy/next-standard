import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { SortingSelect } from "./SortingSelect";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import {
	getProductsList,
	getProductsListCount,
} from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";
import { type ProductOrderByInput } from "@/gql/graphql";

export const generateMetadata = async ({
	params,
}: {
	params: { pageNumber: string };
}): Promise<Metadata> => {
	return {
		title: `Products #${params.pageNumber} - Sklep internetowy`,
	};
};

const PRODUCTS_PER_PAGE = 6;

export async function generateStaticParams() {
	const productsCount = await getProductsListCount();
	const totalPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return Array.from({ length: totalPages }, (_, i) => ({
		pageNumber: String(i + 1),
	}));
}

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { sort: ProductOrderByInput };
}) {
	const currentPage = Number(params.pageNumber);
	const productsCount = await getProductsListCount();
	const totalPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	const products = await getProductsList({
		productsPerPage: PRODUCTS_PER_PAGE,
		productsOffset: (currentPage - 1) * PRODUCTS_PER_PAGE,
		orderBy: searchParams.sort || "averageRating_DESC",
	});

	if (!products) {
		return notFound();
	}

	return (
		<>
			<div className="flex items-center justify-between">
				<CategoryHeadline name={"Products"} page={currentPage} />
				<SortingSelect />
			</div>
			<ProductList
				products={products}
				wrapperClass="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
				sectionType="products-list"
			/>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				baseUrl={`/products`}
			/>
		</>
	);
}
