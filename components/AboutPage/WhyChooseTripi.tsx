import Image from "next/image";
import React from "react";

const WhyChooseTripi = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
      <div className="col-span-1 px-4 md:px-6 lg:px-0">
        <div className="h-[300px] w-[100%]">
          {" "}
          <Image
            src="/images/Aboutus/why choose tripi.jpg"
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
          Why Choose Tripi
        </h1>
        <div className="mt-6 w-full text-justify space-y-2">
          <p className="">
            Choosing Tripi means choosing convenience, trust, and authenticity.
            We don’t just help you book trips; we help you create journeys worth
            remembering. Our focus on personalization ensures that every
            traveler gets a trip designed around their unique interests and
            pace. With authentic local insights, we guide you beyond crowded
            tourist spots and into experiences that feel real and unforgettable.
            Our seamless planning tools, verified recommendations, and
            commitment to safety give you peace of mind at every step. With
            Tripi, you don’t just travel – you explore with confidence,
            excitement, and purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTripi;
