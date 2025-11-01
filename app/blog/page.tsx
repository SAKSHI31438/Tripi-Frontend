"use client";
import BlogPage from "@/components/BlogPage/BlogPage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

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
    <>
      <BlogPage />
    </>
  );
};

export default page;
