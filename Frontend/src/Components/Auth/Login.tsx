import { ChangeEvent, useState } from 'react';
import AlternativeLogin from './AlternativeLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	// Use navigation
	const navigate = useNavigate();

	// Email input logic
	const [emailText, setEmailText] = useState('');
	const handleEmailTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmailText(e.target.value);
		if (verify || showPasswordInput) {
			setVerify(false);
			setShowPasswordInput(false);
			setVerificationCodeText('');
			setPasswordText('');
		}
	};

	// Check email in db
	const isEmailExists = (email: string) => {
		return false;
	};

	// Verification input logic
	const [verificationCodeText, setVerificationCodeText] = useState('');
	const handleVerificationCodeTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		setVerificationCodeText(e.target.value);
	};

	// Password logic
	const [passwordText, setPasswordText] = useState('');
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPasswordText(e.target.value);
	};

	//Continue logic
	const [verify, setVerify] = useState(false);
	const [showPasswordInput, setShowPasswordInput] = useState(false);

	const handleContinueClick = () => {
		if (isEmailExists(emailText)) {
			setShowPasswordInput(true);
		} else {
			setVerify(true);
		}
	};

	// Verification
	const Verify = () => {
		navigate('/CreateAccount');
	};

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
					</div>
					<button
						data-auth
						className={`
						${emailText ? 'light' : ''}
						button pushFromLeft delay-300 fw-semi-bold
						${verify || showPasswordInput ? 'display-none' : ''}`}
						style={{ width: '100%' }}
						onClick={handleContinueClick}
					>
						Continue
					</button>
					<div className={`fadeInLeftSlide ${verify ? '' : 'display-none'}`}>
						<p className="fs-xxs align padding-block-500" style={{ opacity: 0.4, textAlign: 'center' }}>
							Please verify your email to continue. Check your inbox for a verification code and enter it
							below.
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
						<button
							onClick={Verify}
							data-auth
							className={`button padding-block-300 fw-semi-bold ${verificationCodeText ? 'light' : ''}`}
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
