import React from "react";
import WhoWeAre from "./WhoWeAre";
import OurMission from "./OurMission";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseTripi from "./WhyChooseTripi";
import OurPromise from "./OurPromise";

const AboutSection = () => {
  return (
    <div className="w-[90%] h-full p-5 mt-[2%] mx-auto ">
      <WhoWeAre />
      <OurMission />
      <WhatWeOffer />
      <WhyChooseTripi />
      <OurPromise />
    </div>
  );
};

export default AboutSection;
