/* eslint-disable react/jsx-no-target-blank */
import { React, useEffect, useState } from "react";

import bgImage from "../assets/bg-image/bgp2.png";
import { Fade, Zoom } from "react-awesome-reveal";
import { getDownloadURL } from "firebase/storage";
import { storage } from "../config/Firebase";
import { ref } from "react";
import ReactGA from "react-ga"
// // for viewing the pdf
// import { Worker } from "@react-pdf-viewer/core";
// import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Hero() {
    const TRACKING_ID = "G-J43TE65YWB";
    ReactGA.initialize(TRACKING_ID);
  const [resume, setResume] = useState(null); // setting state to show resume

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

  const handleShowResume = () => {
    // setResume(true);
  };

  return (
    <>
      <section
        style={{ myStyle }}
        className="  bg-gray-900 body-font justify-center pb-8 "
      >
        <div class="container mx-auto  flex  py-24 md:flex-row flex-col items-center space-x-10 ">
          <div class="lg:flex-grow md:w-1/2 pt-0  lg:pr-0 lg:pl-20 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:pl-20   ">
            <h1 class="title-font  sm:text-4xl text-3xl mb-4 font-medium text-blue-300  ">
              <Zoom damping={0.1}>
                <p>Welcome! I'm Gaurav,</p>
              </Zoom>
            </h1>

            <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-50">
              Crafting Digital Experiences
            </h2>

            <br class="hidden lg:inline-block text-xl text-yellow-50" />

            <p className="text-gray-400">That Leave a Lasting Impression</p>

            <p class="mb-8 leading-relaxed text-yellow-50">
              A passionate web developer dedicated to bringing your ideas to
              life.
            </p>
            <div class="flex justify-center">
              {/* lets connect */}
              <button
                class="inline-flex md:w-60 text-gray-400 bg-gray-800 border-0  px-6 focus:outline-none hover:bg-blue-500 rounded text-lg transition-all duration-150 ease-in-out hover:pl-10
                hover:md:pl-20  relative x items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold hover:pr-6 hover:md:pr-0 group"
                onClick={() => scrollToTarget("contact")}
              >
                <span class="absolute bottom-0 left-0 w-full  transition-all duration-150 ease-in-out bg-blue-500 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M0 12.562l1.932-7.562 3.526.891-1.974 7.562-3.484-.891zm18.415.902c.125.287.187.598.155.91-.079.829-.698 1.448-1.457 1.602-.254.533-.733.887-1.285 1.002-.244.512-.722.89-1.296 1.01-.325.668-.97 1.012-1.674 1.012-.516 0-1.004-.183-1.356-.538-.928.404-1.902-.048-2.232-.863-.596-.068-1.107-.452-1.332-.997-.599-.071-1.114-.458-1.34-1.003-1.188-.138-1.848-1.44-1.198-2.495-.233-.058-.494-.104-.751-.152l.383-1.464c.524.1 1.01.219 1.453.358.913-.655 2.151-.295 2.549.679.608.069 1.116.464 1.334 1 .598.068 1.111.451 1.335.998.738.082 1.36.653 1.449 1.434l.002.225.45.402c.252.291.68.324.96.106.286-.223.324-.624.075-.909l-1.457-1.279c-.157-.139.052-.38.213-.241l1.491 1.308c.257.294.692.332.969.114.285-.22.316-.631.068-.916l-1.896-1.628c-.162-.135.048-.38.208-.242l1.944 1.669c.248.282.678.335.967.114.283-.22.349-.606-.002-.995-1.24-1.112-2.671-2.405-4.143-3.796-.355.488-2.176 1.502-3.279 1.502s-1.779-.675-1.96-1.343c-.157-.582.051-1.139.532-1.42.535-.313 1.055-.761 1.562-1.268-.789-.586-1.203-.398-2.067.013-.503.238-1.1.521-1.854.647l.437-1.67c1.327-.488 2.549-1.608 4.505-.083l.491-.552c.395-.447.911-.715 1.503-.715.436 0 .91.161 1.408.417 1.518.793 2.293 1.256 3.443 1.294l.394 1.508h-.008c-1.797.033-2.676-.508-4.516-1.47-.513-.263-.859-.318-1.1-.044-.984 1.12-2.031 2.309-3.192 3.063.573.458 2.019-.458 2.592-.92.25-.201.638-.468 1.128-.468.553 0 .955.331 1.244.619.68.68 2.57 2.389 3.407 3.142.434-.242.868-.435 1.311-.605l.383 1.467c-.319.134-.633.286-.95.461zm-11.037.875l.609-.747c.25-.3.215-.722-.08-.944-.296-.223-.737-.158-.986.14l-.61.749c-.251.298-.214.721.08.942s.737.159.987-.14zm1.328 1.006l.617-.755c.248-.297.213-.722-.082-.943-.294-.221-.734-.159-.984.142l-.616.754c-.251.3-.21.712.086.936.297.222.729.167.979-.134zm1.343.992l.608-.747c.251-.299.215-.721-.08-.944-.296-.222-.735-.157-.986.142l-.609.745c-.251.3-.213.724.082.945.293.221.734.16.985-.141zm1.865-.691c-.294-.224-.735-.159-.987.139l-.612.751c-.249.299-.213.722.082.943.295.221.735.16.986-.142l.61-.75c.253-.297.217-.72-.079-.941zm1.427 1.134l-.24-.212c-.063.239-.173.464-.332.65l-.358.441c.133.106.288.176.448.176.149 0 .295-.046.415-.138.284-.223.317-.632.067-.917zm5.201-10.889l1.974 7.562 3.484-.891-1.932-7.562-3.526.891z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-20 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M0 12.562l1.932-7.562 3.526.891-1.974 7.562-3.484-.891zm18.415.902c.125.287.187.598.155.91-.079.829-.698 1.448-1.457 1.602-.254.533-.733.887-1.285 1.002-.244.512-.722.89-1.296 1.01-.325.668-.97 1.012-1.674 1.012-.516 0-1.004-.183-1.356-.538-.928.404-1.902-.048-2.232-.863-.596-.068-1.107-.452-1.332-.997-.599-.071-1.114-.458-1.34-1.003-1.188-.138-1.848-1.44-1.198-2.495-.233-.058-.494-.104-.751-.152l.383-1.464c.524.1 1.01.219 1.453.358.913-.655 2.151-.295 2.549.679.608.069 1.116.464 1.334 1 .598.068 1.111.451 1.335.998.738.082 1.36.653 1.449 1.434l.002.225.45.402c.252.291.68.324.96.106.286-.223.324-.624.075-.909l-1.457-1.279c-.157-.139.052-.38.213-.241l1.491 1.308c.257.294.692.332.969.114.285-.22.316-.631.068-.916l-1.896-1.628c-.162-.135.048-.38.208-.242l1.944 1.669c.248.282.678.335.967.114.283-.22.349-.606-.002-.995-1.24-1.112-2.671-2.405-4.143-3.796-.355.488-2.176 1.502-3.279 1.502s-1.779-.675-1.96-1.343c-.157-.582.051-1.139.532-1.42.535-.313 1.055-.761 1.562-1.268-.789-.586-1.203-.398-2.067.013-.503.238-1.1.521-1.854.647l.437-1.67c1.327-.488 2.549-1.608 4.505-.083l.491-.552c.395-.447.911-.715 1.503-.715.436 0 .91.161 1.408.417 1.518.793 2.293 1.256 3.443 1.294l.394 1.508h-.008c-1.797.033-2.676-.508-4.516-1.47-.513-.263-.859-.318-1.1-.044-.984 1.12-2.031 2.309-3.192 3.063.573.458 2.019-.458 2.592-.92.25-.201.638-.468 1.128-.468.553 0 .955.331 1.244.619.68.68 2.57 2.389 3.407 3.142.434-.242.868-.435 1.311-.605l.383 1.467c-.319.134-.633.286-.95.461zm-11.037.875l.609-.747c.25-.3.215-.722-.08-.944-.296-.223-.737-.158-.986.14l-.61.749c-.251.298-.214.721.08.942s.737.159.987-.14zm1.328 1.006l.617-.755c.248-.297.213-.722-.082-.943-.294-.221-.734-.159-.984.142l-.616.754c-.251.3-.21.712.086.936.297.222.729.167.979-.134zm1.343.992l.608-.747c.251-.299.215-.721-.08-.944-.296-.222-.735-.157-.986.142l-.609.745c-.251.3-.213.724.082.945.293.221.734.16.985-.141zm1.865-.691c-.294-.224-.735-.159-.987.139l-.612.751c-.249.299-.213.722.082.943.295.221.735.16.986-.142l.61-.75c.253-.297.217-.72-.079-.941zm1.427 1.134l-.24-.212c-.063.239-.173.464-.332.65l-.358.441c.133.106.288.176.448.176.149 0 .295-.046.415-.138.284-.223.317-.632.067-.917zm5.201-10.889l1.974 7.562 3.484-.891-1.932-7.562-3.526.891z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Let's Connect
                </span>
              </button>
              <button
                class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded  text-lg  relative  group overflow-hidden font-medium justify-center"
                onClick={() => {
                  handleShowResume();
                }}
              >
                <span class="absolute top-0 left-0 flex   w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90">
                  <svg
                    class="w-6 h-6 text-gray-800 group-hover:text-white opacity-0 group-hover:opacity-90 translate-y-3 ease-in-out"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                    />
                  </svg>
                </span>
                <span class="relative group-hover:text-white group-hover:opacity-90 translate-x-1">
                  <a
                    href="https://drive.google.com/file/d/1UJ7tMo_FaEQc6y6a0lrC6Uc6nYkgvD1l/view"
                    target="_blank"
                  >
                    {" "}
                    Resume
                  </a>
                </span>
              </button>
            </div>
          </div>

          <Zoom damping={0.5}>
            <div className="sm:min-w-lg lg:w-full pr-0    ">
              <div className="w-50 h-50 object-contain ring-primary ring-offset-base-100 ring-offset-2   shadow-cyan-500/50 ">
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
    </>
  );
}
