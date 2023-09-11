import Link from "next/link";
import { ProductCounter } from "@/ui/atoms/ProductCounter";

export default function Regulamin() {
	return (
		<div>
			<Link href="/polityka-prywatnosci">
				Przejdź do polityki prywatności
			</Link>
			<h1>Regulamin</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Magni, doloribus soluta totam aut laborum recusandae modi,
				repellendus deleniti in consequuntur dolorem aliquam
				accusantium nemo quam distinctio vero ea, ipsam ut?
			</p>

			<ProductCounter />
		</div>
	);
}
