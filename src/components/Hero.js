import React from "react";
import Zoom from "react-reveal/Zoom";
import bgImage from "../assets/bg-image/bgp2.png";

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
      className=" text-gray-400  bg-gray-900 body-font justify-center pb-8 "
    >
      <div class="container mx-auto  flex  py-24 md:flex-row flex-col items-center space-x-10 content-start">
        <div class="lg:flex-grow md:w-1/2 pt-0  lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-400 ">
            <p>Welcome! I'm Gaurav,</p>
          </h1>
          <h2 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-50">
            Crafting Digital Experiences
          </h2>
          <br class="hidden lg:inline-block text-xl text-orange-900" />
          <p>That Leave a Lasting Impression</p>

          <p class="mb-8 leading-relaxed  text-indigo-400">
            A passionate web developer dedicated to bringing your ideas to life.
          </p>
          <div class="flex justify-center">
            <button
              class="inline-flex md:w-60 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-300 rounded text-lg"
              onClick={() => scrollToTarget("contact")}
            >
              Let's Build Together
            </button>
            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded  text-lg">
              Resume
            </button>
          </div>
        </div>

        <div className="sm:min-w-lg lg:w-full pr-0  md:w-1/2 w-5/6">
          <Zoom>
            <div className="w-50 h-50 object-contain    ring-primary ring-offset-base-100 ring-offset-2   shadow-cyan-500/50 ">
              <img
                class="object-contain object-center rounded h-48w-96"
                alt="hero"
                src={bgImage}
              />
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}
