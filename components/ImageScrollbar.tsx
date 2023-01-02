import { useContext } from "react";
import Image from "next/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import { DetailsProps } from "../types/property";

const LeftArrow = () => {
	const { scrollPrev } = useContext(VisibilityContext);

	return (
		<Flex justifyContent='center' alignItems='center' marginRight='1'>
			<Icon
				as={FaArrowAltCircleLeft}
				onClick={() => scrollPrev()}
				fontSize='2xl'
				cursor='pointer'
				// d={["none", "none", "none", "block"]}
			/>
		</Flex>
	);
};

const RightArrow = () => {
	const { scrollNext } = useContext(VisibilityContext);

	return (
		<Flex justifyContent='center' alignItems='center' marginLeft='1'>
			<Icon
				as={FaArrowAltCircleRight}
				onClick={() => scrollNext()}
				fontSize='2xl'
				cursor='pointer'
				// d={["none", "none", "none", "block"]}
			/>
		</Flex>
	);
};

type PhotoData = Pick<DetailsProps, "photos">;

export default function ImageSrollbar({ photos }: PhotoData) {
	return (
		<ScrollMenu
			LeftArrow={LeftArrow}
			RightArrow={RightArrow}
			// style={{ overflow: "hidden" }}
		>
			{photos.map((photo) => (
				<Box
					key={photo.id}
					itemID={photo.id}
					width='910px'
					overflow='hidden'
					p='1'
				>
					<Image
						alt="photos"
						placeholder="blur"
						blurDataURL={photo.url}
						src={photo.url}
						width={1000}
						height={500}
						sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
					/>
				</Box>
			))}
		</ScrollMenu>
	);
}
