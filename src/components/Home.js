import React, { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import HomeBio from "../assets/img/Home-bio.png";
import ScrollTop from "./utils/ScrollTop";
import ResumeIcon from "../assets/img/note.png";

const Home = () => {
  const homeGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: homeGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/HomePage.json"),
    });
  }, []);

  return (
    <Fragment>
      <ScrollTop />
      <div className="home">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="row greeting"
          >
            <div className="greeting-para col-12 col-md-6">
              <div className="greeting-text margin_b-res mt-6 mb-5">
                <div className="h3 greeting-text__hi">Hello!</div>
                <div className="h1 greeting-text__name">I'm Pratik Abhang</div>
                <div className="greeting-text__bio text-center">
                  Bachelor of Engineering in Computer Science
                </div>
              </div>

              <div className="d-flex justify-content-center ml-4">
                <a
                  href="http://www.linkedin.com/in/pratikabhang"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="social fa fa-linkedin-square"></i>
                </a>
                <a
                  href="http://www.github.com/pratikabhang"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="social fa fa-github-square"></i>
                </a>
                <a href="mailto:pratikabhang.in@gmail.com">
                  <i className="social fa fa-envelope-square"></i>
                </a>
              </div>

              <div className="d-flex justify-content-center margin-res mt-5">
                <a
                  href="https://drive.google.com/file/d/1Oj1IeGHGM--ZlsMbm9cG7BEokZcppCxG/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" class="custom-btn">
                    <img src={ResumeIcon} height={20} width={20} alt="Resume" />{" "}
                    See My Resume
                  </button>
                </a>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="homeGIF" ref={homeGIF}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bio card  mb-5 p-3"
            >
              <p className="lead card-body">
                I am Pratik, an ambitious and driven individual. I am currently
                pursuing a Bachelor's degree in Engineering in Computer Science
                from Savitribai Phule Pune University. I have a passion for
                technology and an innate curiosity to discover new solutions. I
                take pride in staying up-to-date with the latest trends in the
                technology and IT industry.
              </p>
              <Link to="/about">
                <div class="lead btn1 from-left">Read More</div>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              className="img-res"
              width="120%"
              height="90%"
              src={HomeBio}
              alt="Svg"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
