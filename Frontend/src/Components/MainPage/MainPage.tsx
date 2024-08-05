import Community from "./Community";
import ContactUs from "./ContactUs";
import Features from "./Features";
import Information from "./Information";
import Love from "./Love";
import Navigation from "./Navigation";

const MainPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <Information />
        <Features />
        <Love />
        <Community />
      </main>
      <ContactUs />
    </>
  );
};

export default MainPage;
