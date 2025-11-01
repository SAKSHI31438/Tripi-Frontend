"use client";

import { usePathname } from "next/navigation";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { blogData } from "@/data/data";

const NavbarWrapper = () => {
  const pathname = usePathname();
  const noNavbarRoutes = [
    "/login",
    "/blog/addNewBlog",
    `/blog/`,
    "/contact/form-submit",
    "/notAvailable",
  ];
  const noNavbarPrefixes = ["/blog/", "/myBlogs/"];

  if (
    noNavbarRoutes.includes(pathname) ||
    noNavbarPrefixes.some((prefix) => pathname.startsWith(prefix))
  ) {
    return null;
  }

  return <ResponsiveNavbar />;
};

export default NavbarWrapper;
