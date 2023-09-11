import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Ginseng Revive Serum",
		price: 99.99,
		category: "Serum",
		iconImage: {
			src: "/product_1.webp",
			alt: "Ginseng Revive Serum",
		},
	},
	{
		id: "2",
		name: "Dynasty Cream",
		price: 119.0,
		category: "Cream",
		iconImage: {
			src: "/product_2.webp",
			alt: "Dynasty Cream",
		},
	},
	{
		id: "3",
		name: "Green Plum Toner",
		price: 81.0,
		category: "Toner",
		iconImage: {
			src: "/product_3.webp",
			alt: "Green Plum Toner",
		},
	},
	{
		id: "4",
		name: "Calming Serum Green Tea",
		price: 99.0,
		category: "Serum",
		iconImage: {
			src: "/product_4.webp",
			alt: "Calming Serum Green Tea",
		},
	},
];

export default function ProductsPage() {
	return <ProductList products={products} />;
}
