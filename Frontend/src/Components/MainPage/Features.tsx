import { CSSProperties } from 'react';

const Features = () => {
	const flowSpace: CSSProperties = {
		'--flow-spacer': '1em',
	} as CSSProperties;
	return (
		<section className="padding-block-900 deep-bottom">
			<div className="container">
				<div className="features-container">
					<div className="item-box flow" style={flowSpace}>
						<div className="sm-img-container ">
							<img src="/icons/Features/search.svg" alt="" />
						</div>
						<h3 className="fs-small fw-bold">Activity Search</h3>
						<article className="fs-xs fw-regular">
							Find events and activities that match your interests and hobbies.
						</article>
					</div>
					<div className="item-box flow" style={flowSpace}>
						<div className="sm-img-container ">
							<img src="/icons/Features/group.svg" alt="" />
						</div>
						<h3 className=" fs-small fw-bold">Group Creation</h3>
						<article className="fs-xs fw-regular">
							Create or join interest-based groups to share experiences and meet new friends.
						</article>
					</div>
					<div className="item-box flow" style={flowSpace}>
						<div className="sm-img-container ">
							<img src="/icons/Features/calendar.svg" alt="" />
						</div>
						<h3 className="fs-small fw-bold">Event Calendar</h3>
						<article className="fs-xs fw-regular">
							A convenient calendar helps you keep track of exciting events and gatherings.
						</article>
					</div>
					<div className="item-box flow" style={flowSpace}>
						<div className="sm-img-container ">
							<img src="/icons/Features/star.svg" alt="" />
						</div>
						<h3 className=" fs-small fw-bold">Personalized Recommendations</h3>
						<article className="fs-xs fw-regular">
							Receive activity and people recommendations based on your preferences and activity history.
						</article>
					</div>
					<div className="item-box flow" style={flowSpace}>
						<div className="sm-img-container ">
							<img src="/icons/Features/infinity.svg" alt="infinity" />
						</div>
						<h3 className=" fs-small fw-bold">Real-Time Chat</h3>
						<article className="fs-xs fw-regular">
							Communicate instantly with group members and event participants through our chat.
						</article>
					</div>
					<div className="item-box flow" style={flowSpace}>
						<div className="sm-img-container ">
							<img src="/icons/Features/review.svg" alt="" />
						</div>
						<h3 className=" fs-small fw-bold">Activity Reviews</h3>
						<article className="fs-xs fw-regular">
							Read and write reviews for activities and events to help others find the best experiences.
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
