import { cookies } from "next/headers";
import { executeGraphql } from "./graphqlApi";
import {
	CartGetByIdDocument,
	type CartFragment,
	CartAddProductDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartSetProductQuantityDocument,
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
			cache: "no-store",
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
		cache: "no-store",
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
		cache: "no-store",
	});

	if (!product) {
		throw new Error("Product not found");
	}

	const cart = await getCartFromCookies();

	if (cart) {
		const productInCart = cart.orderItems.find(
			(item) => item.product?.id === productId,
		);
		if (productInCart) {
			const { id, quantity } = productInCart;

			await executeGraphql({
				query: CartSetProductQuantityDocument,
				variables: {
					itemId: id,
					quantity: quantity + 1,
				},
			});

			return false;
		}
	}

	await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
			total: product.price,
		},
		cache: "no-store",
	});
}
