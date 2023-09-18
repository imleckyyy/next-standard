import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = ({
	products,
	wrapperClass,
}: {
	products: ProductListItemFragment[];
	wrapperClass?: string;
}) => {
	return (
		<ul
			data-testid="products-list"
			className={
				wrapperClass
					? wrapperClass
					: "mb-8 mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
			}
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
