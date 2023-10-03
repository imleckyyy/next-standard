import { NextResponse, type NextRequest } from "next/server";

export async function GET(_request: NextRequest): Promise<Response> {
	return NextResponse.json({ message: "Hello World s" });
}
