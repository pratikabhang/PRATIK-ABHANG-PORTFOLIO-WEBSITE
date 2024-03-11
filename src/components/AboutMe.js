import React, { Fragment, useEffect, useRef } from "react";
import lottie from "lottie-web";
import ScrollTop from "./utils/ScrollTop";

const AboutMe = () => {
  const frontendGIF = useRef(null);
  const backendGIF = useRef(null);
  const programmingGIF = useRef(null);
  const androidGIF = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    lottie.loadAnimation({
      container: frontendGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Frontend.json"),
    });
    lottie.loadAnimation({
      container: backendGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Backend.json"),
    });
    lottie.loadAnimation({
      container: programmingGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Programming.json"),
    });
    lottie.loadAnimation({
      container: androidGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Android.json"),
    });
  }, []);
  return (
    <Fragment>
      <ScrollTop />
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="heading h1 text-center"
        >
          Explore My Skills
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="mt-5 domain text-center"
        ></div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="row"
        >
          <div className="col-12 col-md-6 order-12">
            <div className="h2 category mt-5 ">Frontend Technologies</div>
            <div className="description">
              <div className="icons mt-4">
                <div
                  className="iconify"
                  data-icon="vscode-icons:file-type-html"
                ></div>
                <div
                  className="iconify"
                  data-icon="vscode-icons:file-type-css"
                ></div>
                <div className="iconify" data-icon="logos:javascript"></div>
              </div>
              <div
                className="iconify"
                data-icon="vscode-icons:file-type-reactjs"
              ></div>
              <div className="iconify" data-icon="logos:nodejs-icon"></div>

              <div className="key-points mt-4">
                <ul>
                  <li>
                    <i className="fa fa-arrow-right mt-4"></i>HTML (HyperText
                    Markup Language) is the standard language for creating web
                    pages and web applications.
                  </li>
                  <li>
                    <i className="fa fa-arrow-right mt-4"></i>CSS (Cascading
                    Style Sheets) is used to enhance the appearance of HTML
                    elements by applying styles such as colors, fonts, and
                    layouts. .
                  </li>
                  <li>
                    <i className="fa fa-arrow-right mt-4"></i>JavaScript is a
                    versatile programming language commonly used for creating
                    dynamic and interactive elements on webpages.
                  </li>
                  <li>
                    <i className="fa fa-arrow-right mt-4"></i>React is a popular
                    JavaScript library for building user interfaces.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1">
            <div className="frontendGIF" ref={frontendGIF}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="backendGIF"
              ref={backendGIF}
            ></div>
          </div>
          <div className="col-12 col-md-6">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="h2 category mt-5"
            >
              Backend Technologies
              <div className="icons mt-4">
                <div class="iconify" data-icon="logos:mysql"></div>
                <div class="iconify" data-icon="logos:php"></div>
                <div class="iconify" data-icon="logos:oracledb"></div>
                <div className="iconify mongo" data-icon="cib:mongodb"></div>
                <div
                  className="iconify"
                  data-icon="vscode-icons:file-type-npm"
                ></div>
              </div>
              <div className="key-points mt-4">
                <ul>
                  <li>
                    <i className="fa fa-arrow-right mt-4"></i> I'm good in
                    setting up the database and fetching data using APIs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mt-5 domain text-center"
        ></div>
        <div className="row">
          <div className="col-12 col-md-6 order-1">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="programmingGIF"
              ref={programmingGIF}
            ></div>
          </div>
          <div className="col-12 col-md-6">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="description"
            >
              <div className="h2 category mt-5">Programming Languages</div>
              <div className="icons mt-4">
                <div className="iconify" data-icon="logos:c-plusplus"></div>
                <div class="iconify" data-icon="logos:java"></div>
              </div>
              <div className="key-points mt-4">
                <ul>
                  <li>
                    <i className="fa fa-arrow-right mt-4"></i> I'm good in
                    solving programming questions using C++ and Python, also
                    I've interest in solving mathematical problems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
