import LoginModal from "@/components/Helper/LoginModal";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-[100%] h[100%] mx-auto flex items-center justify-center flex-col mt-[15%] mb-[30%] space-y-3">
      <h1 className="text-red-800 font-bold text-3xl text-center">
        You must be logged in to view this page.
      </h1>
      <p className="text-blue-900 text-lg text-center">
        To see this Page You need to first Login/SignUp
      </p>
      <div className="flex gap-5">
        <Link
          href="/"
          className="p-2 w-[100px] bg-blue-900 text-white rounded-lg flex items-center  justify-center hover:bg-blue-950"
        >
          Home
        </Link>
        <LoginModal />
      </div>
    </div>
  );
};

export default page;
