import { CSSProperties } from "react";

const ContactUs = () => {
  const flowSpace: CSSProperties = {
    "--flow-spacer": "1em",
  } as CSSProperties;
  return (
    <footer
      className="primary-footer padding-block-700 upper-border flow"
      style={flowSpace}
    >
      <h2 className="fs-secondary-heading fw-bold">Contact Us</h2>
      <button className="button long-button">Contact</button>
    </footer>
  );
};

export default ContactUs;
