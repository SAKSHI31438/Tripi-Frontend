"use client";
import LoginModal from "@/components/Helper/LoginModal";
import { navLinks } from "@/constant/constant";
import {
  CircleUserRound,
  EllipsisVertical,
  Heart,
  Info,
  Menu,
  NotebookText,
  Power,
  ShoppingCart,
  User as UserIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToastContainer, toast } from "react-toastify";
import { usePathname } from "next/navigation";
import { DropdownMenuPortal } from "@radix-ui/react-dropdown-menu";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));
    }
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("User Logout Succesfully!!");

    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  return (
    <>
      <div
        className={` ${
          navBg ? "bg-blue-900 shadow-md" : "fixed top-0 left-0 z-[1000]"
        } transition-all duration-200 h-[12vh] z-[1000] fixed w-full overflow-x-hidden`}
      >
        <div className="flex items-center h-full justify-between w-[98%] xl:[80%] mx-auto overflow-x-hidden">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
              <TbAirBalloon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
              Tripi
            </h1>
          </div>
          <div className="hidden lg:flex items-center space-x-10 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.url;
              return (
                <div className={`hover:text-yellow-400 `} key={link.id}>
                  <Link
                    href={link.url}
                    key={link.id}
                    className={`flex gap-1 p-2 hover:text-yellow-400 items-center ${
                      isActive
                        ? "border-b-2 border-yellow-400 text-yellow-400 "
                        : "text-white"
                    } hover:text-yellow-400`}
                  >
                    <p className="hover:text-yellow-400">{link.icon}</p>
                    <p
                      className="relative text-white text-base font-medium w-fit block after:block after:content[''] 
                after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 
                after:transition duration-300 after:origin-right hover:text-yellow-400"
                    >
                      {link.label}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-5 xl:w-[10%] w-[30%] items-center p-2">
            <div>
              {token === null ? (
                <LoginModal />
              ) : (
                <div className=" relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical className="text-white w-6 h-6 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuContent className=" w-[170px] absolute z-[2000] right-0 mt-2">
                        <DropdownMenuLabel className="flex gap-3 items-center">
                          <UserIcon />
                          My Account
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex gap-2 items-center">
                          <CircleUserRound className="w-6 h-6" />
                          <Link href={`/profile/${user?._id}`}>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2 items-center">
                          <NotebookText />
                          <Link href="/myBlogs">My Blogs</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2 items-center">
                          <Heart />
                          <Link href="/favorites">Favorites</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex gap-2 items-center">
                          <Info />
                          <Link href="/help">Help</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogOut}
                          className="flex gap-2 items-center"
                        >
                          <Power />
                          Log Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenuPortal>
                  </DropdownMenu>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center space-x-4 ">
              {/* <button
            className="md:px-12 md:py-2.5 px-6 py-2 text-black bg-white
           hover:bg-gray-200 transition-all duration-200 rounded-lg"
          >
            Book Now
          </button> */}

              <div>
                <HiBars3BottomRight
                  onClick={openNav}
                  className="w-8 h-8 cursor-pointer text-white lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Nav;
