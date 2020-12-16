import React, { useState } from "react";
import logo from "../../images/brand-logo.png";
import "./NavbarStyle.css";

function NavbarComponent() {
  const [Navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      data-spy="scroll"
      // data-target=".navbar"
      data-offset="51"
      className={
        Navbar
          ? `navbar nav-sticky navbar-expand-lg bg-light navbar-light`
          : `navbar navbar-expand-lg bg-light navbar-light`
      }
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <span className="logo">
            <img src={logo} alt="brand-logo" />
            ZYRE
          </span>
        </a>

        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div className="navbar-nav ml-auto">
            <a href="#home" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About
            </a>
            <a href="#service" className="nav-item nav-link">
              Service
            </a>
            {/* <a href="#experience" className="nav-item nav-link">
              Experience
            </a>
            <a href="#portfolio" className="nav-item nav-link">
              Portfolio
            </a>
            <a href="#price" className="nav-item nav-link">
              Price
            </a>
            <a href="#review" className="nav-item nav-link">
              Review
            </a>
            <a href="#team" className="nav-item nav-link">
              Team
            </a>
            <a href="#blog" className="nav-item nav-link">
              Blog
            </a> */}
            <a href="#contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
