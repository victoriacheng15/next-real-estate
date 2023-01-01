import { useEffect, useState } from "react";
import {
	Flex,
	Select,
	Box,
	Text,
	Input,
	Spinner,
	Icon,
	Button,
	filter,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilter = () => {
	const [filters] = useState(filterData);
	// const [searchTerm, setSearchTerm] = useState("");
	// const [locationData, setLocationData] = useState();
	// const [showLocations, setShowLocations] = useState(false);
	// const [loading, setLoading] = useState(false);
	const router = useRouter();

	const searchProperties = (filterValues: Record<string, string>) => {
		const path = router.pathname;
		const { query } = router;
		const values = getFilterValues(filterValues);

		values.forEach((item) => {
			if (item.value && filterValues?.[item.name]) {
				query[item.name] = item.value;
			}
		});

		router.push({ pathname: path, query: query });
	};

	return (
		<Flex bg="gray.100" justifyContent="center" flexWrap="wrap">
			{filters?.map((filter) => (
				<Box key={filter.queryName}>
					<Select
						onChange={(e) =>
							searchProperties({ [filter.queryName]: e.target.value })
						}
						placeholder={filter.placeholder}
						w='fit-content'
						p='2'
					>
						{filter?.items?.map((item) => (
							<option value={item.value} key={item.value}>
								{item.name}
							</option>
						))}
					</Select>
				</Box>
			))}
		</Flex>
	);
};

export default SearchFilter;
