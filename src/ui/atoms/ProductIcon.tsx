export const ProductIcon = ({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) => {
	return (
		<div className="align-center relative flex aspect-[4/3] h-80 justify-center rounded-md bg-gray-100 p-6">
			<img
				src={src}
				alt={alt}
				width={256}
				height={256}
				className="max-h-full object-contain mix-blend-multiply"
			/>
		</div>
	);
};
