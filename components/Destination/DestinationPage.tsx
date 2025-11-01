"use client";
import { destinationPage, destinationPage2 } from "@/data/data";
import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import Link from "next/link";
import { CircleAlert, MoveLeft } from "lucide-react";
import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa6";
import DestinationCard2 from "./DestinationCard2";
import SectionHeading from "../Helper/SectionHeading";

const DestinationPage = () => {
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinationPage);
  const [filteredDestinations2, setFilteredDestinations2] =
    useState(destinationPage2);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      const query = search.trim().toLowerCase();

      if (query === "") {
        setFilteredDestinations(destinationPage);
        setFilteredDestinations2(destinationPage2);
      } else {
        const filtered1 = destinationPage.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
        const filtered2 = destinationPage2.filter((item) =>
          item.name.toLowerCase().includes(query)
        );
        setFilteredDestinations(filtered1);
        setFilteredDestinations2(filtered2);
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  useEffect(() => {
    // 🔹 extract unique categories from local array
    const allCategories = [
      ...new Set([
        ...destinationPage.map((d) => d.category),
        ...destinationPage2.map((d) => d.category),
      ]),
    ];
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredDestinations(destinationPage);
      setFilteredDestinations2(destinationPage2);
    } else {
      const filtered1 = destinationPage.filter(
        (item) => item.category === selectedCategory
      );
      const filtered2 = destinationPage2.filter(
        (item) => item.category === selectedCategory
      );

      setFilteredDestinations(filtered1);
      setFilteredDestinations2(filtered2);
    }
  }, [selectedCategory]);

  return (
    <>
      <div>
        <div className="relative h-[300px] w-[100%] bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950"></div>
        <div className="absolute top-50 left-10 flex gap-3 text-white items-center justify-center">
          <Link href="/">
            <MoveLeft className="w-10 h-7" />
          </Link>

          <h1 className=" text-2xl font-bold  text-white uppercase">
            Popular Destinations
          </h1>
        </div>
        <div className="mt-[2%] lg:w-[80%] w-[90%] mx-auto">
          <div className="mt-[2%] mb-[2%]  lg:w-[70%] w-[90%] mx-auto">
            <p className="text-center italic">
              🌍 “Discover breathtaking destinations crafted just for your next
              adventure.”
            </p>
          </div>
          <div className="lg:w-[96%] w-[90%] mx-auto lg:flex justify-between gap-3">
            <input
              type="text"
              placeholder="Search Destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 w-full p-2 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 h-[42px] w-full sm:w-[25%] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {filteredDestinations.length === 0 &&
          filteredDestinations2.length === 0 ? (
            <div>
              <CircleAlert className="text-gray-600 mx-auto h-[150px] w-[150px] text-center text-2xl" />
              <h1 className="text-center text-red-800 italic text-lg mt-[3%] mb-[5%]">
                No result found of your search
              </h1>
            </div>
          ) : (
            <div>
              <div className="mb-8 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 p-5 ">
                {filteredDestinations.map((destination) => {
                  return (
                    <div key={destination.id} className="col-span-1">
                      <DestinationCard destination={destination} />
                    </div>
                  );
                })}
              </div>

              <div>
                <h1 className="text-xl sm:text-3xl text-blue-950 font-bold ml-4 mb-2">
                  Most Visited Destinations
                </h1>
                {filteredDestinations2.map((destination) => {
                  return (
                    <div
                      key={destination.id}
                      className="grid lg:grid-cols-4 grid-cols-1 mb-4 p-3 ml-2"
                    >
                      <DestinationCard2 destination={destination} />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DestinationPage;
