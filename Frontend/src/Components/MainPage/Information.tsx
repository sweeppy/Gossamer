const Information = () => {
  const marginRight = { marginRight: "1.5rem" };
  return (
    <section className="">
      <div className="container">
        <div className="even-columns vertical-align-center">
          <div className="flow">
            <h2 className="fs-primary-heading fw-bold">
              Your Gateway to the World of Books and Reviews
            </h2>
            <p>
              Dive into a world of stories with Gossamer. Share reviews, browse
              curated book lists, and find recommendations tailored to your
              taste. Whether you're a casual reader or a literary aficionado,
              Gossamer helps you explore the vast landscape of literature.
            </p>
            <button className="button primary-button" style={marginRight}>
              Get Started
            </button>
            <button className="button" style={marginRight}>
              Why Gossamer?
            </button>
            <button className="button">Contact Us</button>
          </div>
          <div>
            <img src="/images/logo.svg" alt="Gossamer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
