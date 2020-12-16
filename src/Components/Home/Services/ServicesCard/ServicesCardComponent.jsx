import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

import "./ServiceCardStyle.css";

function ServicesCardComponent({ animations, name, img }) {
  return (
    <div className="card" data-aos={animations}>
      <Flippy
        className="card-flex"
        flipOnHover={true} // default false
        flipOnClick={false} // default false
        flipDirection="horizontal" // horizontal or vertical
        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "220px", height: "300px" }} /// these are optional style, it is not necessary
      >
        <FrontSide className="card-front">
          <a href="#" class="services-1">
            <span class="icon">
              <img src={img} alt="services-icon" />
            </span>
            <div class="desc">
              <h3 class="mb-5">{name}</h3>
            </div>
          </a>
        </FrontSide>
        <BackSide className="card-back">
          <a href="#" class="services-1">
            <div class="desc">
              <h3 class="mb-5">{name}</h3>
              <h4>
                Creeping for female light years that lesser can't evening heaven
                isn't bearing tree
              </h4>
            </div>
          </a>
        </BackSide>
      </Flippy>
    </div>
  );
}

export default ServicesCardComponent;
