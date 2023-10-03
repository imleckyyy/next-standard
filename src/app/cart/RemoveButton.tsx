"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "./actions";

export const RemoveButton = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<button
			className="text-red-600 disabled:text-gray-300"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItem(itemId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
