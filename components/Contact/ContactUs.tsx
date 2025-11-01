import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import FormSubmit from "./FormSubmit";

const ContactUs = () => {
  return (
    <>
      <div className="relative w-full min-h-screen sm:h-[100vh]">
        <div className="absolute top-0 left-0 w-full h-[40vh] sm:h-[70%] bg-gray-800 opacity-30"></div>
        <Image
          src="/images/blue background.webp"
          height={500}
          width={500}
          alt="contact "
          className="w-full h-[40vh] sm:h-[70%] object-cover"
        />
        <div className="absolute z-[100] mt-[8%]  w-full h-full top-0 left-0 flex flex-col items-center lg:justify-center px-4 sm:px-0">
          <div className="flex items-center justify-center flex-col w-full pt-8 lg:pt-0">
            <div>
              <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] uppercase text-white font-bold tracking-[0.7rem]">
                Get in Touch
              </h1>
              <p className="md:text-base  mb-[3%] text-lg text-white font-normal [word-spacing:1px] lg:w-[50%] w-[90%] text-center lg:ml-[25%] ml-0 ">
                We’d love to hear from you! Whether you have a question,
                feedback!
              </p>
            </div>
          </div>
          <div className="bg-white h-auto w-full sm:w-[85%] lg:w-[70%] md:min-h-[440px] lg:min-h-[560px] shadow-md shadow-black rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="md:col-span-1 lg:col-span-2 p-3 sm:p-4 md:p-6">
                <h1 className="text-lg font-semibold">Send a message</h1>
                <form action="">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-2 md:p-3">
                    <div className="bg-white space-y-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        required
                        className="w-full h-12 sm:h-[50px] bg-white border-b-2 border-b-gray-600 outline-none mt-2 px-2"
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        required
                        className="w-full h-12 sm:h-[50px] bg-white border-b-2 border-b-gray-600 outline-none mt-2 px-2"
                      />
                    </div>
                    <div className="bg-white space-y-4">
                      <input
                        type="text"
                        placeholder="Last Name"
                        required
                        className="w-full h-12 sm:h-[50px] bg-white border-b-2 border-b-gray-600 outline-none mt-2 px-2"
                      />
                      <input
                        type="text"
                        placeholder="Email"
                        required
                        className="w-full h-12 sm:h-[50px] bg-white border-b-2 border-b-gray-600 outline-none mt-2 px-2"
                      />
                    </div>
                  </div>
                  <div className="p-2 md:p-3 space-y-3 md:space-y-4">
                    <input
                      type="text"
                      placeholder="Company"
                      required
                      className="w-full h-12 sm:h-[50px] bg-white border-b-2 border-b-gray-600 outline-none mt-2 px-2"
                    />
                    <textarea
                      placeholder="How may I help You ?"
                      rows={6}
                      required
                      className="w-full min-h-[120px] bg-white border-b-2 border-b-gray-600 outline-none mt-2 px-2 py-2"
                    ></textarea>
                  </div>
                  <Link href="/contact/form-submit">
                    <span className="rounded-xl px-6 sm:px-10 md:px-20 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-red-400 transition-all ease-out duration-300 block mx-auto mt-2 w-full md:w-auto text-center">
                      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                      <button type="submit" className="font-bold">
                        Submit
                      </button>
                    </span>
                  </Link>
                </form>
              </div>
              <div className="md:col-span-1 lg:col-span-1 bg-gray-800 min-h-[180px] md:min-h-[420px] lg:min-h-[420px] rounded-xl mt-4 md:mt-0">
                <div className="text-white p-4 md:p-5 space-y-6 md:space-y-8 h-full flex flex-col justify-start">
                  <h1 className="text-2xl font-semibold">Contact Info</h1>
                  <p>+123 456 789 </p>
                  <p>Tripi@gmail.com</p>
                  <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-5">
                    <Link
                      href={"#"}
                      className="text-gray-500 hover:text-gray-200 hover:border-gray-200 text-lg rounded-full border-2 p-2 border-gray-500"
                    >
                      {" "}
                      <FaTwitter />{" "}
                    </Link>
                    <Link
                      href={"#"}
                      className="text-gray-500 hover:text-gray-200 hover:border-gray-200 text-lg rounded-full border-2 p-2 border-gray-500"
                    >
                      {" "}
                      <FaFacebook />{" "}
                    </Link>
                    <Link
                      href={"#"}
                      className="text-gray-500 hover:text-gray-200 hover:border-gray-200 text-lg rounded-full border-2 p-2 border-gray-500"
                    >
                      {" "}
                      <FaInstagram />{" "}
                    </Link>
                    <Link
                      href={"#"}
                      className="text-gray-500 hover:text-gray-200 hover:border-gray-200 text-lg rounded-full border-2 p-2 border-gray-500"
                    >
                      {" "}
                      <FaLinkedin />{" "}
                    </Link>
                  </div>
                  <div>
                    <Image
                      src="/images/contact us illustration.jpg"
                      alt=""
                      width={200}
                      height={200}
                      className="mx-auto w-[60%] sm:w-[50%] md:w-[80%] h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px] w-full"></div>
    </>
  );
};

export default ContactUs;
