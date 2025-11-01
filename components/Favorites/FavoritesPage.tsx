"use client";
import { useEffect, useState } from "react";
import HotelCard from "../Home/Hotel/HotelCard";
import { CircleAlert, MoveLeft } from "lucide-react";
import Link from "next/link";
import BlogCard from "../BlogPage/BlogCard";
import DestinationCard from "../Destination/DestinationCard";

const FavoritesPage = () => {
  const [favoriteHotels, setFavoriteHotels] = useState<any[]>([]);
  const [favoriteBlogs, setFavoriteBlogs] = useState<any[]>([]);
  const [favoriteDestination, setFavoriteDestination] = useState<any[]>([]);

  useEffect(() => {
    const savedHotels = JSON.parse(
      localStorage.getItem("favoriteHotels") || "[]"
    );
    const savedBlogs = JSON.parse(
      localStorage.getItem("favoriteBlogs") || "[]"
    );
    const savedDestination = JSON.parse(
      localStorage.getItem("favoriteDestinations") || "[]"
    );
    setFavoriteHotels(savedHotels);
    setFavoriteBlogs(savedBlogs);
    setFavoriteDestination(savedDestination);
  }, []);
  const hasFavorites =
    favoriteHotels.length > 0 ||
    favoriteBlogs.length > 0 ||
    favoriteDestination.length > 0;
  return (
    <>
      <div>
        <div className="relative h-[300px] w-[100%] bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950"></div>
        <div className="absolute top-50 left-10 flex gap-3 text-white items-center justify-center">
          <Link href="/">
            <MoveLeft className="w-10 h-7" />
          </Link>

          <h1 className=" text-2xl font-bold  text-white uppercase">
            My Favorites
          </h1>
        </div>
        <div className="p-6 w-[90%] mx-auto">
          {!hasFavorites ? (
            <div className="text-center mx-auto">
              <CircleAlert className="text-gray-600 mx-auto h-[150px] w-[150px] text-center text-2xl" />
              <p className="text-gray-600 text-center text-2xl">
                No favorites added yet!!
              </p>
              <Link
                href="/"
                className="p-2 mt-5 mb-10 mx-auto w-[200px] bg-blue-900 text-white rounded-lg flex items-center  justify-center hover:bg-blue-950 text-center"
              >
                Start Exploring...
              </Link>
            </div>
          ) : (
            <div>
              <p className="italic text-center mt-5 mb-5 text-xl">
                ⭐Nothing saved for later… time to explore and choose!🌍
              </p>
              {/* Hotels Section */}
              {favoriteHotels.length > 0 && (
                <>
                  <div className="w-full lg:flex flex-none lg:mt-0 mt-2 justify-between items-center pt-3 pb-5 ">
                    <h2 className="lg:text-2xl text-xl font-semibold text-blue-900 ">
                      🏨 Favorite Hotels
                    </h2>
                    <Link
                      href="/#hotel"
                      className="p-2 h-[40px] w-[200px] lg:mt-0 mt-3 bg-blue-900 text-white rounded-lg flex items-center  justify-center hover:bg-blue-950 text-center"
                    >
                      Explore Hotels
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {favoriteHotels.map((hotel) => (
                      <HotelCard key={hotel.id} hotel={hotel} />
                    ))}
                  </div>
                </>
              )}
              {/* Blogs Section */}
              {favoriteBlogs.length > 0 && (
                <>
                  <div className="w-full lg:flex flex-none justify-between items-center pt-3 pb-5 mt-10">
                    <h2 className="lg:text-2xl text-xl font-semibold text-blue-900 ">
                      ✍️ Favorite Blogs
                    </h2>
                    <Link
                      href="/blog"
                      className="p-2 h-[40px] w-[200px] lg:mt-0 mt-3 bg-blue-900 text-white rounded-lg flex items-center  justify-center hover:bg-blue-950 text-center"
                    >
                      Explore Blogs
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {favoriteBlogs.map((blog) => (
                      <article
                        key={blog._id}
                        className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                      >
                        <BlogCard key={blog._id} blog={blog} />
                      </article>
                    ))}
                  </div>
                </>
              )}

              {favoriteDestination.length > 0 && (
                <>
                  <div className="w-full lg:flex flex-none justify-between items-center pt-3 pb-5 mt-10">
                    <h2 className="lg:text-2xl text-xl font-semibold text-blue-900 ">
                      ✍️ Favorite Destinations
                    </h2>
                    <Link
                      href="/destination"
                      className="p-2 h-[40px] w-[200px] lg:mt-0 mt-3 bg-blue-900 text-white rounded-lg flex items-center  justify-center hover:bg-blue-950 text-center"
                    >
                      Explore Destinations
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {favoriteDestination.map((destination) => (
                      <div key={destination.id} className="col-span-1">
                        <DestinationCard destination={destination} />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesPage;
