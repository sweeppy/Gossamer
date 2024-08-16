import { ChangeEvent, CSSProperties, useState } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const CreateAccount = () => {
	// Upload image
	const [croppedImage, setCroppedImage] = useState<string>('/icons/face.svg');
	const [cropper, setCropper] = useState<Cropper | null>(null);
	const [showCropper, setShowCropper] = useState(false);

	const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setCropper(null);
			const reader = new FileReader();
			reader.onload = () => {
				setCroppedImage(reader.result as string);
				setShowCropper(true);
			};
			reader.readAsDataURL(file);
		}
		e.target.value = '';
	};

	const handleCrop = () => {
		if (cropper) {
			const croppedCanvas = cropper.getCroppedCanvas({
				width: 300,
				height: 300,
			});
			const croppedImageBase64 = croppedCanvas.toDataURL('image/png');
			setCroppedImage(croppedImageBase64);
			setShowCropper(false);
		}
	};

	// Post request to save image
	/*axios
		.post('/api/profile/upload-image', {
			image: croppedImageBase64,
		})
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.error('Error uploading the image:', error);
		}); */

	// Username input change
	const [username, setUsername] = useState('');
	const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	// Name input change
	const [name, setName] = useState('');
	const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	// Surname input change
	const [surname, setSurname] = useState('');
	const handleChangeSurname = (e: ChangeEvent<HTMLInputElement>) => {
		setSurname(e.target.value);
	};

	// Patronymic imput change
	const [patronymic, setPatronymic] = useState('');
	const handleChangePatronymic = (e: ChangeEvent<HTMLInputElement>) => {
		setPatronymic(e.target.value);
	};

	// Password input change
	const [password, setPassword] = useState('');
	const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	// On click continue
	const readyToContinue = () => {
		if (username && name && surname && password) {
			return true;
		} else {
			return false;
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
					<h1 className="fs-primary-heading fw-semi-bold">Create a profile</h1>
					<h2 className="fw-regular">This is how you introduce yourself</h2>
				</div>
				<div className="avatar-upload upper-border padding-block-300">
					<div className="flex-center flow" style={flowSpace}>
						<label htmlFor="UploadImage">
							<img src={croppedImage} alt="Profile" className="img-change" />
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
					{showCropper && (
						<div className="flex-center flow">
							<Cropper
								src={croppedImage}
								style={{ height: 300, width: '100%' }}
								aspectRatio={1}
								viewMode={1}
								dragMode="move"
								guides={false}
								scalable={true}
								zoomable={true}
								background={false}
								rotatable={true}
								checkOrientation={false}
								onInitialized={(instance) => {
									setCropper(instance);
								}}
							/>
							<button onClick={handleCrop} className="button fw-semi-bold ">
								✓
							</button>
						</div>
					)}
				</div>
				<div className="even-columns full-width fadeInBottomSlide delay-500">
					<div data-input className="half-width">
						<div className="padding-block-200">
							<label className="label">Username</label>
							<div data-no-background className="input-container">
								<input
									className="input"
									type="text"
									placeholder="Enter your username..."
									value={username}
									onChange={handleChangeUsername}
								/>
							</div>
						</div>
						<div className="padding-block-200">
							<label className="label">Surname</label>
							<div data-no-background className="input-container">
								<input
									className="input"
									type="text"
									placeholder="Enter your surname..."
									value={surname}
									onChange={handleChangeSurname}
								/>
							</div>
						</div>
					</div>
					<div data-input className="half-width">
						<div className="padding-block-200">
							<label className="label">Name</label>
							<div data-no-background className="input-container">
								<input
									className="input"
									type="text"
									placeholder="Enter your name..."
									value={name}
									onChange={handleChangeName}
								/>
							</div>
						</div>
						<div className="padding-block-200">
							<label className="label">
								<abbr title="If you have">Patronymic *</abbr>
							</label>
							<div data-no-background className="input-container">
								<input
									className="input"
									type="text"
									placeholder="Enter your patronymic..."
									value={patronymic}
									onChange={handleChangePatronymic}
								/>
							</div>
						</div>
					</div>
				</div>
				<div data-input className="half-width padding-block-700 clever-push delay-500">
					<label className="label">Set your password</label>
					<div data-no-background className="input-container">
						<input
							type="password"
							className="input"
							placeholder="Enter your password..."
							value={password}
							onChange={handleChangePassword}
						/>
					</div>
				</div>
				<button
					data-auth
					className={`button fw-semi-bold long-button deep-bottom space-bottom half-width ${
						readyToContinue() ? 'light' : 'disabled'
					}`}
					disabled={!readyToContinue()}
					onClick={() => console.log('click')}
				>
					Continue
				</button>
			</div>
		</main>
	);
};

export default CreateAccount;
