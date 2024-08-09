import AlternativeLogin from "./AlternativeLogin";

const Login = () => {
  return (
    <main>
      <div className="container auth-container">
        <h1 className="fs-xl ding fw-bold FadeInTopSlide padding-block-900">
          Log in
        </h1>
        <AlternativeLogin />
      </div>
    </main>
  );
};

export default Login;
