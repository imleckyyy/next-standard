import { RateStars } from "../molecules/RateStars";
import { type ProductListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { name, price, categories, averageRating },
}: ProductListItemDescriptionProps) => {
	return (
		<div>
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
			{categories[0] && (
				<div className="mt-1">
					<p className="text-xs text-gray-500">
						{categories[0].name}
					</p>
				</div>
			)}
			<div className="mt-2">
				<RateStars rate={averageRating || 0} />
			</div>
		</div>
	);
};
