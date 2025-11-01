import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
// @ts-ignore: no declaration file for css side-effect import
import "react-toastify/dist/ReactToastify.css";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: Props) => {
  const [fav, setFav] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // console.log(localStorage.getItem("user"));

    const storedUser = localStorage.getItem("user") || null;

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔹 check if already in favorites when card loads
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favoriteHotels") || "[]"
    );
    const isFav = favorites.some((item: any) => item.id === hotel.id);
    setFav(isFav);
  }, [hotel.id]);

  const handleFav = () => {
    if (!user) {
      toast.error("To add Favorites You need to first Login/Signup!");
    } else {
      let favorites = JSON.parse(
        localStorage.getItem("favoriteHotels") || "[]"
      );

      if (!fav) {
        // ✅ Add to favorites
        favorites.push({ ...hotel, type: "hotel" });
        localStorage.setItem("favoriteHotels", JSON.stringify(favorites));
        toast.success("Added to Favorites!!");
        setFav(true);
      } else {
        // ❌ Remove from favorites
        favorites = favorites.filter((item: any) => item.id !== hotel.id);
        localStorage.setItem("favoriteHotels", JSON.stringify(favorites));
        toast.info("Removed from Favorites!!");
        setFav(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
    // setFav(!fav);
    // console.log(fav);
    // toast.success("Added to Favorite!!");
  };
  return (
    <>
      <div>
        <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
          <div
            className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col"
            onClick={handleFav}
          >
            {!user ? (
              <FaHeart className="h-4 w-4" />
            ) : fav ? (
              <FaHeart className="h-4 w-4 text-red-500" />
            ) : (
              <FaHeart className="h-4 w-4" />
            )}
          </div>
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
          <Image
            src={hotel.image}
            alt={hotel.name}
            width={500}
            height={500}
            className="overflow-hidden h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div>
          <h1 className="mt-4 text-md font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200">
            {hotel.name}
          </h1>
          <p className="text-sm text-gray-600 mt-3 font-medium mb-4">
            {hotel.location}
          </p>
          <div className="flex items-center space-x-2">
            <div className="px-2 py-2 bg-blue-800 rounded-md font-bold text-white text-xs flex items-center gap-1">
              <p>{hotel.rating} </p>
              <span>
                <BsStarFill className="w-3 h-3 text-yellow-400" />
              </span>
            </div>
            <p className="text-sm text-gray-800">Exceptional </p>
            <p className="text-sm font-bold text-gray-800">
              {hotel.reviews} Reviews{" "}
            </p>
          </div>
          <p className="mt-3 text-gray-700 font-medium">
            Starting from{" "}
            <span className="text-blue-600 font-bold">US${hotel.price}</span>{" "}
          </p>
        </div>
      </div>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default HotelCard;
