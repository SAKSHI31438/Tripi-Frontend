import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center">
      <div className="col-span-1 pt-6 md:pt-10 px-4 md:px-6 lg:px-0">
        <h1 className="text-blue-950 text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left">
          Who We Are
        </h1>
        <div className="mt-4 md:mt-6 w-full text-justify space-y-3 md:space-y-2">
          <p className="text-sm md:text-base lg:text-base">
            At Tripi, we are a team of travel enthusiasts who believe that every
            journey should be as unique as the traveler. We know that exploring
            the world isn’t just about visiting popular attractions – it’s about
            finding those hidden gems, tasting authentic flavors, and making
            connections that last a lifetime. With a blend of technology,
            creativity, and passion for exploration, we’ve built a platform that
            helps travelers plan smarter, discover more, and enjoy every step of
            their adventure. Our vision is to be the go-to travel companion that
            makes exploring the world simpler, exciting, and meaningful.
          </p>
        </div>
      </div>
      <div className="col-span-1 px-4 md:px-6 lg:px-0">
        <div className="w-full h-44 sm:h-56 md:h-72 lg:h-80 overflow-hidden rounded-lg">
          <Image
            src="/images/Aboutus/who we are.jpg"
            height={400}
            width={800}
            alt="aboutus"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
