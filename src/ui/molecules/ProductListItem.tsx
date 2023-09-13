import Link from "next/link";
import { type ProductItemType } from "../types";
import { ProductIcon } from "@/ui/atoms/ProductIcon";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className="flex h-full flex-col rounded-md bg-white p-4">
					<ProductIcon {...product.iconImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
