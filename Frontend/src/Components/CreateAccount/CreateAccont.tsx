import { ChangeEvent, CSSProperties, useState } from 'react';

const CreateAccont = () => {
	// Upload image logic
	const [imagePath, setImagePath] = useState<string>('/icons/face.svg');

	const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setImagePath(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	// css style
	const flowSpace: CSSProperties = {
		'--flow-spacer': '0.2rem',
	} as CSSProperties;

	return (
		<main className="full-height">
			<div className="auth-container container md-width auto-overflow">
				<div className="padding-block-300 rubik text-center flow scaleIn" style={flowSpace}>
					<h1 className="fs-primary-heading fw-semi-bold ">Create a profile</h1>
					<h2 className="fw-regular">This is how you introduce yourself</h2>
				</div>
				<div className="avatar-upload upper-border padding-block-300">
					<div className="flex-center flow" style={flowSpace}>
						<label htmlFor="UploadImage">
							<img src={imagePath} alt="Profile" className="img-change" />
						</label>
						<label className="label">Upload image</label>
						<input
							type="file"
							id="UploadImage"
							className="display-none"
							accept="image/*"
							onChange={handleUploadImage}
						/>
					</div>
				</div>
				<div className="even-columns full-width fadeInBottomSlide delay-500">
					<div data-input className="half-width">
						<div className="padding-block-200">
							<label className="label">Username</label>
							<div data-no-background className="input-container">
								<input className="input" type="text" placeholder="Enter your username..." />
							</div>
						</div>
						<div className="padding-block-200">
							<label className="label">Surname</label>
							<div data-no-background className="input-container">
								<input className="input" type="text" placeholder="Enter your surname..." />
							</div>
						</div>
					</div>
					<div data-input className="half-width">
						<div className="padding-block-200">
							<label className="label">Name</label>
							<div data-no-background className="input-container">
								<input className="input" type="text" placeholder="Enter your name..." />
							</div>
						</div>
						<div className="padding-block-200">
							<label className="label">
								<abbr title="If you have">Patronymic *</abbr>
							</label>
							<div data-no-background className="input-container">
								<input className="input" type="text" placeholder="Enter your patronymic..." />
							</div>
						</div>
					</div>
				</div>
				<div data-input className="half-width padding-block-700 clever-push delay-500">
					<label className="label">Set your password</label>
					<div data-no-background className="input-container">
						<input type="password" className="input" placeholder="Enter your password..." />
					</div>
				</div>
				<button data-auth className="button fw-semi-bold long-button deep-bottom space-bottom half-width">
					Continue
				</button>
			</div>
		</main>
	);
};

export default CreateAccont;
