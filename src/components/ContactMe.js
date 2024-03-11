import React, { Fragment, useEffect, useRef } from "react";
import lottie from "lottie-web";
import ScrollTop from "./utils/ScrollTop";

const ContactMe = () => {
  const contactGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: contactGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Contact.json"),
    });
  }, []);
  return (
    <Fragment>
      <ScrollTop />
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="row ed-header"
        >
          <div className="col 8 col-md-6 order-4">
            <div className="contactGIF" ref={contactGIF}></div>
          </div>

          <div className="col-12 col-md-6 ed-align order-1">
            <div className="justify-text-res lead mt-4 text-center">
              Get In Touch
            </div>
            <div className="pr-heading h1 text-center">Contact Me</div>
          </div>
        </div>
        <div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="font-med h1 text-center "
          >
            <h1>Contact Me</h1>
          </div>

          <div className="email-body mt-5">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="email-heading d-flex justify-content-center align-items-center"
            >
              <span className="font-small h2 ml-3">
                <strong>Email Address</strong>
              </span>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
              className=" d-flex justify-content-center align-items-center"
            >
              <div className="ml-3 lead">pratikabhang.in@gmail.com</div>
            </div>
          </div>

          <div className="email-body mt-5">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="email-heading d-flex justify-content-center align-items-center"
            >
              <span className="font-small h2 ml-3">
                <strong>Mobile Number</strong>
              </span>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
              className=" d-flex justify-content-center align-items-center"
            >
              <div className="ml-3 lead">8766854678</div>
            </div>
          </div>

          <div className="social-media mt-5">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="font-small h2 text-center"
            >
              <strong>Social Media</strong>
            </div>
            <div className="social-icons mt-3 d-flex justify-content-center">
              <a
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="400"
                href="http://www.linkedin.com/in/pratikabhang/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin linkedin-icon mr-3"></i>
              </a>
              <a
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-delay="300"
                href="http://www.github.com/pratikabhang/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github git-icon mr-3"></i>
              </a>

              <a
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                href="https://www.instagram.com/pratikabhang/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram instagram-icon"></i>
              </a>
            </div>
          </div>
          <div className="address-body mt-5 mb-6">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="font-small h2 text-center"
            ></div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className=" d-flex justify-content-center align-items-center"
            >
              <div className="ml-3 lead">
                Copyright © 2024 All Rights Reserved -
                <a href="https://www.heylink.me/pratikabhang/">
                  {" "}
                  Pratik Abhang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactMe;
