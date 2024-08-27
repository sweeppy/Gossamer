import axios from 'axios';

const ConfirmEmailRequestAsync = async (email: string, verificationCode: string) => {
	try {
		const response = await axios.post(
			'http://localhost:5280/api/Auth/verifyVcode',
			{
				email: email,
				data: verificationCode,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response;
	} catch (error: any) {
		console.log(error.response.data);
		return error.response;
	}
};

export const isEmailConfirmStatusSuccess = async (email: string, verificationCode: string) => {
	const response = await ConfirmEmailRequestAsync(email, verificationCode);
	if (response.status == 200) {
		console.log(response.data);
		localStorage.setItem('circle', response.data);
		return true;
	} else {
		return false;
	}
};
