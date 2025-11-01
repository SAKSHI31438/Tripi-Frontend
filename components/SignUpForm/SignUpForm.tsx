import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;
type SignUpFormProps = {
  isSignUp: boolean;
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSuccess: () => void;
};
const SignUpForm = ({
  isSignUp,
  setIsSignUp,
  // setOpen,
  onSuccess,
}: SignUpFormProps) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const handleSignUp = async (data: SignUpFormData) => {
    try {
      setIsFetching(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/register`,
        data
      );
      const success =
        response?.data?.success === true ||
        response?.status === 200 ||
        !!response?.data?.token;

      if (success) {
        console.log("SignUp successful", response.data);
        setIsFetching(false);
        toast.success("SignUp Successfull! Login Now");
        // setOpen(false); // ✅ sirf success pe clos
        onSuccess();
      }
      setIsFetching(false);
      console.log(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "SignUp failed!");
      } else {
        toast.error("SignUp failed!");
      }
      setIsFetching(false);
      console.error(error);
    }
    // setOpen(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className=" space-y-4 p-3 ">
          <input
            type="text"
            {...register("name")}
            id=""
            className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            placeholder="Enter Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <input
            type="number"
            {...register("phoneNumber")}
            id=""
            className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            placeholder="Enter Phone Number"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
          <input
            type="email"
            {...register("email")}
            id=""
            className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
            placeholder="Enter Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <input
            type="password"
            {...register("password")}
            id=""
            placeholder="Enter Password"
            className="w-full outline-none rounded-lg bg-zinc-200 px-3 py-3 "
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <p>
            Already have an account ?{" "}
            <span
              onClick={() => setIsSignUp(false)}
              className="text-blue-950 cursor-pointer"
            >
              Login
            </span>
          </p>
          {/* <AlertDialogAction className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 ">
            <input
              type="submit"
              value=" SignUp"
              className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 "
            />
          </AlertDialogAction> */}
          <button
            type="submit"
            disabled={isFetching}
            className="w-full py-3 h-[45px] text-md outline-none rounded-lg bg-blue-900   text-white font-semibold hover:bg-blue-950 "
          >
            {" "}
            {isFetching === true ? "Signing Up..." : "SignUp"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
