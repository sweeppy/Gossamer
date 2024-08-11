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
		<main>
			<div className="container flex-center">
				<div className="padding-block-300 rubik text-center flow" style={flowSpace}>
					<h1 className="fs-primary-heading fw-semi-bold ">Create a profile</h1>
					<h2 className="fw-regular">This is how you introduce yourself</h2>
				</div>
				<div className="avatar-upload upper-border padding-block-300">
					<div className="flex-center flow" style={flowSpace}>
						<label htmlFor="UploadImage" className="label">
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
				<div className="fill-container padding-block-300 "></div>
			</div>
		</main>
	);
};

export default CreateAccont;
