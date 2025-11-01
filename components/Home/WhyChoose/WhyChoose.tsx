import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      <SectionHeading
        heading="Why Choose Us?"
        para="Your trusted partner for seamless travel"
      />
      <div className="grid w-[80%] mx-auto grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/c1.svg"
            title="Best Price Guarantee"
            des="Enjoy unbeatable deals on every booking — we ensure you get the best value for your money without hidden charges."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy and Quick Booking"
            des="Plan your trip in just a few clicks! Our smooth and secure booking process saves your time and effort."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="Customer Care 24/7"
            des="Our support team is available round the clock to help you with any queries — anytime, anywhere."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
