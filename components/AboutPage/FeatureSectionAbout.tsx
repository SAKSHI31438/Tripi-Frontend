import Image from "next/image";
import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoIosPricetags } from "react-icons/io";

const FeatureSectionAbout = () => {
  return (
    <div className="lg:mt-10 w-full h-[30%]  grid lg:grid-cols-4 sm:grid-cols-1 sm:mt-3">
      <div className="col-span-1">
        <Image
          src="/images/Aboutus/pexels-adriana-gonzaga-98048288-11801535.jpg"
          height={100}
          width={200}
          alt="aboutus"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="col-span-1 lg:border-r-2 border-b-2 lg:border-r-gray-100 border-b-gray-100 cursor-pointer relative group overflow-hidden">
        <div className="bg-teal-500 w-full h-full absolute inset-0 z-20 transform translate-y-0 group-hover:translate-y-full transition-transform duration-800 ease-in-out">
          <div className="flex flex-col w-full h-full items-center justify-center text-white p-4">
            <FaMapLocation className="w-20 h-20 text-white mb-3" />
            <h1 className="text-lg mb-3">✈️Travel Guide</h1>
            <p className="text-center text-xs pl-3 pr-3">
              Get expert advice and insider tips to explore destinations like a
              local. We guide you every step of the way for a stress-free
              experience.
            </p>
          </div>
        </div>
        <Image
          src="/images/Aboutus/pexels-dashingvinit-13294059.jpg"
          height={100}
          width={200}
          alt="aboutus"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="col-span-1 lg:border-r-2 border-b-2 lg:border-r-gray-100 border-b-gray-100 cursor-pointer relative group overflow-hidden">
        <div className="bg-teal-500 w-full h-full absolute inset-0 z-20 transform translate-y-0 group-hover:translate-y-full transition-transform duration-800 ease-in-out">
          <div className="flex flex-col w-full h-full items-center justify-center text-white p-4">
            <AiFillSafetyCertificate className="w-20 h-20 text-white mb-3" />
            <h1 className="text-lg mb-3">🛡️ Safety First</h1>
            <p className="text-center text-xs pl-3 pr-3">
              Your safety is our top priority. From trusted partners to verified
              accommodations, we ensure worry-free travel wherever you go.
            </p>
          </div>
        </div>
        <Image
          src="/images/Aboutus/pexels-spencer-4388287.jpg"
          height={100}
          width={200}
          alt="aboutus"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="col-span-1  lg:border-r-gray-100 sm:border-b-gray-100 cursor-pointer relative group overflow-hidden">
        <div className="bg-teal-500 w-full h-full absolute inset-0 z-20 transform translate-y-0 group-hover:translate-y-full transition-transform duration-800 ease-in-out">
          <div className="flex flex-col w-full h-full items-center justify-center text-white p-4">
            <IoIosPricetags className="w-20 h-20 text-white mb-3" />
            <h1 className="text-lg mb-3">💰 Clear Pricing</h1>
            <p className="text-center text-xs pl-3 pr-3">
              No hidden charges, no surprises. Our packages are transparent and
              budget-friendly, designed to give you the best value for your
              money.
            </p>
          </div>
        </div>
        <Image
          src="/images/Aboutus/pexels-saizstudio-19798779.jpg"
          height={100}
          width={200}
          alt="aboutus"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default FeatureSectionAbout;
