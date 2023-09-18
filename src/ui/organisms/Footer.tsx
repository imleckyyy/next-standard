import Link from "next/link";
import { Logo } from "../atoms/Logo";

export const Footer = () => {
	return (
		<footer className="body-font relative isolate overflow-hidden bg-gray-50 text-gray-600">
			<div
				className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				aria-hidden="true"
			>
				<div
					className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
					}}
				/>
			</div>
			<div
				className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				aria-hidden="true"
			>
				<div
					className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
					style={{
						clipPath:
							"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
					}}
				/>
			</div>
			<div className="container mx-auto flex w-full max-w-2xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row lg:max-w-7xl">
				<Logo />
				<p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
					© 2023
				</p>
				<div className="mt-4 inline-flex justify-center gap-4 text-sm sm:ml-auto sm:mt-0 sm:justify-start">
					<Link href="/regulamin">Terms</Link>
					<Link href="/polityka-prywatnosci">Privacy Policy</Link>
				</div>
			</div>
		</footer>
	);
};
