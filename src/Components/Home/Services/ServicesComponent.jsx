import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ServicesCardComponent from "./ServicesCard/ServicesCardComponent";
import "./ServicesStyle.css";

import webDesign from "../../../images/web-design.svg";
// import webDesign from "../../../images/data.png";
import appD from "../../../images/app.svg";
import digitalM from "../../../images/digital-marketing.svg";
import graphicsD from "../../../images/graphic-design.svg";

function ServicesComponent() {
  return (
    <div>
      <div class="service" id="service">
        <div class="container">
          <div
            data-aos="zoom-in"
            class="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>What We do</p>
            <h2>Awesome Quality Services</h2>
          </div>
          <div className="service-card flex-container ">
            <ServicesCardComponent
              name={"WEB DESIGN"}
              animations={"fade-right"}
              img={webDesign}
            />
            <ServicesCardComponent
              name={"APP DEVELOPMENT"}
              animations={"zoom-out"}
              img={appD}
            />
            <ServicesCardComponent
              name={"GRAPHICS & LOGO DESIGNING"}
              animations={"zoom-out"}
              img={graphicsD}
            />
            <ServicesCardComponent
              name={"DIGITAL MARKETING"}
              animations={"fade-left"}
              img={digitalM}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;

// background-image: url(../../../images/service_bg.jpg);
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-size: cover;
