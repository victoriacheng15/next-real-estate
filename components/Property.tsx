import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { PropertyProps } from "../types/properties";

import DefaultImage from "../assets/images/house.jpg";

const Property = ({
	coverPhoto,
	price,
	rentFrequency,
	rooms,
	title,
	baths,
	area,
	agency,
	isVerified,
	externalID,
}: PropertyProps) => {
	return (
		<Link href={`/property/${externalID}`} passHref>
			<Flex
				flexWrap="wrap"
				w="400px"
				paddingTop="0px"
				justifyContent="center"
				cursor="pointer"
			>
				<Box>
					<Image
						src={coverPhoto ? coverPhoto.url : DefaultImage}
						width={400}
						height={250}
						alt={title}
					/>
				</Box>
				<Box w="full">
					<Flex
						paddingTop="2"
						alignItems="center"
						justifyContent="space-between"
					>
						<Flex alignItems="center" gap="2">
							<Box color="green.400">{isVerified && <GoVerified />}</Box>
							<Text fontWeight="bold" fontSize="lg">
								AED {millify(price)}
								{rentFrequency && `/${rentFrequency}`}
							</Text>
							<Box>
								<Avatar size="sm" src={agency?.logo?.url} />
							</Box>
						</Flex>
					</Flex>
					<Flex
						alignItems="center"
						p="1"
						justifyContent="space-between"
						w="250px"
						color="blue.400"
					>
						{rooms}
						<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
					</Flex>
					<Text fontSize="lg">
						{title.length > 30 ? `${title.substring(0, 30)}...` : title}
					</Text>
				</Box>
			</Flex>
		</Link>
	);
};

export default Property;
