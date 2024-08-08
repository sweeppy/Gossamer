const Login = () => {
  return (
    <main>
      <div className="container auth-container">
        <h1 className="fs-xl ding fw-bold FadeInTopSlide padding-block-900">
          Log in
        </h1>
        <div className="group">
          <button data-google className="button long-button">
            Continue with Google
            <img src="" alt="" />
          </button>
          <button data-apple className="button long-button">
            Continue with Apple
            <img src="" alt="" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
