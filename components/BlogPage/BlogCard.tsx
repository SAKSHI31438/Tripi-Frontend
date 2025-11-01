import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";

type Props = {
  blog: {
    _id: string;
    id?: number;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
    email: string;
    image: string;
  };
};

const BlogCard = ({ blog }: Props) => {
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
    const favorites = JSON.parse(localStorage.getItem("favoriteBlogs") || "[]");
    const isFav = favorites.some((item: any) => item._id === blog._id);
    setFav(isFav);
  }, [blog._id]);

  const handleFav = () => {
    if (!user) {
      toast.error("To add Favorites You need to first Login/Signup!");
    } else {
      let favorites = JSON.parse(localStorage.getItem("favoriteBlogs") || "[]");

      if (!fav) {
        // ✅ Add to favorites (use _id to identify)
        favorites.push({ ...blog, type: "blog" });
        localStorage.setItem("favoriteBlogs", JSON.stringify(favorites));
        toast.success("Added to Favorites!!");
        setFav(true);
      } else {
        // ❌ Remove this specific blog
        favorites = favorites.filter((item: any) => item._id !== blog._id);
        localStorage.setItem("favoriteBlogs", JSON.stringify(favorites));
        toast.info("Removed from Favorites!!");
        setFav(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  };

  const getInitials = (name: string) =>
    (name || "")
      .split(" ")
      .map((s) => s[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const readableDate = new Date(blog.date)
    .toLocaleDateString("en-GB")
    .replace(/\//g, "-");
  return (
    <div>
      <div className="relative w-full aspect-[16/9] bg-gray-50 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 z-20">
          <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {blog.category}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-sm mt-1 line-clamp-2 max-w-[90%]">
              {blog.description}
            </p>
          </div>
        </div>

        <div
          className="absolute top-3 right-3 z-30 bg-white/90 rounded-full p-2 cursor-pointer"
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
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 hover:text-blue-900 transition-colors cursor-pointer">
            {blog.title}
          </h2>
          <p className="mt-2 text-sm text-slate-600">{blog.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center lg:gap-3 gap-2 ">
            <div className="flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-10 w-10  font-semibold ">
              {getInitials(blog.author)}
            </div>
            <div className="lg:text-sm text-xs text-slate-600">
              <div>
                By{" "}
                <span className="font-semibold text-slate-800">
                  {blog.author}
                </span>
              </div>
              <div className="text-xs text-slate-500">{readableDate}</div>
              <div className="text-xs text-slate-500">{blog.email}</div>
            </div>
          </div>

          <Link href={`/blog/${blog._id}`}>
            <button className="inline-flex items-center cursor-pointer text-center lg:w-[100px] w-[80px] lg:px-2 py-2 lg:text-sm px-1 text-xs bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white rounded-md  font-semibold">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
