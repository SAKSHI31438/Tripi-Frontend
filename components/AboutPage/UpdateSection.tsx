import Image from "next/image";
import React from "react";

const UpdateSection = () => {
  return (
    <div className="lg:w-[75%] h-full p-5 mt-[1%] mx-auto w-[98%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 w-full p-2">
        <div className="w-full h-64 md:h-80 lg:h-full col-span-1">
          <Image
            src="/images/Aboutus/pexels-byrahul-1011093.jpg"
            height={400}
            width={300}
            alt="aboutus"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="w-full pt-[5%] col-span-1 md:col-span-1 lg:col-span-2 ">
          <h1 className="pl-3 text-3xl font-bold pt-3 ">
            Get Travel Updates & Stories
          </h1>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div className="col-span-1">
              <Image
                src="/images/Aboutus/pexels-abdulkayum97-19469036.jpg"
                height={100}
                width={200}
                alt="aboutus"
                className="w-full h-40 sm:h-48 md:h-44 lg:h-56 object-cover rounded-lg"
              />
              <h2 className="mt-2 text-md font-semibold text-blue-950">
                Discover Hidden Gems Across The World
              </h2>
              <p className="text-md text-gray-800 mt-2">
                Explore breathtaking locations less traveled by tourists, and
                add something unique to your journey.
              </p>
              <p className="text-md font-semibold mt-2">
                🗓️ December 12, 2025 | 🌍 Travel Tips
              </p>
            </div>
            <div className="col-span-1">
              <Image
                src="/images/Aboutus/pexels-ibrahim-jonathan-217423174-32551472.jpg"
                height={100}
                width={200}
                alt="aboutus"
                className="w-full h-40 sm:h-48 md:h-44 lg:h-56 object-cover rounded-lg"
              />
              <h2 className="mt-2 text-md font-semibold text-blue-950">
                Cultural Experiences That Make Your Trip Memorable
              </h2>
              <p className="text-md text-gray-800 mt-2">
                Dive into local traditions, food, and festivals for a travel
                story worth sharing.
              </p>
              <p className="text-md font-semibold mt-2">
                🗓️ December 3, 2025 | 🎭 Culture
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSection;
