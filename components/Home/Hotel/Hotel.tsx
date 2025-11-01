import SectionHeading from "@/components/Helper/SectionHeading";
import { hotelsData } from "@/data/data";
import React from "react";
import HotelCard from "./HotelCard";

const Hotel = () => {
  return (
    <div className="pt-10 pb-20 " id="hotel">
      <SectionHeading
        heading="Recommended Hotels"
        para="Stay at top-rated hotels chosen for comfort, location, and great experiences."
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {hotelsData.map((data, i) => {
          return (
            <div
              key={data.id || i}
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 100}`}
            >
              <HotelCard hotel={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;
