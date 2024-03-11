import React, { Fragment, useEffect, useRef } from "react";
import ScrollTop from "./utils/ScrollTop";
import lottie from "lottie-web";

const Education = () => {
  const educationGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: educationGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Education.json"),
    });
  }, []);
  return (
    <Fragment>
      <ScrollTop />
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="ed-header row"
        >
          <div className="col-12 col-md-6 order-12">
            <div className="educationGIF" ref={educationGIF}></div>
          </div>
          <div className="ed-align col-12 col-md-6 order-1">
            <div className="pr-heading h1 text-center">Education</div>
            <div className="lead mt-4 text-center">
              Qualifications & Certifications
            </div>
          </div>
        </div>
        <div className="pr-body">
          <div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="h1 text-center mt-5"
            >
              Qualifications
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="card edu-card mt-5"
            >
              <div className="card-body">
                <div className="edu-info">
                  <h2 className="course">
                    Bachelor of Engineering in Computer Science
                  </h2>
                  <h4 className="college">
                    STES, Sinhgad Institute Of Technology and Science
                    Engineering, Pune, Maharashtra (SPPU)
                  </h4>
                  <div className="num-font-year">2021 - 2025</div>
                  <div className="mt-2 marks">
                    B.E CGPA : <span className="num-font-marks">7.8</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="card edu-card mt-5"
            >
              <div className="card-body">
                <div className="edu-info">
                  <h2 className="course">
                    Higher Secondary Certificate Maharashtra Board
                  </h2>
                  <h4 className="college">
                    RSS, R.B Narayanrao Borawake College, Shrirampur,
                    Maharashtra (MSBSHSE)
                  </h4>
                  <div className="num-font-year">2019 - 2021</div>
                  <div className="mt-2 marks">
                    HSC Board : <span className="num-font-marks">82.17</span> %
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="card edu-card mt-5 mb-5"
            >
              <div className="card-body">
                <div className="edu-info">
                  <h2 className="course">
                    Secondary School Certificate Maharashtra Board
                  </h2>
                  <h4 className="college">
                    VMSS, De Paul English Medium High School, Shrirampur,
                    Maharashtra (MSBSHSE)
                  </h4>
                  <div className="num-font-year">2009 - 2019</div>
                  <div className="mt-2 marks">
                    SSC Board: <span className="num-font-marks">72.20 </span> %
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Certifications */}
          {/* <div className="mb-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="h1 text-center">
              Certifications
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
