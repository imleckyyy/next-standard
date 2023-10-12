import { notFound } from "next/navigation";
import { getCollectionsList } from "@/api/collections";
import { CategoryHeadline } from "@/ui/atoms/CategoryHeadline";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export default async function CollectionsPage() {
	const collections = await getCollectionsList({
		first: 3,
	});

	if (!collections) {
		notFound();
	}

	return (
		<>
			<CategoryHeadline name={`Collections`} />
			<ul className="mt-5 flex gap-4">
				{collections.map((collection) => (
					<ActiveLink
						key={collection.slug}
						href={`/collections/${collection.slug}`}
						className="mr-4 inline-block rounded-md border border-transparent bg-gray-100 px-8 py-3 text-center font-medium hover:bg-gray-200"
					>
						<img
							src={collection.image.url}
							width={collection.image.width}
							height={collection.image.height}
							className="mb-3 rounded-md"
						></img>
						{collection.name}
					</ActiveLink>
				))}
			</ul>
		</>
	);
}
