import { type ProductItemType } from "../types";
import { formatPrice } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductListItemDescription = ({
	product: { name, price, category },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="mt-4">
			<div className="flex flex-row justify-between">
				<h3 className="pr-4 text-sm text-gray-700 hover:text-gray-500">
					{name}
				</h3>
				<p
					className="text-sm font-medium text-gray-900"
					data-testid="product-price"
				>
					{formatPrice(price)}
				</p>
			</div>
			<div className="mt-1">
				<p className="text-xs text-gray-500">{category}</p>
			</div>
		</div>
	);
};
