import axios from 'axios';

export const SendVerificationCodeRequestAsync = async (email: string) => {
	try {
		const response = await axios.post('http://localhost:5280/api/Auth/sendVCode', email, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log(response.data);
	} catch (error: any) {
		console.error(error.response.data);
	}
};
