import { ImageResponse } from "next/server";
import { getProductById } from "@/api/products";

export const runtime = "edge";

export const contentType = "image/png";

export const size = {
	width: 1200,
	height: 630,
};

export async function generateImageMetadata({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return [
		{
			id: 0,
			size: { ...size },
			alt: product?.name,
			contentType,
		},
	];
}

export default async function OpenGraphImage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return new ImageResponse(
		(
			<div tw="flex flex-col p-4">
				<h1 tw="font-bold text-3xl mb-3">{product?.name}</h1>
				<p tw="mb-2 text-sm">
					Category: {product?.categories[0]?.name}
				</p>
				<p tw="mb-2">{product?.description}</p>
				<img width="256" height="256" src={product?.images[0]?.url} />
			</div>
		),
		{
			...size,
		},
	);
}
