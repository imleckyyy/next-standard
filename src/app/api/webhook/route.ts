import { revalidatePath } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();

	if (
		typeof body === "object" &&
		body &&
		"productId" in body &&
		typeof body.productId === "string"
	) {
		revalidatePath(`/product/${body.productId}`);
		return NextResponse.json({}, { status: 201 });
	}

	return NextResponse.json(
		{ message: "Invalid body" },
		{ status: 400 },
	);
}
