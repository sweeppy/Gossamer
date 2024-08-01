import Community from "./Community";
import Features from "./Features";
import Information from "./Information";
import Love from "./Love";
import Navigation from "./Navigation";

const MainPage = () => {
  return (
    <body>
      <Navigation />
      <main>
        <Information />
        <Features />
        <Love />
        <Community />
      </main>
    </body>
  );
};

export default MainPage;
