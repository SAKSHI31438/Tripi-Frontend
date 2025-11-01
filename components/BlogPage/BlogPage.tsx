"use client";
import { blogData } from "@/data/data";
import axios, { all } from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import {
  FaCalendar,
  FaCalendarDay,
  FaEnvelope,
  FaHeart,
  FaUser,
} from "react-icons/fa6";
// import Pagination from "../Helper/Pagination";
import { ToastContainer, toast } from "react-toastify";
import BlogCard from "./BlogCard";
import MySkeleton from "../Helper/MySkeleton";
import { CircleAlert } from "lucide-react";

export type Blog = {
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

const BlogPage = () => {
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]); // searched blogs
  const [search, setSearch] = useState("");

  // const [blogs, setBlogs] = useState<Blog[]>(allBlogs);
  // blogs.sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  // console.log(blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/AllBlogs`
        );
        setAllBlogs(res.data.data); // setAllBlogs use karo
        setFilteredBlogs(res.data.data);
        setIsFetching(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);
  console.log("Blogs fetched:", allBlogs);
  // console.log(allBlogs[0]?.image);
  // useEffect(() => {
  //   setBlogs(allBlogs);
  // }, [allBlogs]);
  useEffect(() => {
    const delay = setTimeout(() => {
      const query = search.trim().toLowerCase();

      if (query === "") {
        setFilteredBlogs(allBlogs);
      } else {
        const filtered = allBlogs.filter((blog) =>
          blog.title.toLowerCase().includes(query)
        );
        setFilteredBlogs(filtered);
      }
    }, 400); // <- delay time (400ms recommended)

    // ❌ Clean up (to cancel previous timer)
    return () => clearTimeout(delay);
  }, [search, allBlogs]); // runs when user types or blogs change

  return (
    <>
      <div className="relative w-full h-[120vh] sm:h-[100vh]">
        {/* <div className="absolute top-0 left-0  w-full h-[90%] bg-gradient-to-tl from-black via-slate-900 to-black "></div> */}

        {/* <div className="absolute z-[100] w-full h-full top-[50%] left-[70%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-center flex-col w-full h-full">
            <div data-aos="fade-up">
              <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] uppercase text-white font-bold tracking-[0.7rem]">
                Blog
              </h1>
              <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">
                Get the best price on 2,00,000+ properties , worldwide{" "}
              </p>
            </div>
          </div>
        </div> */}
        <div className="absolute top-0 left-0  w-full h-full bg-gray-800 opacity-50"></div>
        <video
          src="/images/blog-page-video.mp4"
          autoPlay
          muted
          loop
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-center flex-col w-full h-full">
            <div>
              <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] uppercase text-white font-bold tracking-[0.7rem]">
                Explore the World
              </h1>
              <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:2px]">
                Discover inspiring travel stories, hidden gems, and tips to make
                your journeys unforgettable.
              </p>
            </div>
            <Link
              href={`/blog/addNewBlog`}
              className="rounded px-14 md:px-28 mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500
            hover:to-red-400 text-white  hover:ring-red-400 transition-all ease-out duration-300"
            >
              <span
                className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12
            group-hover:-translate-x-40 ease "
              ></span>
              <span className="relative font-bold">Add Your Blog</span>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="mt-5 mb-3 text-3xl font-semibold mx-auto uppercase tracking-[0.3rem] text-center">
        {" "}
        Let's Blog
      </h1>
      <div className="w-[90%] mx-auto">
        <input
          type="text"
          placeholder="Search by blog title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 w-full p-2 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {isFetching == true ? (
        <div className="w-[90%] mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {Array.from({ length: allBlogs.length || 8 }).map((_, index) => (
            <MySkeleton key={index} />
          ))}
        </div>
      ) : !allBlogs || allBlogs?.length === 0 ? (
        <div>
          <CircleAlert className="text-gray-600 mx-auto h-[150px] w-[150px] text-center text-2xl" />
          <h1 className="text-center text-red-800 italic text-lg mt-[3%] mb-[5%]">
            No Blogs Available
          </h1>
        </div>
      ) : filteredBlogs.length === 0 ? (
        // ⚪ NO SEARCH RESULTS FOUND
        <div>
          <CircleAlert className="text-gray-600 mx-auto h-[120px] w-[120px] text-center" />
          <h1 className="text-center text-gray-700 italic text-lg mt-3 mb-[5%]">
            No results found for your search.
          </h1>
        </div>
      ) : (
        <div>
          <div className="mt-8 mb-5 w-[92%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {(() => {
              // sort blogs by date descending (most recent first)
              const sorted = [...filteredBlogs].sort((a, b) => {
                const da = Date.parse(a.date ?? "");
                const db = Date.parse(b.date ?? "");
                if (Number.isNaN(da) || Number.isNaN(db)) return 0; // keep order if invalid
                return db - da;
              });
              return sorted.map((blog) => (
                <article
                  key={blog._id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  <BlogCard blog={blog} />
                </article>
              ));
            })()}
          </div>
          {/* <Pagination /> */}
        </div>
      )}
    </>
  );
};

export default BlogPage;
