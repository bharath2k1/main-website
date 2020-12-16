import React from "react";
import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
import "./HomeStyle.css";
// import Homeimg from "../../../images/transparent-home.png";
import Homeimg from "../../../images/human-multitasking.png";

import WelcomeComponent from "../Welcome/WelcomeComponent";
import ServicesComponent from "../Services/ServicesComponent";
import FooterComponent from "../../Footer/FooterComponent";
// import ReviewComponent from "../CustomerReview/ReviewComponent";
import { useEffect } from "react";
import ProjectsComponent from "../Projects/ProjectsComponent";
import ContactIconsComponent from "../../Contact/ContactIcons/ContactIconsComponent";
import ContactComponent from "../../Contact/ContactComponent";
import NavbarComponent from "../../Navbar/NavbarComponent";
import ScrollArrow from "../ScrollToTop/SCrollToTopComponent";

function HomeComponent() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div>
      <div class="hero" id="home">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-6">
              <div class="hero-content">
                <div class="hero-text">
                  <p>HELLO</p>
                  <h1>WELCOME TO DZYRE TECH</h1>
                  <h2>
                    <Typical
                      steps={[
                        "Connecting Creativity with Technology for a Delightful Digital Experiences...",
                        2000,
                        "",
                        200,
                      ]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </h2>
                </div>

                <div class="hero-btn">
                  <a class="btn" href="/">
                    Hire Us
                  </a>
                  <a class="btn" href="/">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 d-none d-md-block">
              <div class="hero-image">
                <img src={Homeimg} alt="backimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <NavbarComponent /> */}
      <ScrollArrow />
      <div data-aos="fade-up">
        <WelcomeComponent />
      </div>

      <ServicesComponent />
      {/* <ReviewComponent /> */}
      <ProjectsComponent />
      <ContactIconsComponent />

      <FooterComponent />
    </div>
  );
}

export default HomeComponent;
