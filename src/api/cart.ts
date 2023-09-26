import { cookies } from "next/headers";
import { executeGraphql } from "./graphqlApi";
import {
	CartGetByIdDocument,
	type CartFragment,
	CartAddProductDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const { createOrder: newCart } = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", newCart.id);
	return newCart;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const { order: cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			next: {
				tags: ["cart"],
			},
		});
		if (cart) {
			return cart;
		}
	}

	return null;
}

async function createCart() {
	return executeGraphql({
		query: CartCreateDocument,
		variables: {},
	});
}

export async function addProductToCart(
	orderId: string,
	productId: string,
) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			productId: productId,
		},
	});

	if (!product) {
		throw new Error("Product not found");
	}

	await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
			total: product.price,
		},
	});
}
