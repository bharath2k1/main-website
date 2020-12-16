import React from "react";

import about from "../../../images/about.jpg";
import "./WelcomeStyle.css";

function WelcomeComponent() {
  return (
    <div>
      <div class="about wow fadeInUp" data-wow-delay="0.1s" id="about">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-img">
                <img src={about} alt="techImg" />
              </div>
            </div>
            <div class="col-lg-6">
              <div data-aos="fade-down" class="about-content">
                <div class="section-header text-left">
                  <p>Learn About Us</p>
                  <h2>
                    We empower your business presence on Digital Platform.
                  </h2>
                </div>
                <div class="about-text">
                  <p>
                    We are a full house digital branding & Development company
                    that builds high quality brands, websites and digital
                    brandings that will take your business to the next level.
                  </p>
                </div>
                {/* <div class="skills">
                                <div class="skill-name">
                                    <p>Web Design</p><p>85%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="skill-name">
                                    <p>Web Development</p><p>95%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="skill-name">
                                    <p>Apps Design</p><p>90%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="skill-name">
                                    <p>Apps Development</p><p>85%</p>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div> */}
                <a class="btn" href="/">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComponent;
