import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const FormSubmit = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center lg:mt-[15%] lg:mb-[25%] ">
      <Link
        href={"/contact"}
        className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center
                          absolute top-[10%] left-[10%] focus:outline-none"
      >
        <FaArrowLeft />
      </Link>
      <h1 className="text-blue-950 text-xl font-bold lg:mt-0 lg:ml-0 lg:mr-0 mt-[40%] ml-4 mr-4 text-center">
        Thanks for contacting us! Our team will review your message and respond
        as soon as possible.
      </h1>
      <Link href="/">
        <span
          className="rounded-xl px-14 md:px-28  py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500
                      hover:to-red-400 text-white  hover:ring-red-400 transition-all ease-out duration-30 mt-10"
        >
          <span
            className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12
                      group-hover:-translate-x-40 ease "
          ></span>
          <button type="submit" className=" font-bold">
            Back to Home
          </button>
        </span>
      </Link>
    </div>
  );
};

export default FormSubmit;
