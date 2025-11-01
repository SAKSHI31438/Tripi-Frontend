"use client";
// import { MapPin, Pencil, SquarePen } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const ProfilePage = () => {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   if (!user) {
//     return <div>Please login first</div>;
//   }

//   return (
//     <div>
//       <div className="relative h-[300px] w-[100%] bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950"></div>
//       <div className="bg-white shadow-xl absolute top-[27%] left-[10%] rounded-2xl w-[80%] mx-auto h-[300px] p-6 ">
//         <div className=" w-[100%] flex justify-between pb-3 border-b border-b-gray-400">
//           <div className="flex gap-3">
//             <div className="bg-gray-500 rounded-full h-[150px] w-[150px] flex items-center justify-center">
//               <div className="bg-white rounded-full h-[90%] w-[90%]  flex items-center justify-center">
//                 <Image
//                   src="/images/avatar image.jpg"
//                   height={200}
//                   width={200}
//                   alt="avatar image"
//                   className=" rounded-full  object-cover"
//                 />
//               </div>
//             </div>
//             <div className="w-[300px] h-[150px] p-2 flex flex-col justify-center">
//               <h1 className="text-3xl font-bold ">Sakshi kadam</h1>
//               <p className="text-blue-800 text-lg">Travel Blogger</p>
//               <div className="flex gap-1 items-center text-gray-500">
//                 <MapPin className="w-4 h-4" />
//                 <p>Delhi India </p>
//               </div>
//             </div>
//           </div>
//           <div className="h-[150px] w-[150px] flex items-center">
//             <button className="p-2 border w-full border-gray-500 rounded-lg flex items-center gap-1 justify-center hover:bg-gray-100">
//               <Pencil className="w-5 h-5" />
//               Edit Profile
//             </button>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 p-4 ">
//           <div className="col-span-1 items-center flex flex-col justify-center">
//             <h2 className="font-bold text-lg">5</h2>
//             <p>Posts</p>
//           </div>
//           <div className="col-span-1 items-center flex flex-col justify-center">
//             <h2 className="font-bold text-lg">100</h2>
//             <p>Followers</p>
//           </div>
//           <div className="col-span-1 items-center flex flex-col justify-center">
//             <h2 className="font-bold text-lg">200</h2>
//             <p>Following</p>
//           </div>
//         </div>
//       </div>
//       <div className="h-[600px]"></div>
//       {/*
//       <p>{user.email}</p>
//       <p>{user.phoneNumber}</p> */}
//     </div>
//   );
// };

// export default ProfilePage;
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useEffect, useState, useMemo } from "react";
import {
  MapPin,
  Camera,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  Globe,
  Users,
  X,
  Copy,
  Check,
  Pencil,
  Edit3,
  BookHeart,
} from "lucide-react";
import Link from "next/link";
import EditProfileModal from "./EditProfileModal";
import { DialogClose } from "@radix-ui/react-dialog";
import { useParams } from "next/navigation";
import axios from "axios";
import SmallSkeleton from "../Helper/SmallSkeleton";
import ProfileSpinner from "../Helper/ProfileSpinner";
import AddAdventureModal from "./AddAdventureModal";
import AdventureCard from "./AdventureCard";
import { toast } from "react-toastify";

export interface User {
  name: string;
  email: string;
  phoneNumber: string;
  bio: string;
  location: string;
  joinDate: string;
  avatar?: string;
}

export interface Profile {
  bio: string;
  location: string;
  address: string;
  professionalTitle: string;
}

export interface Adventure {
  location: string;
  description: string;
  date: string;
}

