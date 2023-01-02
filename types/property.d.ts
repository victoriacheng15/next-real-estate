import { Url, Agency } from "./properties";

export type DetailsProps = {
	price: number;
	rentFrequency: string;
	rooms: number;
	title: string;
	baths: number;
	area: number;
	agency: Agency;
	isVerified: boolean;
	description: string;
	type: string;
	purpose: string;
	furnishingStatus: string;
	amenities: {
		amenities: {
			text: string;
		}[];
	}[];
	photos: {
		id: string;
		url: string;
	}[];
};

export type PropertyDetails = {
	propertyDetails: DetailsProps;
};
