import AlternativeLogin from "./AlternativeLogin";

const Login = () => {
  return (
    <main className="rubik">
      <div className="container auth-container">
        <h1 className="fs-xl fw-bold FadeInTopSlide padding-block-900">
          Log in
        </h1>
        <AlternativeLogin />
        <div className="padding-block-900" style={{ width: "100%" }}>
          <label className="sub-header">Email</label>
          <div className="input-container">
            <input
              type="text"
              className="input"
              placeholder="Enter your email address..."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
