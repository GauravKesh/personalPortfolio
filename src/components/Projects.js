/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import project1 from "../assets/projectImage/project1.png";
import gdgpu from "../assets/projectImage/gdgpu.png";
import urlsShort from "../assets/projectImage/urlsShort.png";
import project2 from "../assets/projectImage/project2.png";
import project3 from "../assets/projectImage/project3.png";
import project4 from "../assets/projectImage/project4.png";
import project5 from "../assets/projectImage/project5.png";
import githubprofile from "../assets/projectImage/githubprofile.png";
import ReactGA from "react-ga"

export default function Projects() {
  const TRACKING_ID = "G-J43TE65YWB";
  ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <div className="projectbody py-10">
        <section className="text-gray-400 bg-gray-900 body-font py-5">
          <div class="flex flex-col text-center w-full ">
            <h1 class="sm:text-3xl text-3xl font-medium title-font  text-white ">
              Some of My Works
            </h1>
          </div>
        </section>
        <section class="text-gray-400 body-font bg-gray-900 pt-10 pb-10">
          <section class="text-gray-600 body-font">
            <div class="container px-5  mx-auto">
              <div class="flex flex-wrap -m-4 md:flex md:flex-wrap">
                {/* gdgpu */}
                <div class="p-4 md:w-1/3  hover:animate-pulse">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-20 w-full scale-100  object-center  object-fill my-2 mx-2"
                      src={gdgpu}
                      alt="blog"
                    />
                    <div class="p-6 ">
                      <h1 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-3">
                        GDG-PU Website
                      </h1>
                      <p class="leading-relaxed mb-3">
                        A Frontend web Application for GDG Club
                      </p>
                      <h1 class="title-font text-sm font-medium text-gray-400 pb-3 py-3">
                        <strong className="pr-2">Technology Used:- </strong>
                        Next Js,Tailwind CSS ,Acernity Ui, MongoDB, Nodejs
                        ,Express Js
                      </h1>
                      <div class="flex items-center flex-wrap space-x-2 py-5">
                        {/* github link */}
                        {/*                         <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 "
                          href="https://gdgpu.vercel.app/"
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className=""
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                          </svg>
                          <p className="sm:hidden">Github</p>
                        </a> */}
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://gdgpu.vercel.app/"
                          target="_blank"
                        >
                          Live
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#ffffff"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 12l-4-4v3H5v2h12v3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 2 */}
                <div class="p-4 md:w-1/3  hover:animate-pulse">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-20 w-full scale-100  object-center  object-fill my-2 mx-2"
                      src={urlsShort}
                      alt="blog"
                    />
                    <div class="p-6 ">
                      <h1 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-3">
                        URL Shortener
                      </h1>
                      <p class="leading-relaxed mb-3">
                        A complete Full-stack web-application to make short URL.
                      </p>
                      <h1 class="title-font text-sm font-medium text-gray-400 pb-3 py-3">
                        <strong className="pr-2">Technology Used:- </strong>
                        Next Js,Tailwind CSS , MongoDB, Nodejs ,Express Js
                      </h1>
                      <div class="flex items-center flex-wrap space-x-2 py-5">
                        {/* github link */}
                        {/*  <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 "
                          href="https://github.com/GauravKesh/Conciliation-Frontend"
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className=""
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                          </svg>
                          <p className="sm:hidden">Github</p>
                        </a> */}
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://gshort.vercel.app/"
                          target="_blank"
                        >
                          Live
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#ffffff"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 12l-4-4v3H5v2h12v3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 2 */}
                <div class="p-4 md:w-1/3  hover:animate-pulse">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-20 w-full scale-100  object-center  object-fill my-2 mx-2"
                      src={project5}
                      alt="blog"
                    />
                    <div class="p-6 ">
                      <h1 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-3">
                        Complaint Management System (CMS)
                      </h1>
                      <p class="leading-relaxed mb-3">
                        A complete Full-stack web-application with role based
                        access.
                      </p>
                      <h1 class="title-font text-sm font-medium text-gray-400 pb-3 py-3">
                        <strong className="pr-2">Technology Used:- </strong>
                        React Js,Tailwind CSS , MongoDB, Nodejs ,Express Js
                      </h1>
                      <div class="flex items-center flex-wrap space-x-2 py-5">
                        {/* github link */}
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 "
                          href="https://github.com/GauravKesh/Conciliation-Frontend"
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className=""
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                          </svg>
                          <p className="sm:hidden">Github</p>
                        </a>
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://conciliation-complain.vercel.app/home"
                          target="_blank"
                        >
                          Live
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#ffffff"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 12l-4-4v3H5v2h12v3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 2 */}
                <div class="p-4 md:w-1/3  hover:animate-pulse">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-20 w-full scale-100  object-center  object-fill my-2 mx-2"
                      src={githubprofile}
                      alt="blog"
                    />
                    <div class="p-6 ">
                      <h1 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-3">
                        Github Profile Search
                      </h1>
                      <p class="leading-relaxed mb-3">
                        A web-application to search for Github User.
                      </p>
                      <h1 class="title-font text-sm font-medium text-gray-400 pb-3 py-3">
                        <strong className="pr-2">Technology Used:- </strong>
                        React Js,Tailwind CSS , Github Api's
                      </h1>
                      <div class="flex items-center flex-wrap space-x-2 py-5">
                        {/* github link */}
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 "
                          href="https://github.com/GauravKesh/Github_profile_search"
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className=""
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                          </svg>
                          <p className="sm:hidden">Github</p>
                        </a>
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://searchgithubprofilegkr.vercel.app/"
                          target="_blank"
                        >
                          Live
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#ffffff"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 12l-4-4v3H5v2h12v3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 1 */}
                <div class="p-4 md:w-1/3  hover:animate-pulse">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-20 w-full scale-100  object-center  object-fill my-2 mx-2"
                      src={project1}
                      alt="blog"
                    />
                    <div class="p-6 ">
                      <h1 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-3">
                        To-Do App
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Using this app you can store your Daily task so that you
                        can be productive .
                      </p>
                      <h1 class="title-font text-sm font-medium text-gray-400 pb-3 py-3">
                        <strong className="pr-2">Technology Used:- </strong>
                        React Js,Tailwind CSS
                      </h1>
                      <div class="flex items-center flex-wrap space-x-2 py-5">
                        {/* github link */}
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 "
                          href="https://github.com/GauravKesh/ToDo"
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className=""
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                          </svg>
                          <p className="sm:hidden">Github</p>
                        </a>
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://todo-gkr.vercel.app/"
                          target="_blank"
                        >
                          Live
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#ffffff"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 12l-4-4v3H5v2h12v3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 2 */}
                <div class="p-4 md:w-1/3  animate-dzoom  ">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-center  object-fill object-fit my-2 px-2"
                      src={project4}
                      alt="blog"
                    />
                    <div class="p-6 ">
                      <h1 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-1">
                        Text Transform App
                      </h1>
                      <p class="leading-relaxed mb-3">
                        Using this app you can transform text in different way
                      </p>
                      <h1 class="title-font text-sm font-medium text-gray-400 pb-2 py-2">
                        <strong className="pr-2">Technology Used:- </strong>
                        React Js,Bootstrap
                      </h1>
                      <div class="flex items-center flex-wrap space-x-10 pt-10">
                        {/* github link */}
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://github.com/GauravKesh/Text-Transform"
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                          </svg>
                          <p className="sm:hidden">Github</p>
                        </a>
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://gauravkesh.github.io/Text-Transform/"
                        >
                          Live
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#ffffff"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 12l-4-4v3H5v2h12v3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* project 3 */}
                <div class="p-4 md:w-1/3  animate-dzoom  ">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-center  object-fill object-fit my-2 px-2"
                      src={project3}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h1 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-3">
                        Personal Portfolio
                      </h1>
                      <p class="leading-relaxed mb-3">
                        I create this portfolio first time when i learnt web
                        development .
                      </p>
                      <h1 class="title-font text-sm font-medium text-gray-400 pb-3 py-3">
                        <strong className="pr-2">Technology Used:- </strong>
                        HTML, CSS, Javascript, Google Analytics
                      </h1>
                      <div class="flex items-center flex-wrap space-x-2 ">
                        {/* github link */}
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://github.com/GauravKesh/GauravKesh.github.io"
                          target="_blank"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                          </svg>
                          <p className="sm:hidden">Github</p>
                        </a>
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://gkrwebdev.vercel.app/"
                        >
                          Live
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#ffffff"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 12l-4-4v3H5v2h12v3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project 4 */}

                {/* project 5 */}
                <div class="p-4 md:w-1/3 animate-dzoom   ">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      class="lg:h-48 md:h-36 w-full object-center  object-fill my-2 px-2"
                      src={project2}
                      alt="blog"
                    />
                    <div class="p-6">
                      <h1 class="tracking-widest text-lg title-font font-medium text-gray-400 mb-3">
                        UI/UX Design
                      </h1>
                      <p class="leading-relaxed mb-3">
                        This is a ui/ux design .This design was first did in
                        figma then I developed this using HTML/CSS
                      </p>
                      <h1 class="title-font text-sm font-medium text-gray-400 pb-3 py-3">
                        <strong className="pr-2">Technology Used:-</strong>React
                        Js, HTML, CSS ,Figma
                      </h1>
                      <div class="flex items-center flex-wrap space-x-2 py-5">
                        {/* github link */}
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://github.com/GauravKesh/onyx"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            ></path>
                          </svg>
                          <p className="sm:hidden">Github</p>
                        </a>
                        <a
                          class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                          href="https://onyx-mocha.vercel.app/"
                          target="_blank"
                        >
                          Live
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="#ffffff"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M21 12l-4-4v3H5v2h12v3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
