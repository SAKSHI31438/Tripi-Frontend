import Image from "next/image";
import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
      <div className="col-span-1 pt-6 md:pt-10 px-4 md:px-6 lg:px-0">
        {" "}
        <h1 className=" text-blue-950 text-xl sm:text-3xl font-bold">
          What We Offer
        </h1>
        <div className="mt-6 w-full text-justify space-y-2">
          <p className="">
            At Tripi, we go beyond the basics of trip planning to bring you an
            all-in-one travel experience. Our platform offers everything you
            need to explore the world effortlessly – from personalized
            itineraries and hidden gems to reliable recommendations and easy
            booking options. We curate travel guides, insider tips, and real
            experiences to help you discover places that fit your style – be it
            budget-friendly getaways, luxurious retreats, or adventurous offbeat
            paths. Every service we provide is designed to make travel planning
            less overwhelming and the journey itself more exciting, fulfilling,
            and seamless.
          </p>
        </div>
      </div>
      <div className="col-span-1 px-4 md:px-6 lg:px-0">
        <div className="h-[300px] w-[100%]">
          {" "}
          <Image
            src="/images/Aboutus/what we offer.jpg"
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

export default WhatWeOffer;
