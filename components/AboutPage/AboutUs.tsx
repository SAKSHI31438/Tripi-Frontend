"use client";
import React, { useEffect } from "react";
import MainSectionAbout from "./MainSectionAbout";
import FeatureSectionAbout from "./FeatureSectionAbout";
import UpdateSection from "./UpdateSection";
import AboutSection from "./AboutSection";
import FAQ from "./FAQ";
import Aos from "aos";

const AboutUs = () => {
  return (
    <>
      <div className="h-full">
        <div className="relative w-full h-[120vh] sm:h-[100vh]">
          <div className="absolute top-0 left-0  w-full h-full bg-gray-800 opacity-70"></div>
          <video
            src="/images/about us page vid.mp4"
            autoPlay
            muted
            loop
            preload="metadata"
            className="w-full h-full object-cover"
          />
          <div className="absolute z-[100] w-full h-full top-[50%] left-[55%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex  justify-center flex-col w-full h-full">
              <div>
                <h1 className="text-[25px] mb-4 md:mb-0 md:text-[35px] lg:text-[45px] uppercase font-bold text-white tracking-[0.7rem]">
                  Discover
                </h1>
                <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] uppercase text-white  tracking-[0.7rem]"></h1>
                <p className="md:text-base text-lg text-white font-normal [word-spacing:1px]">
                  From hidden gems to world-famous destinations, we make your
                  journey effortless and memorable
                </p>
              </div>
            </div>
          </div>
        </div>
        <MainSectionAbout />
        <FeatureSectionAbout />
        <UpdateSection />
        <AboutSection />
        <FAQ />
      </div>
    </>
  );
};

export default AboutUs;
