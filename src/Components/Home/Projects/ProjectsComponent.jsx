import React from "react";
import "./ProjectsStyle.css";

import project1 from "../../../images/project-1.jpg";
import project2 from "../../../images/project-2.jpg";
import project3 from "../../../images/project-3.jpg";
import project4 from "../../../images/project-4.jpg";
import project5 from "../../../images/project-5.jpg";
import project6 from "../../../images/project-6.jpg";

function ProjectsComponent() {
  return (
    <div>
      <section class="ftco-section ftco-project" id="projects-section">
        <div class="container">
          <div class="row justify-content-center pb-5">
            <div
              class="section-header text-center wow zoomIn"
              data-aos="zoom-in"
              data-wow-delay="0.1s"
            >
              <p>Our Portfolio</p>
              <h2>Our Excellent Projects</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div
                data-aos="slide-up"
                class="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `URL(${project4}` }}
              >
                <div class="overlay"></div>
                <div class="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div
                data-aos="slide-up"
                class="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `URL(${project5})` }}
              >
                <div class="overlay"></div>
                <div class="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>

            <div class="col-md-8">
              <div
                data-aos="slide-up"
                class="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `URL(${project1})` }}
              >
                <div class="overlay"></div>
                <div class="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>

              <div
                data-aos="slide-up"
                class="project img ftco-animate d-flex justify-content-center align-items-center"
                style={{ backgroundImage: `URL(${project6})` }}
              >
                <div class="overlay"></div>
                <div class="text text-center p-4">
                  <h3>
                    <a href="/">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12">
                  <div
                    data-aos="slide-up"
                    class="project img ftco-animate d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: `URL(${project2})` }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="/">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div
                    data-aos="slide-up"
                    class="project img ftco-animate d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: `URL(${project3})` }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="/">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsComponent;
