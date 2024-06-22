/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Projects from "./components/Projects.js";
import Loading from "./components/Loading.js";
import Skills from "./components/Skills.js";
import glogo from "./assets/logo/myLogo.png";
import ReactGA from "react-ga";
function App() {
  /* Hamburger Function */
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /* scrolling target */
  const scrollToTargetClick = (targetId) => {
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  };
    const TRACKING_ID = "G-J43TE65YWB";
    ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  // scroll-to-id
  const scrollToTarget = (targetId) => {
    document.getElementById(targetId).scrollIntoView({
      behavior: "overscroll-contain",
    });
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <nav className="fixed w-full z-30 transition-transform duration-300 transform translate-y-0  ">
        <div className="navbb w-full">
          <div className="  bg-gray-900  navbar sticky-top   bg-grey-900 text-white text-pretty  z-50  flex lg:pl-20  lg:pr-20 lg:mr-10 lg:flex lg:justify-between  xl:pl-20 xl:pr-20 xl:mr-5 xl:flex xl:justify-between md:justify-between ">
            <div className=" ">
              <div className=" dropdown bg-gray-900 ">
                {/* open icon */}
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost md:hidden  lg:hidden bg-gray-900 "
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {isOpen === false ? (
                    // close icon
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg>
                  ) : (
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 512 512"
                    >
                      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                    </svg>
                  )}
                </div>

                <ul
                  tabIndex={0}
                  className={`container-lg  menu menu-lg dropdown-content pr-6 mt-3 z-[1] bg-gray-900  rounded-box w-90 h-100 ${
                    isOpen ? "visible" : "hidden"
                  }`}
                >
                  <li>
                    <a onClick={() => scrollToTargetClick("about")}>About</a>
                  </li>
                  <li>
                    <a onClick={() => scrollToTargetClick("skills")}>Skills</a>
                  </li>
                  <li>
                    <a onClick={() => scrollToTargetClick("project")}>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-nowrap"
                      onClick={() => scrollToTargetClick("contact")}
                    >
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="avatar md:pl-10 "
                onClick={() => scrollToTargetClick("hero")}
              >
                <div className="w-12 rounded-full">
                  <img src={glogo} />
                </div>
              </div>
            </div>
            <div className="   container-md navbar-center   flex-row-reverse justify-center    bg-gray-900  hidden md:block lg:visible  lg:flex   ">
              <ul className="menu bg-gray-900 menu-horizontal ">
                <li>
                  <a onClick={() => scrollToTargetClick("about")}>About</a>
                </li>
                <li>
                  <a onClick={() => scrollToTargetClick("skills")}>Skills</a>
                </li>
                <li>
                  <a onClick={() => scrollToTargetClick("project")}>Projects</a>
                </li>

                <li>
                  <a onClick={() => scrollToTargetClick("contact")}>
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="top-hero pt-5 pb-1 "
        style={{ backgroundColor: "#101827" }}
      ></div>
      <div
        className="bg-gray-900 transition-opacity   ease-in duration-700 opacity-1 hover:opacity-100"
        id="hero"
      >
        <Hero />
      </div>

      <div id="about" className="pt-0">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="project">
        <Projects />
      </div>

      <br />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
