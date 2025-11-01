"use client";
import React, { useCallback, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FaCross } from "react-icons/fa6";
import { X } from "lucide-react";
import axios from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { ToastContainer, toast } from "react-toastify";

const LoginModal = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(isSignUp);
  const loginEmail = useRef<HTMLInputElement>(null);
  const loginPassword = useRef<HTMLInputElement>(null);
  const SignUpEmail = useRef<HTMLInputElement>(null);
  const SignUpPassword = useRef<HTMLInputElement>(null);
  const SignUpName = useRef<HTMLInputElement>(null);
  const SignUpPhoneNumber = useRef<HTMLInputElement>(null);

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle login logic here
  //   console.log(loginEmail.current?.value, loginPassword.current?.value);
  //   const response = await axios.post("http://localhost:5000/api/user/login", {
  //     email: loginEmail.current?.value,
  //     password: loginPassword.current?.value,
  //   });
  //   console.log(response.data);

  //   try {
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log(error.message);
  //     } else {
  //       console.log(error);
  //     }
  //   }
  // };
  // const handleSignUp = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // console.log(loginEmail.current?.value, loginPassword.current?.value);
  //   const response = await axios.post(
  //     "http://localhost:5000/api/user/register",
  //     {
  //       email: SignUpEmail.current?.value,
  //       password: SignUpPassword.current?.value,
  //       name: SignUpName.current?.value,
  //       phoneNumber: SignUpPhoneNumber.current?.value,
  //     }
  //   );
  //   console.log(response.data);

  //   try {
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       console.log(error.message);
  //     } else {
  //       console.log(error);
  //     }
  //   }
  // };
  const handleClose = useCallback(() => {
    console.log("LoginModal: handleClose called -> closing dialog");
    setOpen(false); // ✅ closes the AlertDialog
  }, []);
  return (
    <div className="w-[70%]">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Login/SignUp</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="z-2000">
          <AlertDialogHeader>
            {isSignUp ? (
              <AlertDialogTitle className="mx-auto relative">
                SignUp{" "}
              </AlertDialogTitle>
            ) : (
              <AlertDialogTitle className="mx-auto relative">
                Login{" "}
              </AlertDialogTitle>
            )}
          </AlertDialogHeader>
          {isSignUp ? (
            // <form>
            //   <div className=" space-y-4 p-3 ">
            //     <input
            //       type="text"
            //       name=""
            //       id=""
            //       ref={SignUpName}
            //       className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            //       placeholder="Enter Name"
            //     />
            //     <input
            //       type="number"
            //       name=""
            //       id=""
            //       ref={SignUpPhoneNumber}
            //       className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            //       placeholder="Enter Phone Number"
            //     />
            //     <input
            //       type="email"
            //       name=""
            //       id=""
            //       ref={SignUpEmail}
            //       className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            //       placeholder="Enter Email"
            //     />
            //     <input
            //       type="password"
            //       name=""
            //       id=""
            //       ref={SignUpPassword}
            //       placeholder="Enter Password"
            //       className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            //     />
            //     <p>
            //       Already have an account ?{" "}
            //       <span
            //         onClick={() => setIsSignUp(false)}
            //         className="text-blue-950 cursor-pointer"
            //       >
            //         Login
            //       </span>
            //     </p>
            //     <AlertDialogAction className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 ">
            //       <input
            //         type="submit"
            //         value=" SignUp"
            //         className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 "
            //       />
            //     </AlertDialogAction>
            //   </div>
            // </form>
            <SignUpForm
              isSignUp={isSignUp}
              setIsSignUp={setIsSignUp}
              // setOpen={setOpen}
              onSuccess={handleClose}
            />
          ) : (
            // <form onSubmit={handleSubmit(handleLogin)}>
            //   <div className=" space-y-4 p-3 ">
            //     <input
            //       type="email"
            //       {...register("loginEmail")}
            //       id=""
            //       className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            //       placeholder="Enter Email"
            //     />
            //     {errors.loginEmail && (
            //       <p className="text-red-500">{errors.loginEmail.message}</p>
            //     )}
            //     <input
            //       type="password"
            //       {...register("loginPassword")}
            //       id=""
            //       placeholder="Enter Password"
            //       className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            //     />
            //     {errors.loginPassword && (
            //       <p className="text-red-500">{errors.loginPassword.message}</p>
            //     )}
            //     <p>
            //       New User ?{" "}
            //       <span
            //         onClick={() => setIsSignUp(true)}
            //         className="text-blue-950 cursor-pointer"
            //       >
            //         Signup
            //       </span>
            //     </p>
            //     <AlertDialogAction className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 ">
            //       <input
            //         type="submit"
            //         value=" Login"
            //         className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 "
            //       />
            //     </AlertDialogAction>
            //   </div>
            // </form>
            <LoginForm
              isSignUp={isSignUp}
              setIsSignUp={setIsSignUp}
              // setOpen={setOpen}
              onSuccess={handleClose}
            />
          )}

          <AlertDialogFooter>
            <AlertDialogCancel className="absolute top-0 right-0 outline-none shadow-none border-none">
              <X />
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default LoginModal;
