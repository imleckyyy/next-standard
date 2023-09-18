import Link from "next/link";
import { ProductIcon } from "@/ui/atoms/ProductIcon";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className="flex h-full flex-col gap-6 rounded-md bg-white">
					{product.images[0] && (
						<ProductIcon
							src={product.images[0].url}
							alt={product.name}
						/>
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
