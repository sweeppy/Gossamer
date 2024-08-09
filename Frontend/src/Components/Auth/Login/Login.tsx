import { ChangeEvent, useState } from "react";
import AlternativeLogin from "./AlternativeLogin";

const Login = () => {
  const [emailText, setEmailText] = useState("");
  const [verificationCodeText, setVerificationCodeText] = useState("");

  const handleEmailTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailText(e.target.value);
  };

  const handleVerificationCodeTextChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationCodeText(e.target.value);
  };

  const [visivility, setVisibility] = useState(false);
  return (
    <>
      <header className="primary-header padding-block-300 FadeInTopSlide">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/">
              <img src="./images/logo-mini.svg" alt="Gossamer" />
            </a>
          </div>
        </div>
      </header>
      <main className="rubik" style={{ overflow: "auto", height: "100vh" }}>
        <div className="container auth-container">
          <h1 className="fs-xl fw-bold FadeInTopSlide padding-block-900 delay-800">
            Log in
          </h1>
          <AlternativeLogin className={"pushFromLeft delay-800"} />
          <div
            className="padding-block-700 pushFromRight delay-900"
            style={{ width: "100%" }}
          >
            <label className="lable">Email</label>
            <div className="input-container">
              <input
                type="email"
                spellCheck="false"
                className="input"
                placeholder="Enter your email address..."
                value={emailText}
                onChange={handleEmailTextChange}
              />
            </div>
          </div>
          <button
            data-auth
            className={`button ${
              emailText ? "light" : ""
            } pushFromLeft delay-1000`}
            style={{ width: "100%" }}
          >
            Continue
          </button>
          <div className="">
            <p
              className="fs-xxs align padding-block-500"
              style={{ opacity: 0.4, textAlign: "center" }}
            >
              Please verify your email to continue. Check your inbox for a
              verification code and enter it below.
            </p>{" "}
            <label className="lable">Verification code</label>
            <div className="input-container">
              <input
                type="text"
                spellCheck="false"
                className="input"
                placeholder="Paste verification code"
                value={verificationCodeText}
                onChange={handleVerificationCodeTextChange}
              />
            </div>
          </div>

          <button
            data-auth
            className={`button padding-block-300 ${
              verificationCodeText ? "light" : ""
            }`}
            style={{ width: "100%", marginTop: "1rem" }}
          >
            Verify email
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
