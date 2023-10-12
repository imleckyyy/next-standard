export const formatPrice = (amount: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount / 100);
};

export const capitalizeString = (string: string) =>
	string.charAt(0).toUpperCase() + string.slice(1);
