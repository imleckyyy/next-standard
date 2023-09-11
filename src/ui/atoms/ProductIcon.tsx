export const ProductIcon = ({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) => {
	return (
		<div className="align-center relative mb-8 flex aspect-[4/3] justify-center">
			<img
				src={src}
				alt={alt}
				width={256}
				height={256}
				className="max-h-full object-contain"
			/>
		</div>
	);
};
