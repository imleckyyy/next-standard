import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CollectionPage({
	params,
}: {
	params: { collectionName: string; pageNumber: string };
}) {
	const products = await getProductsByCollectionSlug({
		collectionSlug: params.collectionName,
	});

	if (!products) {
		return notFound();
	}
	return (
		<>
			<CategoryHeadline
				name={`${params.collectionName} collection`}
			/>
			<ProductList products={products} />
		</>
	);
}
