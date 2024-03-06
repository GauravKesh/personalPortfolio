
import {Zoom} from "react-awesome-reveal";

// import profileimage from "../assets/bg-image/bgp6.png";
import profileimg from "../assets/logo/smbgp1.png";

export default function About() {


  return (
    <>
      <section className="text-gray-400 justify-center bg-gray-900 body-font pt-10 pb-10 ">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-5xl text-10xl  title-font mb-2 text-white text-pretty font-bold">
            Know more About Me
          </h1>
        </div>
        <Zoom cascade damping={0.2}>
          <div className="container mx-auto flex  py-20 md:flex-row flex-col items-center ">
            {/*Profile image*/}

            <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 flex justify-center  ">
              <img
                className="object-cover rounded-full object-center  "
                alt="hero"
                src={profileimg}
              />
            </div>

            {/*About text*/}

            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h2 className="text-2xl font-bold mb-4 text-white-300">
                I'm Gaurav Kesh Roushan
              </h2>
              <p className="about mb-4 leading-relaxed mx-2 md:mx-0">
                A <strong>web developer</strong> with a passion for bringing
                digital visions to life. Originally from mention your place of
                origin, my journey into the world of web development began with
                a spark of curiosity and a thirst for creativity.
              </p>
              {/* Education */}

              <div className="flex justify-center">
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="education-details">
                    <h1 className="text-3xl text-10xl title-font mb-4 text-blue-700 text-pretty font-bold">
                      Education
                    </h1>

                    <div className="education-details-brief">
                      <h2 className="mb-3 text-1xl leading-relaxed text-white md:mx-0">
                        <strong>Presidency University Bengaluru </strong>
                      </h2>
                      <h3 className="text-1xl leading-relaxed md:mx-0">
                        Bachelors in Computer Science and Technology
                      </h3>
                      <p className="mb-5 text-pretty text leading-relaxed md:mx-0">
                        Sep 2023 - present
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>

        <div className="quote container flex flex-col text-center w-full mb-20">
          <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
            <svg
              class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <Zoom cascade damping={1}>
              <p>"When creativity meets the developer a new thing is formed"</p>
            </Zoom>
          </blockquote>
        </div>
      </section>
    </>
  );
}