const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [adventure, setAdventure] = useState<Adventure[] | null>(null);

  const [isFetching, setIsFetching] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Mock user data for demonstration
      setUser({
        name: "Sakshi Kadam",
        email: "sakshi@travelstories.com",
        phoneNumber: "+91 98765 43210",
        bio: "Passionate travel blogger sharing stories from around the world. Join me on my adventures!",
        location: "Delhi, India",
        joinDate: "March 2022",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      });
    }
  }, []);

  const handleShare = async () => {
    const profileUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${user?.name}'s Travel Profile`,
          text: `Check out ${user?.name}'s amazing travel adventures!`,
          url: profileUrl,
        });
      } catch (error) {
        console.log("Error sharing:", error);
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.log("Failed to copy:", error);
    }
  };
  useEffect(() => {
    // wait until id is available
    if (!id) return;

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/${id}`
        );
        console.log(res);
        setIsFetching(false);
        setProfile(res.data.data);
      } catch (err) {
        console.log(err);

        console.error(err);
      }
    };

    fetchProfile();
  }, [id]);

  useEffect(() => {
    if (!id) return;

    const fetchAdventure = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/adventure/${id}`
        );
        console.log(res);
        setIsFetching(false);
        setAdventure(res.data.data);
      } catch (err) {
        console.log(err);

        console.error(err);
      }
    };

    fetchAdventure();
  }, [id]);

  // sort adventures by date descending (most recent first)
  const sortedAdventures = useMemo(() => {
    if (!adventure || adventure.length === 0) return [] as Adventure[];
    return [...adventure].sort((a, b) => {
      const da = Date.parse(a.date || "");
      const db = Date.parse(b.date || "");
      if (Number.isNaN(da) || Number.isNaN(db)) return 0;
      return db - da;
    });
  }, [adventure]);

  if (!user) {
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

  const handleDelete = async (
    location: string,
    date: string
  ): Promise<void> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/adventure/delete/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ location, date, id }), // userId if needed
        }
      );
      toast.success("Adventure Deleted Successfully", { type: "success" });
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (error) {
      toast.error("Error", { type: "error" });
      console.error(error);
    }

    // if (res.ok) {
    //   setAdventure((prev) =>
    //     prev
    //       ? prev.filter(
    //           (item) => !(item.location === location && item.date === date)
    //         )
    //       : prev
    //   );
    // }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative h-80 md:h-96 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-950 overflow-hidden">
        <div className="absolute inset-0  bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Floating travel elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Globe className="w-16 h-16 text-white animate-pulse" />
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <Camera
            className="w-12 h-12 text-white animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-20">
          <MapPin
            className="w-10 h-10 text-white animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>

      {/* Profile Card */}
      <div className="relative -mt-32 mx-4 md:mx-8 lg:mx-auto  lg:w-[80%] sm:w-[90%] sm:mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm ">
          {/* Profile Header */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 flex-wrap">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1  shadow-xl">
                  <div className="w-full h-full rounded-full bg-white ">
                    <img
                      src="/images/avatar image.jpg"
                      alt="avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* <div className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div> */}
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {user.name}
                </h1>
                {isFetching ? (
                  <div className="space-y-2">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <SmallSkeleton key={index} />
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-lg text-blue-600 font-medium mb-2">
                      {profile
                        ? profile.professionalTitle
                        : "Travel Blogger & Explorer"}
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-2">
                      <MapPin className="w-5 h-5" />
                      <span>
                        {profile ? profile.location : "No location specified"}{" "}
                      </span>
                    </div>

                    <div className="flex flex-row items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <BookHeart className="h-5 w-5" />
                        <span>
                          {profile ? profile.bio : "No Bio specified"}{" "}
                        </span>
                      </div>
                      {/* <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    <span>45 Countries Visited</span>
                  </div> */}
                    </div>
                  </div>
                )}
              </div>
              <Dialog>
                <DialogTrigger className="">
                  <span className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-400  rounded-xl font-medium transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg hover:scale-105">
                    <Edit3 className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </span>
                </DialogTrigger>
                <DialogContent className="lg:max-w-4xl sm:max-w-[400px]  overflow-y-scroll rounded p-3 h-[80vh] mt-5">
                  <DialogHeader>
                    <EditProfileModal />
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              {/* Share Button */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-800 text-white rounded-xl font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105"
                >
                  <Share2 className="w-5 h-5" />
                  Share Profile
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100 ">
              <div className="text-center group cursor-pointer">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {isFetching == true ? "0" : adventure?.length}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    Travel Stories
                  </p>
                </div>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-all duration-300 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    12.5K
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    Travel Buddies
                  </p>
                </div>
              </div>

              <div className="text-center group cursor-pointer">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 group-hover:from-green-100 group-hover:to-emerald-100 transition-all duration-300 mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    50
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    Countries Explored
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-8 mb-8">
          <Link
            href="/favorites"
            className="group cursor-pointer flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Favorites</span>
          </Link>

          <button className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Gallery</span>
          </button>

          <button className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Messages</span>
          </button>

          <button className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Community</span>
          </button>
        </div>

        {/* Recent Activity Preview */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Recent Adventures
          </h2>
          <div className="text-center py-8 text-gray-500 space-y-3">
            <Camera className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p>Your travel stories will appear here</p>
            <Dialog>
              <DialogTrigger className="">
                <span className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors">
                  <span> Share Your Adventure</span>
                </span>
              </DialogTrigger>
              <DialogContent className="lg:max-w-3xl sm:max-w-[400px]  overflow-y-scroll rounded p-3 h-[80vh] mt-5">
                <DialogHeader>
                  <AddAdventureModal />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          {sortedAdventures && sortedAdventures.length > 0 ? (
            sortedAdventures.map((adv, idx) => (
              <AdventureCard
                adventure={adv}
                key={idx}
                onDelete={() => handleDelete(adv.location, adv.date)}
              />
            ))
          ) : (
            <p className="text-gray-500">No adventures shared yet.</p>
          )}
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Share Profile</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-1 text-sm text-gray-600 truncate">
                  {window.location.href}
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {copySuccess ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copySuccess ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=Check out ${
                    user.name
                  }'s amazing travel adventures!&url=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
