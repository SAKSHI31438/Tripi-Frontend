"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Blog } from "../BlogPage/BlogPage";
import Link from "next/link";
import { FaEnvelope, FaHeart, FaUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import { CircleAlert, MoveLeft } from "lucide-react";
import { useParams } from "next/navigation";
import MySkeleton from "../Helper/MySkeleton";

const MyBlogsPage = () => {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);
  const params = useParams();
  const id = params.id;

  const getInitials = (name: string) =>
    (name || "")
      .split(" ")
      .map((s) => s[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  // console.log(user);
  // console.log(user._id);

  useEffect(() => {
    if (!user) return;
    const fetchBlogs = async () => {
      console.log(user);

      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/user-blogs/${user._id}`
          // `http://localhost:5000/api/blog/user-blogs/68bfd87738ab0d6d5ef1ce32`
        );
        console.log(res);

        setAllBlogs(res.data.data); // setAllBlogs use karo
        setIsFetching(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, [user]);

  console.log(allBlogs);

  return (
    <>
      <div>
        <div className="relative h-[300px] w-[100%] bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950"></div>
        <div className="absolute top-50 left-10 flex gap-3 text-white items-center justify-center">
          <Link href="/">
            <MoveLeft className="w-10 h-7" />
          </Link>

          <h1 className=" text-2xl font-bold  text-white uppercase">
            My Blogs
          </h1>
        </div>
        <div className="mt-[2%] lg:w-[70%] w-[90%] mx-auto">
          <p className="text-center italic">Hey there, writer! ✍️</p>
          <p className="text-center italic">
            This is your personal space where all your blogs live. Create new
            posts, update your old ones, or manage your published content — all
            in one place. Your words have the power to inspire, so keep writing!
          </p>
        </div>
        {isFetching == true ? (
          <div className="w-[90%] mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {Array.from({ length: allBlogs.length || 8 }).map((_, index) => (
              <MySkeleton key={index} />
            ))}
          </div>
        ) : !allBlogs || allBlogs?.length === 0 ? (
          <div className="mx-auto w-full text-center">
            <CircleAlert className="text-gray-600 mx-auto mt-[5%] h-[150px] w-[150px] text-center text-2xl" />
            <h1 className=" text-red-800 italic text-lg  mb-[2%] text-center">
              You've not authored any blogs yet. Start sharing your stories
            </h1>
            <Link
              href={`/blog/addNewBlog`}
              className="text-center rounded mx-auto px-14 md:px-28 mt-2 py-2.5  group bg-rose-600 hover:bg-gradient-to-r hover:from-red-500
                        hover:to-red-400 text-white  hover:ring-red-400 transition-all ease-out duration-300"
            >
              <span
                className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12
                        group-hover:-translate-x-40 ease "
              ></span>
              <span className="relative font-bold">Add Your Blog</span>
            </Link>
          </div>
        ) : (
          <div className="mt-[2%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
            {allBlogs?.map((blog) => {
              const readableDate = new Date(blog.date)
                .toLocaleDateString("en-GB")
                .replace(/\//g, "-");
              return (
                <article
                  key={blog._id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                >
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

                    {/* <div className="absolute top-3 right-3 z-30 bg-white/90 rounded-full p-2 ">
                      <FaHeart className="h-4 w-4" />
                    </div> */}
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900 hover:text-blue-900 transition-colors cursor-pointer">
                        {blog.title}
                      </h2>
                      <p className="mt-2 text-sm text-slate-600">
                        {blog.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-10 w-10 font-semibold">
                          {getInitials(blog.author)}
                        </div>
                        <div className="lg:text-sm text-xs text-slate-600">
                          <div>
                            By{" "}
                            <span className="font-semibold text-slate-800">
                              {blog.author}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500">
                            {readableDate}
                          </div>
                          <div className="text-xs text-slate-500">
                            {blog.email}
                          </div>
                        </div>
                      </div>

                      <Link href={`/myBlogs/${blog._id}`}>
                        <button className="inline-flex cursor-pointer items-center text-center lg:w-[100px] w-[80px] lg:px-2 py-2 lg:text-sm px-1 text-xs bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white rounded-md  font-semibold">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MyBlogsPage;
