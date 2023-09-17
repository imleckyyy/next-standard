import { Suspense } from "react";
import { Placeholder } from "@/ui/atoms/Placeholder";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export default function Home() {
	return (
		<>
			<div className="relative overflow-hidden bg-white">
				<div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
					<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
						<div className="sm:max-w-lg">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Summer styles are finally here
							</h1>
							<p className="mt-4 text-xl text-gray-500">
								This year, our new summer collection will shelter you
								from the harsh elements of a world that doesnt care if
								you live or die.
							</p>
						</div>
						<div>
							<div className="mt-10">
								{/* Decorative image grid */}
								<div
									aria-hidden="true"
									className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
								>
									<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
										<div className="flex items-center space-x-6 lg:space-x-8">
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
											<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
												<div className="h-64 w-44 overflow-hidden rounded-lg">
													<img
														src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
														alt=""
														className="h-full w-full object-cover object-center"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								<a
									href="#"
									className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
								>
									Shop Collection
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
						Nasze marki
					</h2>
					<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
						<img
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
							alt="Transistor"
							width={158}
							height={48}
						/>
						<img
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
							alt="Reform"
							width={158}
							height={48}
						/>
						<img
							className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
							alt="Tuple"
							width={158}
							height={48}
						/>
						<img
							className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
							alt="SavvyCal"
							width={158}
							height={48}
						/>
						<img
							className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
							src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
							alt="Statamic"
							width={158}
							height={48}
						/>
					</div>
				</div>
			</div>

			<Suspense fallback={<Placeholder />}>
				<SuggestedProducts />
			</Suspense>
		</>
	);
}
