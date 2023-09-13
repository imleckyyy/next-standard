import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products
		.map((product) => ({ productId: product.id }))
		.slice(0, 4);
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: product.description,
			images: [
				{
					url: product.iconImage.src,
					alt: product.iconImage.alt,
				},
			],
		},
	};
};

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);
	return (
		<>
			<div>Product {product.name}</div>
			<Suspense fallback={"Ładowanie..."}>
				<SuggestedProducts />
			</Suspense>
		</>
	);
}
