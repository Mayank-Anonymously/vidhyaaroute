import axios from 'axios';
import { HOST } from '../static';

export const fetchService = async (setService) => {
	try {
		const res = await axios.get(`${HOST}services/all`);

		setService(res.data.response);
	} catch (error) {
		console.error('Error fetching countries:', error.message);
		return null;
	}
};
