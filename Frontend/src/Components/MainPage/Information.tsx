import { CSSProperties } from "react";

const Information = () => {
  const flowSpace: CSSProperties = {
    "--flow-spacer": "1em",
  } as CSSProperties;
  return (
    <section className="padding-block-900">
      <div className="container ">
        <div className="even-columns vertical-align-center">
          <div className="flow align-text">
            <h1 data-main className="fs-primary-heading fw-bold">
              Your Gateway to the World of Friendship
            </h1>
            <p data-full>
              Discover new opportunities by finding like-minded individuals for
              your favorite activities. Whether you're looking for a jogging
              buddy, a book club, or a hiking group, Gossamer helps you connect
              with people who share your passions. Join our community and make
              meaningful connections through the activities you love!
            </p>
            <div className="horizontal-flow" style={flowSpace}>
              <button className="button primary-button">Get Started</button>
              <button className="button">Why Gossamer?</button>
              <button className="button">Contact Us</button>
            </div>
          </div>
          <div className="flex-end">
            <img src="/images/logo.svg" alt="Gossamer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
