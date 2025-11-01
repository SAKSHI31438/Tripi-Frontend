"use client";
import React, { useState } from "react";
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
import axios, { AxiosError } from "axios";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { log } from "node:console";
import { useNavigation } from "react-day-picker";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const loginSchema = z.object({
  loginEmail: z.string().email("Invalid email format"),
  loginPassword: z.string().min(5, "Password must be at least 5 characters"),
});

type LoginFormProps = {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
};

const LoginForm = ({
  isSignUp,
  setIsSignUp,
  // setOpen,
  onSuccess,
}: LoginFormProps) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  const handleLogin = async (data: z.infer<typeof loginSchema>) => {
    try {
      console.log(data);
      setIsFetching(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/login`,
        {
          email: data.loginEmail,
          password: data.loginPassword,
        }
      );
      console.log(response.status);

      if (response?.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        localStorage.setItem("token", response.data.token);
        console.log("Login suceesfull", response.data);
        setIsFetching(false);
        toast.success(response.data.message || "Login successful!");
        reset(); // Form reset on success
        // setOpen(false); // ✅ sirf success pe clos
        onSuccess();
        setTimeout(() => {
          window.location.reload();
        }, 800);
      } else {
        toast.error(response?.data?.message || "Invalid credentials!");
      }
      console.log(response.data);

      setIsFetching(false);
    } catch (error: unknown) {
      console.log(error);

      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        error instanceof AxiosError
      ) {
        if (
          typeof error === "object" &&
          error !== null &&
          "response" in error &&
          (error as AxiosError).response
        ) {
          toast.error(
            ((error as AxiosError).response?.data as any)?.message ||
              "Invalid email or password"
          );
        } else {
          toast.error("Invalid email or password");
        }
      } else {
        console.error("Login failed:", error);
        // Safely handle error of type unknown
        if (
          typeof error === "object" &&
          error !== null &&
          "response" in error &&
          typeof (error as any).response === "object" &&
          (error as any).response !== null &&
          "data" in (error as any).response &&
          typeof (error as any).response.data === "object" &&
          (error as any).response.data !== null &&
          "message" in (error as any).response.data
        ) {
          toast.error(
            ((error as any).response.data as any).message ||
              "Invalid email or password"
          );
        } else {
          toast.error("Invalid email or password");
        }
      }
      setIsFetching(false);
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className=" space-y-4 p-3 ">
            <input
              type="email"
              {...register("loginEmail")}
              id=""
              className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
              placeholder="Enter Email"
            />
            {errors.loginEmail && (
              <p className="text-red-500">{errors.loginEmail.message}</p>
            )}
            <input
              type="password"
              {...register("loginPassword")}
              id=""
              placeholder="Enter Password"
              className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            />
            {errors.loginPassword && (
              <p className="text-red-500">{errors.loginPassword.message}</p>
            )}
            <p>
              New User ?{" "}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-blue-950 cursor-pointer"
              >
                Signup
              </span>
            </p>
            {/* <AlertDialogAction className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 ">
            <input
              type="submit"
              value=" Login"
              className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 "
            />
          </AlertDialogAction> */}
            <button
              type="submit"
              disabled={isFetching}
              className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 "
            >
              {isFetching === true ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
