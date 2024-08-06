import { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    const primaryNav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    navToggle?.addEventListener("click", () => {
      console.log("click");

      primaryNav?.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", "false")
        : navToggle?.setAttribute("aria-expanded", "true");
      primaryNav?.toggleAttribute("data-visible");
    });

    const header = document.querySelector(".primary-header");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.remove("top");
      } else {
        header?.classList.add("top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="primary-header padding-block-300 top">
      <div className="container">
        <div className="nav-wrapper">
          <a href="#">
            <img src="./images/logo-mini.svg" alt="Gossamer" />
          </a>
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
          ></button>
          <nav className="primary-navigation">
            <ul role="list" className="nav-list" id="primary-navigation">
              <li>
                <a href="#">Information</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </nav>
          <button className="button primary-button long-button | display-sm-none display-md-inline-flex">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
