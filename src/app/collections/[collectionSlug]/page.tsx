import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getProductsByCollectionSlug } from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";
import { ProductList } from "@/ui/organisms/ProductList";
import { capitalizeString } from "@/utils";
import { getCollectionsListBySlug } from "@/api/collections";

export const generateMetadata = async ({
	params,
}: {
	params: { collectionSlug: string };
}): Promise<Metadata> => {
	const collection = await getCollectionsListBySlug({
		slug: params.collectionSlug,
	});

	return {
		title: `Collection ${capitalizeString(
			collection[0]?.name || "",
		)} - Sklep internetowy`,
	};
};

export default async function CollectionPage({
	params,
}: {
	params: { collectionSlug: string };
}) {
	const collection = await getCollectionsListBySlug({
		slug: params.collectionSlug,
	});

	const products = await getProductsByCollectionSlug({
		collectionSlug: params.collectionSlug,
	});

	if (!products) {
		return notFound();
	}
	return (
		<>
			<CategoryHeadline name={`${collection[0]?.name}`} />
			<ProductList products={products} sectionType="products-list" />
		</>
	);
}
