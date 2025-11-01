"use client";

import MyBlogsPage from "@/components/MyBlogs/MyBlogsPage";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // console.log(localStorage.getItem("user"));

    const storedUser = localStorage.getItem("user") || null;

    if (storedUser === null) {
      redirect("/notAvailable");
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  console.log(user);
  return (
    <div>
      <MyBlogsPage />
    </div>
  );
};

export default page;
