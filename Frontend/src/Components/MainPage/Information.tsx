import { CSSProperties } from 'react';

const Information = () => {
	const flowSpace: CSSProperties = {
		'--flow-spacer': '1em',
	} as CSSProperties;
	return (
		<section className="padding-block-900">
			<div className="container ">
				<div className="even-columns align-center">
					<div className="flow responsive-text-center">
						<h1
							data-main
							className="fs-primary-heading fw-bold FadeInLeftSlide delay-500"
							style={{ opacity: '0' }}
						>
							Your Gateway to the World of Friendship
						</h1>
						<p data-full>
							Discover new opportunities by finding like-minded individuals for your favorite activities.
							Whether you're looking for a jogging buddy, a book club, or a hiking group, Gossamer helps
							you connect with people who share your passions. Join our community and make meaningful
							connections through the activities you love!
						</p>
						<div className="horizontal-flow topSlide FadeInTopSlide delay-1500" style={flowSpace}>
							<button className="button primary-button">Get Started</button>
							<button className="button">Why Gossamer?</button>
							<button className="button">Contact Us</button>
						</div>
					</div>
					<div className="flex-end">
						<img
							className="fadeIn delay-1000"
							src="/images/logo.svg"
							alt="Gossamer"
							style={{ opacity: '0' }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Information;
