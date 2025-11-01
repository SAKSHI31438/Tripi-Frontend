import Image from "next/image";
import React from "react";
import FeatureSectionAbout from "./FeatureSectionAbout";

const MainSectionAbout = () => {
  return (
    <>
      <div className="w-[90%] h-full p-5 mt-[1%] mx-auto">
        <div className="">
          <p className="italic text-md text-justify">
            Explore. Dream. Discover. From hidden gems to world-famous
            landmarks, we bring you journeys that go beyond sightseeing. Every
            trip is carefully designed to make your travel effortless,
            memorable, and truly inspiring. Whether you are chasing adventure,
            relaxation, or cultural immersion, your perfect getaway begins here.
          </p>
        </div>
        <div className=" mt-10">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
            <div className="col-span-1 ">
              <h1 className=" text-blue-950 text-xl sm:text-3xl font-bold">
                We Create Memorable Journeys And Travel Experiences, Designed
                Just For You
              </h1>
            </div>
            <div className="col-span-1  lg:text-right sm:text-center text-gray-500 lg:mx-0 sm:mx-auto ">
              <div className="lg:flex-none sm:flex sm:flex-col sm:justify-center lg:text-right sm:text-center">
                <p>Reliable Service</p>
                <p>Trusted Guidance </p>
                <p>Memories To Cherish</p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 sm:grid-cols-1 gap-2 lg:h-[400px] sm:h-[200px] pt-3 ">
            <div className="col-span-2 pt-5 pr-5">
              <p className="font-medium">✈️ Affordable Packages </p>
              <p className="font-medium">🌍 Exclusive Destinations</p>
              <div className="mt-6 w-full text-justify space-y-2">
                <p className="">
                  At Tripi, we believe traveling is not just about reaching a
                  destination—it’s about living the journey. Our team is
                  dedicated to crafting unique itineraries, seamless bookings,
                  and unforgettable adventures. Whether you’re looking for a
                  peaceful getaway, an adventurous trip, or a cultural
                  exploration, we make sure every detail is taken care of. With
                  us, you don’t just travel—you create memories that last a
                  lifetime.
                </p>
                <p>
                  Our mission is simple: to turn your travel dreams into
                  reality. With unmatched expertise, affordable pricing, and
                  24/7 support, we ensure your journey is as smooth as it is
                  exciting.
                </p>
              </div>
            </div>
            <div className="col-span-3 text-right flex lg:justify-end pt-4 pb-4 lg:pl-4">
              <Image
                src="/images/Aboutus/aboutus 1 image.jpg"
                height={400}
                width={500}
                alt="aboutus"
                className="lg:w-[90%] sm:w-[100%] h-[70%] object-cover lg:text-right rounded-md flex items-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSectionAbout;
