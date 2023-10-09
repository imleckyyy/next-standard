import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

const MAX_RATE = 5;

export const RateStars = ({ rate }: { rate: number }) => {
	return (
		<div className="flex items-center">
			{Array.from({ length: MAX_RATE }, (_, index) => {
				if (index < rate) {
					return (
						<StarIconSolid
							key={index}
							className="h-5 w-5 text-yellow-400"
						/>
					);
				}

				return (
					<StarIcon key={index} className="h-5 w-5 text-gray-300" />
				);
			})}
			<span className="ml-2 text-xs font-semibold">
				{rate}/{MAX_RATE}
			</span>
		</div>
	);
};
