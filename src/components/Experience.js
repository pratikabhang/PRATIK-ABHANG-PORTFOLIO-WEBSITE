import lottie from "lottie-web";
import React, { Fragment, useEffect, useRef } from "react";
import ScrollTop from "./utils/ScrollTop";
import elite from "../assets/img/elite.jpg";

const Experience = () => {
  const experienceGIF = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: experienceGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Experience.json"),
    });
  }, []);
  return (
    <Fragment>
      <ScrollTop />
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="row pr-header"
        >
          <div className="col-12 col-md-6 order-12">
            <div className="projectGIF" ref={experienceGIF}></div>
          </div>
          <div className="align col-12 col-md-6 order-1">
            <div className="pr-heading h1 text-center">Experience</div>
            <div className="justify-text-res lead mt-4 text-center">
              Fresher
            </div>
          </div>
        </div>
        <div className="pr-body">
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="h1 text-center mt-5 mb-5"
            >
              Internships
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="row mb-5 d-flex flex-row justify-content-center align-items-center"
            >
              <div className="logoContainer">
                <img src={elite} alt="TraceLink" className="logo" />
              </div>
              <div className="contentContainer">
                <div className="card edu-card">
                  <div className="card-body">
                    <div className="edu-info">
                      <div className="top-info d-flex flex-row justify-content-between">
                        <h3 className="mb-0 college">
                          Junior Web Developer Intern
                        </h3>
                        <div className="tenure">Dec 2023 - Jan 2024</div>
                      </div>
                      <div className="top-info d-flex flex-row justify-content-between">
                        <div className="comp-name">Elite Softwares</div>
                        <div className="tenure">Pune</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Experience;
