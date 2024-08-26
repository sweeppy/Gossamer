import { ChangeEvent, useState } from 'react';
import AlternativeLogin from './AlternativeLogin';
import { useNavigate } from 'react-router-dom';
import { isUserExistsRequestAsync } from '../../Scripts/Auth/IsUserExistsRequest';
import { isEmailValid } from '../../Scripts/Auth/ValidateEmail';
import { SendVerificationCodeRequestAsync } from '../../Scripts/Auth/SendVerificationCode';
import { isEmailConfirmStatusSuccess } from '../../Scripts/Auth/ConfirmEmailRequest';

const Login = () => {
	// Use navigation
	const navigate = useNavigate();

	// Email input
	const [emailText, setEmailText] = useState('');
	const handleEmailTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmailText(e.target.value);
		setShowInputError(false);
		if (showVerifyInput || showPasswordInput) {
			setShowVerifyInput(false);
			setShowPasswordInput(false);
			setVerificationCodeText('');
			setPasswordText('');
		}
	};

	// Verification input
	const [verificationCodeText, setVerificationCodeText] = useState('');
	const handleVerificationCodeTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		setVerificationCodeText(e.target.value);
	};

	// Password input
	const [passwordText, setPasswordText] = useState('');
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPasswordText(e.target.value);
	};

	// Show continue button
	const [showVerifyInput, setShowVerifyInput] = useState(false);
	const [showPasswordInput, setShowPasswordInput] = useState(false);

	const handleContinueClick = async () => {
		// incorrect email
		if (!isEmailValid(emailText)) {
			setShowInputError(true);
			return;
		}
		// user exist
		if (await isUserExistsRequestAsync(emailText)) {
			setShowPasswordInput(true);
			return;
		}
		//new user
		SendVerificationCodeRequestAsync(emailText);
		setShowVerifyInput(true);
	};

	// Verification
	const [isCodeWrong, setIsCodeWrong] = useState(false);
	const Verify = async () => {
		const success = await isEmailConfirmStatusSuccess(emailText, verificationCodeText);
		if (success) {
			navigate('/CreateAccount');
		} else {
			setIsCodeWrong(true);
		}
	};

	// Input error
	const [showInputError, setShowInputError] = useState(false);

	return (
		<>
			<header className="primary-header padding-block-300 fadeInTopSlide">
				<div className="container">
					<div className="nav-wrapper">
						<a href="/">
							<img src="./images/logo-mini.svg" alt="Gossamer" />
						</a>
					</div>
				</div>
			</header>
			<main className="rubik" style={{ overflow: 'auto', height: '100vh' }}>
				<div className="container auth-container">
					<h1 className="fs-xl fw-bold fadeInTopSlide padding-block-900 delay-200">Log in</h1>
					<AlternativeLogin className={'pushFromLeft delay-200'} />
					<div className="padding-block-700 pushFromRight delay-200" style={{ width: '100%' }}>
						<label className="label">Email</label>
						<div className="input-container">
							<input
								type="email"
								autoComplete="email"
								spellCheck="false"
								className="input"
								placeholder="Enter your email address..."
								value={emailText}
								onChange={handleEmailTextChange}
							/>
						</div>
						{showInputError && <p className="input-error fs-xxs pushFromLeft">Invalid email</p>}
					</div>
					<button
						data-auth
						className={`
						${emailText ? 'light' : 'disabled'}
						button deep-bottom fw-semi-bold
						${showVerifyInput || showPasswordInput ? 'display-none' : ''}`}
						style={{ width: '100%' }}
						onClick={handleContinueClick}
						disabled={!emailText}
					>
						Continue
					</button>
					<div className={`fadeInLeftSlide ${showVerifyInput ? '' : 'display-none'}`}>
						<p className="fs-xxs align padding-block-500" style={{ opacity: 0.4, textAlign: 'center' }}>
							Please showVerifyInput your email to continue. Check your inbox for a verification code and
							enter it below.
						</p>{' '}
						<label className="label">Verification code</label>
						<div className="input-container">
							<input
								type="text"
								spellCheck="false"
								className="input"
								placeholder="Paste verification code"
								value={verificationCodeText}
								onChange={handleVerificationCodeTextChange}
							/>
						</div>
						{isCodeWrong && <p className="input-error fs-xxs pushFromLeft">Wrong verification code</p>}
						<button
							onClick={Verify}
							data-auth
							className={`button padding-block-300 fw-semi-bold ${
								verificationCodeText ? 'light' : 'disabled'
							}`}
							disabled={!verificationCodeText}
							style={{ width: '100%', marginTop: '1rem' }}
						>
							Verify email
						</button>
					</div>
					<div
						style={{ width: '100%' }}
						className={`fadeInTopSlide ${showPasswordInput ? '' : 'display-none'}`}
					>
						<div className="padding-block-300" style={{ width: '100%' }}>
							<label className="label">Password</label>
							<div className="input-container">
								<input
									type="password"
									autoComplete="password"
									spellCheck="false"
									className="input"
									placeholder="Enter your password..."
									value={passwordText}
									onChange={handlePasswordChange}
								/>
							</div>
							<a className="link fs-xxs" href="">
								Forgot your password?
							</a>
						</div>
						<button
							data-auth
							className={`button fw-semi-bold ${passwordText ? 'light' : ''}`}
							style={{ width: '100%' }}
							onClick={handleContinueClick}
						>
							Continue with password
						</button>
					</div>
				</div>
			</main>
		</>
	);
};

export default Login;
