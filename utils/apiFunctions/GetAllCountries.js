import axios from 'axios';
import { HOST } from '../static';

export const fetchCountries = async (setCountry) => {
	try {
		const res = await axios.get(`${HOST}countires/all`);

		setCountry(res.data.response);
	} catch (error) {
		console.error('Error fetching countries:', error.message);
		return null;
	}
};
