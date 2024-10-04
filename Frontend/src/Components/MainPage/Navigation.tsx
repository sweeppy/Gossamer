import { useEffect } from 'react';
import SocialList from './SocialList';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
	const navigate = useNavigate();
	const hanleLoginClick = () => {
		navigate('/Login');
	};

	useEffect(() => {
		const primaryNav = document.querySelector('.primary-navigation');
		const navToggle = document.querySelector('.mobile-nav-toggle');

		const handleNavToggleClick = () => {
			if (primaryNav?.hasAttribute('data-visible')) {
				navToggle?.setAttribute('aria-expanded', 'false');
				document.body.classList.remove('no-scroll');
			} else {
				navToggle?.setAttribute('aria-expanded', 'true');
				document.body.classList.add('no-scroll');
			}
			primaryNav?.toggleAttribute('data-visible');
		};

		navToggle?.addEventListener('click', handleNavToggleClick);

		return () => {
			navToggle?.removeEventListener('click', handleNavToggleClick);
		};
	}, []);

	useEffect(() => {
		const header = document.querySelector('.primary-header');

		const handleScroll = () => {
			if (window.scrollY > 0) {
				header?.classList.remove('top');
			} else {
				header?.classList.add('top');
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<header className="primary-header padding-block-300 top">
			<div className="container">
				<div className="nav-wrapper">
					<a href="/">
						<img src="./images/logo-mini.svg" alt="Gossamer" />
					</a>
					<button
						className="mobile-nav-toggle"
						aria-controls="primary-navigation"
						aria-expanded="false"
					></button>
					<nav className="primary-navigation">
						<ul role="list" className="nav-list fadeInTopSlide" id="primary-navigation">
							<li>
								<a href="/Updates">Updates</a>
							</li>
							<li>
								<a href="#">Sponsors</a>
							</li>
							<li>
								<a href="#">Help Center</a>
							</li>
							<li>
								<a href="#">About</a>
							</li>
							<SocialList className="mobile-hidden" />
							<button
								onClick={hanleLoginClick}
								className="button primary-button long-button mobile-hidden"
							>
								Log in
							</button>
						</ul>
					</nav>
					<button
						onClick={hanleLoginClick}
						className="button primary-button long-button display-md-inline-flex | display-sm-none"
					>
						Log in
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navigation;
