"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { getCartFromCookies } from "@/api/cart";
import { executeGraphql } from "@/api/graphqlApi";
import {
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
} from "@/gql/graphql";

export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			itemId,
		},
	});
};

export const changeItemQuantity = (
	itemId: string,
	quantity: number,
) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
		cache: "no-store",
	});
};

export async function handlePaymentAction() {
	"use server";

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}

	const cart = await getCartFromCookies();

	if (!cart) {
		return;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			orderId: cart.id,
		},
		line_items: cart.orderItems.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product?.name || "",
				},
				unit_amount: item.product?.price || 0,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url:
			"http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel",
	});

	if (!checkoutSession.url) {
		throw new Error("Something went wrong");
	}

	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
