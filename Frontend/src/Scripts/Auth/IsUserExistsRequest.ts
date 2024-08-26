import axios from 'axios';

export const isUserExists = async (email: string) => {
	try {
		const response = await axios.post('http://localhost:5280/api/Auth/isUserExist', email, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return response.data;
	} catch (error: any) {
		console.error(error.response.data);
		return null;
	}
};
