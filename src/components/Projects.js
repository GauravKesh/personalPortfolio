import React from "react";
import { Zoom } from "react-awesome-reveal";

export default function Projects() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font py-10">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">
            Some of My Works
          </h1>

          <p class="lg:w-2/3 mx-auto leading-relaxed text-base" my-5></p>
        </div>
      </section>
      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                .
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"></p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
