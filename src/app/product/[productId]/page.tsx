import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import { getProductById } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { formatPrice } from "@/utils";
import { Placeholder } from "@/ui/atoms/Placeholder";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	if (!product) {
		notFound();
	}

	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Sklep internetowy`,
			description: product.description,
			images: product.images[0] && [
				{
					url: product.images[0].url,
					alt: product.name,
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

	if (!product) {
		notFound();
	}

	return (
		<>
			<div className="grid w-full grid-cols-12 gap-8">
				{product.images[0] && (
					<div className="col-span-7 col-start-1 row-span-3 row-start-1">
						<div className="relative flex h-96 items-center justify-center rounded-md bg-gray-100 p-10">
							<NextImage
								className="max-h-full object-contain mix-blend-multiply"
								src={product.images[0].url}
								alt={product.name}
								width={product.images[0].width || 0}
								height={product.images[0].height || 0}
							/>
						</div>
					</div>
				)}
				<div className="col-span-5 col-start-8">
					<h1 className="text-3xl">{product.name}</h1>
					{product.categories[0] && (
						<div className="mt-1">
							<p className="text-xs text-gray-500">
								{product.categories[0].name}
							</p>
						</div>
					)}
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
				<SuggestedProducts headline="You may also like..." />
			</Suspense>
		</>
	);
}
