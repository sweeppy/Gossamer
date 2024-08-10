import { ChangeEvent, useState } from 'react';
import AlternativeLogin from './AlternativeLogin';

const Login = () => {
	// Email input logic
	const [emailText, setEmailText] = useState('');
	const handleEmailTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmailText(e.target.value);
		if (verify) {
			setVerify(false);
			setVerificationCodeText('');
		}
	};

	// Password logic
	const [passwordText, setPasswordText] = useState('');
	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPasswordText(e.target.value);
	};

	// Verification input logic
	const [verificationCodeText, setVerificationCodeText] = useState('');
	const handleVerificationCodeTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		setVerificationCodeText(e.target.value);
	};

	//Continue logic
	const [verify, setVerify] = useState(false);
	const handleContinueClick = () => {
		setVerify(true);
	};

	return (
		<>
			<header className="primary-header padding-block-300 FadeInTopSlide">
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
					<h1 className="fs-xl fw-bold FadeInTopSlide padding-block-900 delay-800">Log in</h1>
					<AlternativeLogin className={'pushFromLeft delay-800'} />
					<div className="padding-block-700 pushFromRight delay-900" style={{ width: '100%' }}>
						<label className="lable">Email</label>
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
              button pushFromLeft delay-500 fw-semi-bold
              ${verify ? 'display-none' : ''}`}
						style={{ width: '100%' }}
						onClick={handleContinueClick}
					>
						Continue
					</button>
					<div className={`FadeInLeftSlide ${verify ? '' : 'display-none'}`}>
						<p className="fs-xxs align padding-block-500" style={{ opacity: 0.4, textAlign: 'center' }}>
							Please verify your email to continue. Check your inbox for a verification code and enter it
							below.
						</p>{' '}
						<label className="lable">Verification code</label>
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
							data-auth
							className={`button padding-block-300 ${verificationCodeText ? 'light' : ''}
                 fw-semi-bold`}
							style={{ width: '100%', marginTop: '1rem' }}
						>
							Verify email
						</button>
					</div>
					<div className="padding-block-300 pushFromRight delay-900" style={{ width: '100%' }}>
						<label className="lable">Password</label>
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
						className={`
            ${passwordText ? 'light' : ''}
            ${verify ? 'display-none' : ''}
            button pushFromLeft delay-500 fw-semi-bold
            `}
						style={{ width: '100%' }}
						onClick={handleContinueClick}
					>
						Continue with password
					</button>
				</div>
			</main>
		</>
	);
};

export default Login;
