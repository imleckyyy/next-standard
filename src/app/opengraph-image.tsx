import { ImageResponse } from "next/server";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
	width: 159,
	height: 62,
};
export const alt = "Open Graph Image";

export default function OpenGraphImage({}) {
	return new ImageResponse(<div>STANDARD</div>);
}
