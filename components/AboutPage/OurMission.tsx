import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
      <div className="col-span-1 px-4 md:px-6 lg:px-0">
        <div className="h-[300px] w-[100%]">
          {" "}
          <Image
            src="/images/Aboutus/Our Mission.jpg"
            height={100}
            width={200}
            alt="aboutus"
            className="w-[100%] h-[100%] object-cover "
          />
        </div>{" "}
      </div>
      <div className="col-span-1 pt-6 md:pt-10 px-4 md:px-6 lg:px-0">
        {" "}
        <h1 className=" text-blue-950 text-xl sm:text-3xl font-bold">
          Our Mission
        </h1>
        <div className="mt-6 w-full text-justify space-y-2">
          <p className="">
            Our mission at Tripi is to redefine the way people experience
            travel. We aim to make every journey stress-free, inspiring, and
            tailored to individual preferences. Whether you’re an adventurer
            seeking thrills, a family looking for comfort, or a wanderer chasing
            culture and history, we’re here to ensure your journey is memorable.
            We believe that travel has the power to connect people, broaden
            perspectives, and create lifelong stories. That’s why we work
            tirelessly to provide resources, insights, and tools that make
            traveling not only possible but also enjoyable and impactful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
