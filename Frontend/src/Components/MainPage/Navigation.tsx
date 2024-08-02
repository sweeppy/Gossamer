import { useEffect } from "react";

const Navigation = () => {
  const handleNavBtnClick = () => {
    const navigation = document.querySelector(".primary-navigation");
    navigation?.hasAttribute("data-visible")
      ? navigation.setAttribute("aria-expanded", "false")
      : navigation?.setAttribute("aria-expanded", "true");
    navigation?.toggleAttribute("data-visible");
  };

  useEffect(() => {
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
            onClick={handleNavBtnClick}
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            <img
              className="icon-hamburger"
              src="/icons/hamburger.svg"
              alt="menu"
              aria-hidden="true"
            />
            <img
              className="icon-close"
              src="/icons/close.svg"
              alt="close"
              aria-hidden="true"
            />
            <span className="visually-hidden">Menu</span>
          </button>
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
