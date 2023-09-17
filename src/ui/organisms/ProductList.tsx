import { type ProductItemType } from "../types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({
	products,
}: {
	products: ProductItemType[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
