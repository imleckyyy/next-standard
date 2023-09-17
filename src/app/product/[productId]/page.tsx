import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { formatPrice } from "@/utils";
import { Placeholder } from "@/ui/atoms/Placeholder";

export const generateStaticParams = async () => {
	const products = await getProductsList({
		productsPerPage: 10,
		productsOffset: 0,
	});
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
			<div className="grid w-full grid-cols-12 gap-8">
				<div className="col-span-7 col-start-1 row-span-3 row-start-1">
					<div className="relative flex h-96 items-center justify-center rounded-md bg-gray-100 p-10">
						<img
							className="max-h-full object-contain mix-blend-multiply"
							src={product.iconImage.src}
							alt={product.iconImage.alt}
						/>
					</div>
				</div>
				<div className="col-span-5 col-start-8">
					<h1 className="text-3xl">{product.name}</h1>
					<div className="mt-1">
						<p className="text-xs text-gray-500">
							{product.category}
						</p>
					</div>
					<div className="pt-6 text-xl">
						Cena: {formatPrice(product.price)}
					</div>
					<div className="pt-6">
						<button
							type="button"
							className="rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-900"
						>
							Dodaj do koszyka
						</button>
					</div>
				</div>
			</div>
			<div className="mb-12 py-6">{product.description}</div>
			<Suspense fallback={<Placeholder />}>
				<SuggestedProducts />
			</Suspense>
		</>
	);
}
