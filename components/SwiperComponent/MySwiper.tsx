import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import modules if needed

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay"; // Import specific module styles
import { moreTravelerStories, travelerStories } from "@/data/data";
import SectionHeading from "../Helper/SectionHeading";
import {
  FaLocationArrow,
  FaLocationPin,
  FaMapLocation,
  FaUser,
} from "react-icons/fa6";
import Image from "next/image";

const MySwiper = () => {
  return (
    <>
      <div className="mt-10 cursor-pointer">
        <SectionHeading
          heading="Our Recent Traveler's Stories"
          para="Real journeys, real memories, shared by our travelers."
        />
        <div className="mt-10 mb-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={4000}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 }, // sm: ≥640px
              768: { slidesPerView: 2, spaceBetween: 30 }, // md: ≥768px
              1024: { slidesPerView: 3, spaceBetween: 40 }, // lg: ≥1024px
            }}
            onSwiper={(swiper) => console.log(swiper)}
            className="mt-5 mb-10 "
          >
            {travelerStories.map((story, i) => {
              return (
                <div key={story.id || i}>
                  <SwiperSlide className="w-[100px] border-2 border-gray-300 rounded-lg text-sm">
                    <div className="grid grid-cols-4">
                      <div className="col-span-1">
                        <Image
                          src={story.image}
                          height={50}
                          width={50}
                          alt={story.title}
                          className="w-full h-full object-fit rounded-bl-lg rounded-tl-lg overflow-clip"
                        />
                      </div>
                      <div className="col-span-3 py-2 px-3">
                        <p className="font-semibold">
                          <FaUser className="inline-flex text-gray-700" />{" "}
                          {story.traveler}
                        </p>
                        <h1 className="text-blue-950 font-semibold">
                          {story.title}
                        </h1>
                        <p className="text-gray-800 text-xs">{story.story}</p>
                        <p>
                          <FaLocationPin className="inline-flex text-gray-700" />{" "}
                          {story.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: true,
            }}
            speed={4000}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 }, // sm: ≥640px
              768: { slidesPerView: 2, spaceBetween: 30 }, // md: ≥768px
              1024: { slidesPerView: 3, spaceBetween: 40 }, // lg: ≥1024px
            }}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {moreTravelerStories.map((story, i) => {
              return (
                <div key={story.id || i}>
                  <SwiperSlide className=" w-[100px] border-2 border-gray-300 rounded-lg text-sm">
                    <div className="grid grid-cols-4">
                      <div className="col-span-1 ">
                        <Image
                          src={story.image}
                          height={50}
                          width={50}
                          alt={story.title}
                          className="w-full h-full object-fit rounded-bl-lg rounded-tl-lg overflow-clip"
                        />
                      </div>
                      <div className="col-span-3 py-2 px-3">
                        <p className="font-semibold">
                          <FaUser className="inline-flex text-gray-700" />{" "}
                          {story.traveler}
                        </p>
                        <h1 className="text-blue-950 font-semibold">
                          {story.title}
                        </h1>
                        <p className="text-gray-800 text-xs">{story.story}</p>
                        <p>
                          <FaLocationPin className="inline-flex text-gray-700" />{" "}
                          {story.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MySwiper;
