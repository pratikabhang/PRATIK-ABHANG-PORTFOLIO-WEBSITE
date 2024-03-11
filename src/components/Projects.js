import React, { Fragment, useEffect, useRef } from "react";
import lottie from "lottie-web";
import password from "../assets/img/password.png";
import age from "../assets/img/age.jpg";
import todo from "../assets/img/todo.png";
import qr from "../assets/img/qr.png";
import ScrollTop from "./utils/ScrollTop";

const Projects = () => {
  const projectGIF = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: projectGIF.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/img/Project.json"),
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
            <div className="projectGIF" ref={projectGIF}></div>
          </div>
          <div className="align col-12 col-md-6 order-1">
            <div className="justify-text-res lead mt-4 text-center">
              Browse My Recent
            </div>
            <div className="pr-heading h1 text-center">Projects</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src={password}
              alt="Password Generator"
              className="pr-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-12 col-md-6"
          >
            <div>
              <p className="h1 title">Password Generator</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                The project Password Generator aims to develop a robust tool
                capable of generating secure and unique passwords for various
                purposes. Utilizing a combination of user-defined parameters and
                cryptographic techniques, the generator will create passwords
                that meet stringent security standards. With a user-friendly
                interface, users can specify password length, character types,
                and other preferences, ensuring personalized and reliable
                password generation. Through thorough testing and implementation
                of best practices, this project seeks to enhance digital
                security by promoting the use of strong passwords across online
                platforms.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://pratikabhang-passwordgenerator.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="pr-btn">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-6">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="col-12 col-md-6 order-12"
          >
            <div>
              <p className="h1 title">Age Calculator</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                The Age Calculator project is a user-friendly tool designed to
                swiftly determine a person's age based on their date of birth.
                With a sleek interface and intuitive functionality, users simply
                input their birthdate, and the calculator swiftly computes their
                current age. Utilizing efficient algorithms, this application
                ensures accuracy and precision in age calculation, catering to a
                diverse range of users. Whether for personal use, professional
                purposes, or educational contexts, the Age Calculator
                streamlines the process of age determination, offering
                convenience and reliability. This project stands as a testament
                to the intersection of technology and everyday utility,
                providing a valuable tool for anyone seeking to ascertain age
                quickly and effortlessly.
              </p>
            </div>
            <div className="icons"></div>
            <div className="mt-8">
              <a
                href="https://pratikabhang-agecalculator.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="pr-btn">
                  View
                </button>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 d-flex align-items-center justify-content-center">
            <img
              data-aos="flip-right"
              data-aos-duration="1000"
              src={age}
              alt="Age Calculator"
              className="pr-image"
            />
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-12 col-md-6">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              src={qr}
              alt="QR Code Generator"
              className="pr-image"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="col-12 col-md-6"
          >
            <div>
              <p className="h1 title">QR Code Generator</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                The QR Code Generator project is an innovative tool that allows
                users to effortlessly create QR codes for various purposes. With
                a user-friendly interface, users can input text, URLs, or other
                data and generate QR codes instantly. This project employs
                robust encoding algorithms to ensure compatibility with a wide
                range of devices and applications. Whether for business cards,
                promotional materials, or personal use, this generator provides
                a seamless solution for generating QR codes. With customizable
                options and quick generation times, this project offers a
                convenient and efficient way to incorporate QR codes into
                various projects and workflows.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://pratikabhang-qrcodegenerator.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="pr-btn">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-6">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="col-12 col-md-6 order-12"
          >
            <div>
              <p className="h1 title">TO-Do List</p>
            </div>
            <div>
              <p className="justify-text-res lead">
                The To-Do List Web App project is a dynamic tool designed to
                help users efficiently manage their tasks and priorities.
                Featuring a clean and intuitive interface, users can easily
                create, organize, and prioritize their to-do lists. With
                functionalities like drag-and-drop and categorization, this web
                app offers flexibility and customization to suit individual
                workflow preferences. Additionally, it allows users to set
                deadlines, reminders, and recurring tasks, ensuring they stay on
                top of their responsibilities. Whether for personal productivity
                or collaborative projects, this project empowers users to stay
                organized and focused, enhancing their productivity and
                efficiency.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://pratikabhang-todolist.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="pr-btn">
                  View
                </button>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 justify-image">
            <img
              data-aos="flip-right"
              data-aos-duration="1000"
              src={todo}
              alt="TO-Do List"
              className="pr-image"
            />
          </div>
        </div>
      </div>
      {/* More Projects */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="d-flex justify-content-center mt-6 mb-6"
      >
        <a
          href="https://github.com/pratikabhang"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" class="mt-res-2 custom-btn">
            More Projects
          </button>
        </a>
      </div>
    </Fragment>
  );
};

export default Projects;
