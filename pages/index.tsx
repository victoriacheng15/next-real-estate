import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Property from "../components/Property";

import { baseUrl, fetchApi } from "../utils/fetchApi";

type Properties = {
	propertiesForSale: unknown;
	propertiesForRent: unknown;
};

export default function Home({
	propertiesForSale,
	propertiesForRent,
}: Properties) {

	return (
		<>
			<Box>
				<Banner
					purpose="For Sale"
					title1="Rental Homes for"
					title2="Everyone"
					desc1="Explore Apartments, villas, Homes"
					desc2="and more"
					buttonText="ExploreRenting"
					linkName="/search?purpose=for-rent"
					imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
				/>
				<Flex flexWrap="wrap">
				{/* @ts-ignore */}
					{propertiesForRent.map(property => <Property key={property.id} {...property} />)}
				</Flex>
				<Banner
					purpose='BUY A HOME'
					title1=' Find, Buy & Own Your'
					title2='Dream Home'
					desc1=' Explore from Apartments, land, builder floors,'
					desc2=' villas and more'
					buttonText='Explore Buying'
					linkName='/search?purpose=for-sale'
					imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
				/>
					<Flex flexWrap="wrap">
				{/* @ts-ignore */}
					{propertiesForSale.map(property => <Property key={property.id} {...property} />)}
				</Flex>
			</Box>
		</>
	);
}

export async function getStaticProps() {
	const typeUrl = (type: string) =>
		`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=${type}&hitsPerPage=6`;

	const propertyForSale = await fetchApi(typeUrl("for-sale"));
	const propertyForRent = await fetchApi(typeUrl("for-rent"));

	return {
		props: {
			propertiesForSale: propertyForSale?.hits,
			propertiesForRent: propertyForRent?.hits,
		},
	};
}
