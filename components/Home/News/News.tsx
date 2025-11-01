import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-26 pb-16">
      <SectionHeading
        heading="Exiciting Travel News for You "
        para="Stay updated with the latest travel trends."
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20 ">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 Places to visit in australia"
            date="13 May 2023"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 Places to visit in New York"
            date="23 May 2023"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCard
            image="/images/n3.jpg"
            title="Top 10 Places to visit in Dubai"
            date="16 August 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 Places to visit in Singapore"
            date="31 August 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
