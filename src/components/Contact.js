/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
// import "dotenv/config";
export default function Contact() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  setTimeout(() => {
    setResult("");
  }, 3000);

  const onSubmit = async (data) => {
    console.log(data);
    setResult("Sending....");
    const formData = new FormData();
    formData.append("access_key", "e9e6bb07-5d1d-4792-9125-f82ecdeaa341");
    formData.append("title", 'New Message from "Personal Portfolio"');
    formData.append("from_name", `${data.name} [ " Portfolio "]`);
    formData.append("subject", `${data.name} has sent you a message`);

    for (const key in data) {
      if (key === "file") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(
        "I received your Message! I will get back to you soon. Thank you!"
      );
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <>
      <section class="min-h-screen bg-cover ">
        <div class="flex flex-col min-h-screen bg-black/60">
          <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
              <Zoom>
                <div class="text-white lg:w-1/2 lg:mx-6">
                  <h1 class="text-2xl font-semibold capitalize lg:text-3xl text-blue-300">
                    Let's Connect
                  </h1>

                  <p class="max-w-xl mt-6 text-white">
                    Let's bridge the digital divide together! As a web
                    developer, I'm here to build more than just websites; I'm
                    here to create connections. Let's collaborate and craft an
                    online presence that not only speaks volumes but also
                    fosters meaningful connections. Reach out, and let's turn
                    ideas into reality!
                  </p>
                  <br />
                  <div class="flex mt-4 -mx-1.5 ">
                    <a
                      class="mx-1.5 text-white transition-colors duration-300 transform "
                      href="tel:+917892917825"
                    >
                      <svg
                        style={{ color: " white" }}
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                    <div className="contact-number text-white pl-2">
                      +91 7892917825
                    </div>
                  </div>

                  {/* email */}
                  <div class="flex mt-4 -mx-1.5 ">
                    <a
                      class="mx-1.5 text-white transition-colors duration-300 transform "
                      href="mailto:gkrcoder@gmail.com"
                      target="_blank"
                    >
                      <svg
                        style={{ color: "white" }}
                        class="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                    <div className="mail-id pl-3 text-white ">
                      gkrcoder@gmail.com
                    </div>
                  </div>

                  <div class="mt-6 md:mt-8">
                    <h3 class="text-blue-300">
                      <strong>Follow Me</strong>
                    </h3>

                    <div class="flex mt-4 -mx-1.5 ">
                      <a
                        class="mx-1.5 text-white transition-colors duration-300 transform "
                        href="https://www.github.com/gauravkesh"
                        target="_blank"
                      >
                        <svg
                          // style={{ color: "white" }}
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-8 h-8"
                          fill="none"
                          viewBox="0 0 512 512"
                        >
                          <title>ionicons-v5_logos</title>
                          <path
                            d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>

                      <a
                        class="mx-1.5 text-white transition-colors duration-300 transform "
                        href="https://www.linkedin.com/in/gaurav-kesh-roushan-100b631aa/"
                        target="_blank"
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="0"
                          class="w-8 h-8"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>

                      <a
                        class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                        href="https://www.discord.com/users/hackedversion2.0"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-8 h-8"
                          fill="none"
                          viewBox="0 0 640 512"
                        >
                          <path
                            d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                            fill="white"
                          ></path>
                        </svg>
                      </a>
                      <a
                        class="mx-1.5 text-white transition-colors duration-300 transform"
                        href="https://www.instagram.com/gkrcoder"
                        target="_blank"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-8 h-8"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Zoom>

              <div class="mt-8 lg:w-1/2 lg:mx-6" id="contact-form">
                <Zoom delay="1">
                  <div class="w-full px-8 py-10 mx-auto overflow-hidden shadow-2xl rounded-xl dark:bg-black lg:max-w-xl pb-2">
                    <p class="mt-2 text-gray-400">Send Me your Message</p>

                    <form
                      class="mt-6"
                      onSubmit={handleSubmit(onSubmit)}
                      id="contact-form"
                    >
                      <input
                        type="hidden"
                        name="from_name"
                        value="Personal Portfolio"
                      ></input>

                      {/* checkbox */}

                      <div class="flex-1">
                        <label class="block mb-2 text-sm text-gray-200">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          name="name"
                          {...register("name")}
                          class="block w-full px-5 py-3 mt-2 text-gray-700  border border-gray-200 rounded-md bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          required
                        />
                      </div>

                      <div class="flex-1 mt-6">
                        <label class="block mb-2 text-sm text-gray-200">
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          {...register("email")}
                          placeholder="xyzcompany@gmail.com"
                          class="block w-full px-5 py-3 mt-2 text-gray-700  border border-gray-200 rounded-md bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          required
                        />
                      </div>

                      <div class="w-full mt-6">
                        <label class="block mb-2 text-sm text-gray-200">
                          Message
                        </label>
                        <textarea
                          name="message"
                          {...register("message")}
                          class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-md md:h-48  bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 mt-6 text-sm ftracking-wide capitalize transform bg-gray-300 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-white-400 focus:ring-opacity-50  relative inline-flex items-center justify-center p-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2  rounded-full shadow-md group"
                      >
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-send"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                          </svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                          Let's connect
                        </span>
                        <span class="relative invisible">Button Text</span>
                      </button>
                      <div id="result"></div>
                    </form>
                  </div>
                  <div className="result h-2 text-red-600 mt-3 w-full">
                    {result}
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
