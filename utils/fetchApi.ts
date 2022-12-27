import axios from "axios";

export const baseUrl = process.env.BASE_URL;

export const fetchApi = async (url: string) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Key": process.env.API_KEY,
			"X-RapidAPI-Host": process.env.API_HOST,
		},
	});

	return data;
};
