export default function BlogPage({
	params: { date, slug },
}: {
	params: { date: string; slug: string };
}) {
	return (
		<div>
			Blog {date} / {slug}
		</div>
	);
}
