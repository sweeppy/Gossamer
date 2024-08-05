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
              Your Gateway to the World of Books and Reviews
            </h1>
            <p data-full>
              Dive into a world of stories with Gossamer. Share reviews, browse
              curated book lists, and find recommendations tailored to your
              taste. Whether you're a casual reader or a literary aficionado,
              Gossamer helps you explore the vast landscape of literature.
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
