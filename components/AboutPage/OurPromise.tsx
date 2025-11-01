import Image from "next/image";
import React from "react";

const OurPromise = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
      <div className="col-span-1 pt-6 md:pt-10 px-4 md:px-6 lg:px-0">
        {" "}
        <h1 className=" text-blue-950 text-xl sm:text-3xl font-bold">
          Our Promise
        </h1>
        <div className="mt-6 w-full text-justify space-y-2">
          <p className="">
            At Tripi, our promise is simple: to make every journey meaningful
            and effortless. We are committed to helping travelers not just reach
            destinations but also experience them in their truest form. Every
            trip planned with us comes with the assurance of quality, trust, and
            reliability. We promise to keep your journeys stress-free, provide
            you with authentic experiences, and inspire you to explore places
            you’ve never imagined. Our team is constantly improving, listening
            to travelers, and innovating to make sure that every adventure with
            Tripi is one you’ll cherish forever.
          </p>
        </div>
      </div>
      <div className="col-span-1 px-4 md:px-6 lg:px-0">
        <div className="h-[300px] w-[100%]">
          {" "}
          <Image
            src="/images/Aboutus/Our promise.jpg"
            height={100}
            width={200}
            alt="aboutus"
            className="w-[100%] h-[100%] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
