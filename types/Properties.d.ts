type Url = { url: string };

type Agency = { logo: Url };

export type PropertyProps = {
	id: number;
	coverPhoto: Url;
	price: number;
	rentFrequency: string;
	rooms: number;
	title: string;
	baths: number;
	area: number;
	agency: Agency;
	isVerified: boolean;
	externalID: number;
};

export type Properties = {
	propertiesForSale: PropertyProps[];
	propertiesForRent: PropertyProps[];
};
