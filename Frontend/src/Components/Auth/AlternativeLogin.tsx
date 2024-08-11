interface Props {
	className?: string;
}
const AlternativeLogin = ({ className }: Props) => {
	return (
		<div className={`group ${className}`}>
			<button data-auth className="button long-button">
				<img src="/icons/auth/google.svg" alt="google" />
				<div>Continue with Google</div>
			</button>
			<button data-auth className="button long-button">
				<img src="/icons/auth/apple.svg" alt="" />
				<div>Continue with Apple</div>
			</button>
		</div>
	);
};

export default AlternativeLogin;
