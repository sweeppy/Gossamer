import { CSSProperties } from "react";

const Love = () => {
  const flowSpacerStyle: CSSProperties = {
    "--flow-spacer": "1em",
  } as CSSProperties & { "--flow-spacer": string };

  return (
    <section>
      <div className="container">
        <div className="love-container flow" style={flowSpacerStyle}>
          <img src="/icons/heart.svg" alt="heart" />
          <h2 className="fs-secondary-heading fw-bold">Our Customers</h2>
          <p>
            Gossamer thrives as a free and open-source platform, thanks to the
            support of our dedicated community.
          </p>
          <button className="button dark neon">Support</button>
        </div>
      </div>
    </section>
  );
};

export default Love;
