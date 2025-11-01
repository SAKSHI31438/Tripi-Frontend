"use client";
import { blogData } from "@/data/data";
import { Heart, MessageCircleMore, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowLeft, FaUser } from "react-icons/fa6";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import axios from "axios";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MySkeleton from "../Helper/MySkeleton";
import ProfileSpinner from "../Helper/ProfileSpinner";
import dotenv from "dotenv";

type Props = {
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  image: string;
};

type Blog = {
  _id: string;
  id?: number;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  email: string;
  image: string;
};

const BlogDetails = () => {
  const [blog, setBlog] = useState<Blog>(null as any);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/${id}`
        );
        console.log(res);

        setBlog(res.data.data); // setBlog use karo
        setIsFetching(false);
      } catch (err) {
        console.log(err);

        console.error(err);
      }
    };

    fetchBlogs();
  }, []);
  console.log("Blogs fetched:", blog);
  // const readableDate = new Date(blog.date)
  //   .toLocaleDateString("en-GB")
  //   .replace(/\//g, "-");

  // const filteredBlogs = blogData.filter(
  //   (blog) => String(blog.id) === String(id)
  // );
  if (isFetching == true) {
    return (
      <div className="min-h-screen  flex items-center justify-center">
        {/* <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading profile...</p>
          </div> */}
        <ProfileSpinner />
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-12 grid lg:grid-cols-3 grid-cols-1 px-[5%]">
        <div className="col-span-2 ">
          <div className="max-w-4xl mx-auto p-6 lg:p-10 relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Link
                  href={"/blog"}
                  className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  <span className="inline-flex items-center justify-center bg-rose-600 text-white rounded-full w-9 h-9">
                    <FaArrowLeft />
                  </span>
                  <span>Back to Blogs</span>
                </Link>
              </div>

              {/* {!isFetching && (
              <Link
                href={`/blog/${id}/editBlog`}
                className="inline-flex items-center px-4 py-2 bg-rose-600 text-white rounded-md text-sm"
              >
                Edit blog
              </Link>
            )} */}
            </div>

            {!isFetching && (
              <div className="mb-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/blog">Blogs</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-slate-600">
                        {blog.title}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            )}

            <article>
              {blog?.image && (
                <div className="overflow-hidden rounded-xl shadow-lg mb-6 relative">
                  <Image
                    src={blog.image}
                    height={600}
                    width={1200}
                    alt={blog.title}
                    className="w-full h-[420px] sm:h-[520px] object-cover"
                  />
                  {/* subtle gradient overlay for better readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                </div>
              )}

              <header className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  {blog.title}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-slate-700 font-semibold">
                      <FaUser />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-800">
                        {blog.author}
                      </div>
                      <div className="text-xs text-slate-500">
                        Travel Vlogger
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Heart className="h-5 w-5" />
                      <MessageCircleMore className="h-5 w-5" />
                      <Share2 className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </header>

              <section className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-justify">
                <div className="space-y-6">
                  {/* keep original paragraphs and content intact */}
                  <div>
                    <p className=" leading-8 text-gray-800 whitespace-pre-line">
                      {blog.content}
                    </p>
                  </div>
                  <div>
                    <p className=" leading-8 text-gray-800 whitespace-pre-line">
                      Thanks for being a part of our travel community! Whether
                      you're reading this blog to plan your next trip or simply
                      to escape into a travel story for a moment, we’re happy
                      you’re here. Every blog you read on Tripi is crafted with
                      the intention to inspire, guide, and bring you closer to
                      new corners of the world. We want you to not only see
                      places, but feel them — through the people, traditions,
                      nature, and stories that make each destination unique. 🌟
                      As you explore our blogs, we’d love for you to share your
                      travel memories, tips, or experiences too. Your story
                      might inspire someone else’s next journey! Keep your bags
                      light, your heart open, and your curiosity alive — because
                      the world is too big to stay in one place and life is too
                      short to live the same day twice. Until we meet in the
                      next destination… Happy Travels! ✈️💛 ✈️💛
                    </p>
                  </div>
                </div>
              </section>

              <div className="mt-8 space-y-4">
                <h2 className="text-xl font-semibold">
                  🌍 Get Started with Tripi – Your Gateway to Authentic Travel
                </h2>
                <p className="italic">
                  Discover hidden gems, connect with locals, and plan your
                  journey with ease. Adventure is just a click away!
                </p>

                <div className="flex flex-wrap gap-4 mt-4 items-center">
                  <Link href="/" className="text-green-800 font-medium">
                    Visit Website: Tripi
                  </Link>
                  <Link href="/contact" className="text-green-800 font-medium">
                    Reach to Us
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="col-span-1  pt-10 space-y-10">
          <div className="bg-yellow-50 rounded-xl p-5">
            <h3 className="font-semibold text-yellow-800 mb-3">
              📖 Did You Know?
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>
                India has the world’s largest postal network — even a floating
                post office in Kashmir!
              </li>
              <li>
                Norway experiences 24 hours of daylight during summer — the
                Midnight Sun phenomenon.
              </li>
              <li>
                Japan has more vending machines than people in some districts.
              </li>
              <li>
                The Great Wall of China is not visible from space — it’s a
                popular myth!
              </li>
              <li>
                Goa’s official language is Konkani, but most people also speak
                English and Hindi.
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 p-5 rounded-xl">
            <h3 className="font-semibold text-blue-800 mb-3">
              📍 Travel Checklist
            </h3>
            <ul className="text-sm text-slate-700 space-y-2 list-disc pl-5">
              <li>✅ Keep digital & printed copies of your ID and tickets.</li>
              <li>💧 Carry a reusable water bottle and sunscreen.</li>
              <li>💰 Exchange some local currency in advance.</li>
              <li>📱 Download offline maps of your destination.</li>
              <li>📸 Don’t forget your power bank & travel adapter!</li>
            </ul>
          </div>
          <div className="bg-green-50 p-5 rounded-xl">
            <h3 className="font-semibold text-green-800 mb-3">
              🍃 Sustainable Travel Tips
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>
                Carry your own water bottle and say no to single-use plastic.
              </li>
              <li>Support local businesses and communities.</li>
              <li>Respect nature — don’t litter or disturb wildlife.</li>
              <li>Travel slower — spend more time in fewer places.</li>
              <li>Choose eco-friendly stays whenever possible.</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-5 rounded-xl">
            <h3 className="font-semibold text-purple-800 mb-3">
              🧠 Traveler’s Word of the Day
            </h3>
            <p className="text-slate-700 text-sm">
              <strong>Wanderlust (noun)</strong> — A strong desire to travel and
              explore the world.
            </p>
            <p className="text-xs text-slate-600 mt-2 italic">
              “Because the more we wander, the more we discover ourselves.”
            </p>
          </div>
          <div className="bg-orange-50 p-5 rounded-xl">
            <h3 className="font-semibold text-orange-800 mb-3">
              🧳 Travel Essentials
            </h3>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
              <li>Comfortable shoes for long walks</li>
              <li>Reusable tote bag for local shopping</li>
              <li>Light jacket or shawl for unpredictable weather</li>
              <li>Travel-size toiletries kit</li>
              <li>Portable charger and travel adapter</li>
            </ul>
            <p className="text-xs text-slate-600 italic mt-3">
              “Pack light, travel far, and collect memories — not baggage.”
            </p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-3">
              🌍 Global Inspirations
            </h3>
            <blockquote className="italic text-slate-700 text-sm border-l-4 border-gray-400 pl-3">
              “The world is a book, and those who do not travel read only one
              page.”
              <span className="block text-xs text-right text-slate-500 mt-1">
                – Saint Augustine
              </span>
            </blockquote>
            <blockquote className="italic text-slate-700 text-sm border-l-4 border-gray-400 pl-3 mt-4">
              “Take only memories, leave only footprints.”
              <span className="block text-xs text-right text-slate-500 mt-1">
                – Chief Seattle
              </span>
            </blockquote>
          </div>
          <div className="bg-pink-50 p-5 rounded-xl">
            <h3 className="font-semibold text-pink-800 mb-3">
              🕰️ Throwback Destination
            </h3>
            <p className="text-sm text-slate-700">
              <strong>Petra, Jordan:</strong> Once known as the “Rose City,”
              Petra’s rock-carved architecture dates back to 300 BC. The site
              glows golden under the desert sun — a silent reminder of ancient
              craftsmanship and lost civilizations.
            </p>
            <p className="text-xs text-slate-500 mt-2 italic">
              “Every stone tells a story of a thousand years.”
            </p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-xl">
            <h3 className="font-semibold text-indigo-800 mb-3">
              🎒 Traveler’s Tip of the Day
            </h3>
            <p className="text-sm text-slate-700">
              Always carry a small diary or notes app to jot down local
              recommendations — from a hidden café to a quiet sunset point.
              These tiny finds often become your most treasured memories.
            </p>
            <p className="text-xs text-slate-600 mt-2 italic">
              “Sometimes the best guidebook is your curiosity.”
            </p>
          </div>
          <div className="bg-sky-50 p-5 rounded-xl text-center">
            <h3 className="font-semibold text-sky-800 mb-3">
              🌤️ Weather Vibes
            </h3>
            <p className="text-sm text-slate-700">
              Whether it’s snowing in Norway or shining in Rajasthan, every
              weather carries its own story. Embrace the winds, dance in the
              rain, and chase the sunsets.
            </p>
            <p className="text-xs text-slate-600 mt-2 italic">
              “There’s no such thing as bad weather — only different kinds of
              beauty.”
            </p>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default BlogDetails;
