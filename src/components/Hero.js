import React from "react";
// import Zoom from "react-reveal/Zoom";
import bgImage from "../assets/bg-image/bgp2.png";
import { Bounce, Zoom } from "react-awesome-reveal";

export default function Hero() {
  const scrollToTarget = (targetId) => {
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  };
  const myStyle = {
    backgroundImage: `url(${bgImage})`,
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section
      style={{ myStyle }}
      className="  bg-gray-900 body-font justify-center pb-8 "
    >
      <div class="container mx-auto  flex  py-24 md:flex-row flex-col items-center space-x-10 content-start">
        <div class="lg:flex-grow md:w-1/2 pt-0  lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-400 ">
            <Bounce>
              <p>Welcome! I'm Gaurav,</p>
            </Bounce>
          </h1>
          <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-50">
            Crafting Digital Experiences
          </h2>
          <br class="hidden lg:inline-block text-xl text-yellow-50" />
          <p>That Leave a Lasting Impression</p>

          <p class="mb-8 leading-relaxed text-yellow-50">
            A passionate web developer dedicated to bringing your ideas to life.
          </p>
          <div class="flex justify-center">
            <button
              class="inline-flex md:w-60 text-white  bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-300 rounded text-lg relative  items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6group"
              onClick={() => scrollToTarget("contact")}
            >
              <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full"></span>
              <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  class="w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  class="w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Let's Connect
              </span>
            </button>
            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded  text-lg">
              Resume
            </button>
          </div>
        </div>
        <Zoom>
          <div className="sm:min-w-lg lg:w-full pr-0  md:w-1/2 w-5/6">
            <div className="w-50 h-50 object-contain    ring-primary ring-offset-base-100 ring-offset-2   shadow-cyan-500/50 ">
              <img
                class="object-contain object-center rounded h-48w-96"
                alt="hero"
                src={bgImage}
              />
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
}
