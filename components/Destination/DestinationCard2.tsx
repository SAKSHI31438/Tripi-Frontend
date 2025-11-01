"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { toast } from "react-toastify";

type Props = {
  destination: {
    id: number;
    name: string;
    description: string;
    category: string;
    image: string;
    location: string;
    rating: number;
    price: number;
    bestTimeToVisit: string;
  };
};

const DestinationCard2 = ({ destination }: Props) => {
  const [fav, setFav] = useState(false);

  // 🔹 check if already in favorites when card loads
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteDestinations") || "[]"
    );
    const isFav = favorites.some((item: any) => item.id === destination.id);
    setFav(isFav);
  }, [destination.id]);

  const handleFav = () => {
    let favorites = JSON.parse(
      localStorage.getItem("favoriteDestinations") || "[]"
    );

    if (!fav) {
      // ✅ Add to favorites
      favorites.push({ ...destination, type: "destination" });
      localStorage.setItem("favoriteDestinations", JSON.stringify(favorites));
      toast.success("Added to Favorites!!");
      setFav(true);
    } else {
      // ❌ Remove this specific destination
      favorites = favorites.filter((item: any) => item.id !== destination.id);
      localStorage.setItem("favoriteDestinations", JSON.stringify(favorites));
      toast.info("Removed from Favorites!!");
      setFav(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <>
      {" "}
      <div className="col-span-1 relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-white/80 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-slate-800">
            {destination.category}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 right-3 z-20">
          <div className="bg-gradient-to-r from-indigo-600 to-rose-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
            ₹{destination.price}{" "}
            <span className="font-normal text-xs ml-1">/person</span>
          </div>
        </div>

        {/* Favorite Icon */}
        <div
          className="absolute top-3 right-3 z-30 bg-white/90 rounded-full p-2 cursor-pointer shadow"
          onClick={handleFav}
          aria-hidden
        >
          {fav ? (
            <FaHeart className="h-4 w-4 text-red-500" />
          ) : (
            <FaHeart className="h-4 w-4 text-slate-700" />
          )}
        </div>
      </div>
      {/* Details Section */}
      <div className="col-span-3 p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 hover:text-blue-900 transition-colors cursor-pointer">
            {destination.name}
          </h2>
          <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-rose-500"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
            </svg>
            <span>{destination.location}</span>
          </div>

          <p className="mt-3 text-sm text-slate-600 line-clamp-2">
            {destination.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md">
              <FaStar className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-semibold text-slate-800">
                {destination.rating}
              </span>
            </div>
            <div className="text-xs text-slate-500 px-2 py-1 bg-slate-50 rounded-md">
              Best time: {destination.bestTimeToVisit}
            </div>
          </div>

          {/* <Link href={`/destination/${destination.id}`}>
                              <button className="inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-rose-500 to-indigo-600 text-white rounded-md text-sm font-semibold shadow">
                                Explore
                              </button>
                            </Link> */}
        </div>
      </div>
    </>
  );
};

export default DestinationCard2;
