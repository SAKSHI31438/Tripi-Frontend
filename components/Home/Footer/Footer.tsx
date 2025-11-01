import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 mt-5">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p>
            <Link
              href="/about"
              className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950"
            >
              About Us{" "}
            </Link>
          </p>

          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            <Link
              href="/destination"
              className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950"
            >
              Destinations
            </Link>
          </p>
          <p>
            <Link
              href="/blog"
              className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950"
            >
              Blogs
            </Link>
          </p>

          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Gift Crads
          </p>
          <p>
            {" "}
            <Link
              href="/contact"
              className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950"
            >
              Contact Us
            </Link>
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Contact
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Legal Notice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            <Link
              href="/help"
              className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950"
            >
              Privacy Policy
            </Link>
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            <Link
              href="/help"
              className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950"
            >
              Terms & Conditions
            </Link>
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Sitemap
          </p>
        </div>

        <div className="space-y-5">
          <h1 className="text-lg font-bold">Other Services </h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Car Hire
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Activity Finder
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Tour List
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Flight Finder
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Travel Agents
          </p>
        </div>

        <div>
          <h1 className="text-lg font-bold">Contact Us </h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Mobile Number </h1>
            <p className="text-base font-bold text-blue-950 mt-1">
              +012 345 6789
            </p>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Email</h1>
            <p className="text-base font-bold text-blue-950 mt-1">
              Tripi@gmail.com
            </p>
          </div>
          <div className="mt-6 flex gap-5">
            <Link href={"#"} className="text-gray-500 hover:text-gray-800">
              {" "}
              <FaTwitter />{" "}
            </Link>
            <Link href={"#"} className="text-gray-500 hover:text-gray-800">
              {" "}
              <FaFacebook />{" "}
            </Link>
            <Link href={"#"} className="text-gray-500 hover:text-gray-800">
              {" "}
              <FaInstagram />{" "}
            </Link>
            <Link href={"#"} className="text-gray-500 hover:text-gray-800">
              {" "}
              <FaLinkedin />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="py-2 mx-auto  w-full mt-25 flex justify-center">
        <p className="text-sm text-blue-950 mx-auto">
          Copyright © 2025 Tripi . All rights are reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
