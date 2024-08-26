import axios from 'axios';

const ConfirmEmailRequestAsync = async (email: string, verificationCode: string) => {
	try {
		const response = await axios.post(
			'http://localhost:5280/api/Auth/verifyVcode',
			{
				email: email,
				verificationCode: verificationCode,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return response.status;
	} catch (error: any) {
		console.log(error.response.data);
		return error.response.status;
	}
};

export const isEmailConfirmStatusSuccess = async (email: string, verificationCode: string) => {
	const status = await ConfirmEmailRequestAsync(email, verificationCode);
	if (status == 200) {
		return true;
	} else {
		return false;
	}
};
