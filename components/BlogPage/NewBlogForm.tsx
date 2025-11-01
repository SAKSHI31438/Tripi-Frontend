"use client";
import { blogData } from "@/data/data";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePick from "../DatePick";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { Textarea } from "../ui/textarea";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { is } from "date-fns/locale";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SmallSkeleton from "../Helper/SmallSkeleton";
import DatePickProfile from "../Profile/DatePickProfile";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(2, "Category is required"),
  date: z.date("Date is required"),
  author: z.string().min(3, "Author name is required"),
  email: z.string().email("Invalid email address"),
  content: z.string().min(10, "Description must be at least 10 characters"),
  image: z
    .union([
      z.any().refine((file) => file instanceof FileList && file.length > 0, {
        message: "Image file is required",
      }),
      z.string().url("Invalid image URL"),
    ])
    .optional(),
});
type BlogFormData = z.infer<typeof blogSchema>;

const NewBlogForm = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // console.log(localStorage.getItem("user"));

    const storedUser = localStorage.getItem("user") || null;

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit = async (data: BlogFormData) => {
    let formattedDate: string | undefined;
    if (data.date) {
      const dateObj =
        typeof data.date === "string" ? new Date(data.date) : data.date;
      formattedDate = dateObj.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short", // "short" -> Jan, Feb, Mar | "long" -> January, February
        year: "numeric",
      });
      console.log(formattedDate);
    } else {
      formattedDate = undefined;
    }
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("email", data.email);
      formData.append("content", data.content);
      formData.append("createdBy", user._id);
      if (typeof formattedDate !== "undefined") {
        formData.append("date", formattedDate);
      }
      // Handle file input correctly (FileList → single File)
      if (data.image && data.image instanceof FileList && data.image[0]) {
        formData.append("image", data.image[0]);
      }
      setIsFetching(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/addBlog`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      setIsFetching(false);
      toast.success("Blog Added Successfully", { type: "success" });
      reset();
      setTimeout(() => {
        router.push("/blog");
      }, 1000);
    } catch (error) {
      toast.error("Error", { type: "error" });
      console.error(error);
    }
  };

  return (
    <>
      <div className=" p-10 lg:w-[80%] mx-auto mt-[1%] lg:mb-[20%] mb-[50%]">
        <Link
          href={"/blog"}
          className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center
                  absolute top-[5%] left-[10%] focus:outline-none"
        >
          <FaArrowLeft />
        </Link>
        {isFetching ? (
          <div className="text-center mx-auto ml-6 mb-3 pb-3">
            <SmallSkeleton />
          </div>
        ) : (
          <div className="lg:ml-5 ml-13">
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
                  <BreadcrumbPage>Add New Blog</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}
        <h1 className="mx-auto font-semibold lg:text-3xl text-xl lg:ml-[39%] ml-[30%] mb-[2%] lg:mt-0 mt-[6%] ">
          Add New Blog
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:grid lg:grid-cols-2 gap-10 sm:mt-[2%]">
            <div className="col-span-1 p-2 space-y-3">
              <Controller
                control={control}
                name="title"
                render={({ field, fieldState }) => (
                  <div>
                    <Label htmlFor="title" className="mb-2">
                      Blog Title <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id={field.name}
                      {...field}
                      type="text"
                      placeholder="Blog Title"
                      {...register("title")}
                      required
                      className="w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <Controller
                control={control}
                name="category"
                render={({ field, fieldState }) => (
                  <div>
                    <Label htmlFor="category" className="mb-2">
                      Category <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id={field.name}
                      {...field}
                      type="text"
                      {...register("category")}
                      placeholder="Category"
                      className="w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />

              {/* <Input type="date" name="date" required /> */}
              {/* <DatePick /> */}
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DatePickProfile
                    value={
                      field.value
                        ? typeof field.value === "string"
                          ? new Date(field.value)
                          : field.value
                        : undefined
                    }
                    onChange={field.onChange}
                  />
                )}
              />
              {/* {errors.date && (
              <p className="text-red-500 text-sm">{errors.date.message}</p>
            )} */}
              <Controller
                control={control}
                name="author"
                render={({ field, fieldState }) => (
                  <div>
                    <Label htmlFor="author" className="mb-2">
                      Author Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id={field.name}
                      {...field}
                      type="text"
                      {...register("author")}
                      placeholder="Author"
                      required
                      className="w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="col-span-1 p-3 space-y-2 h-full">
              <div className="lg:h-[75%] mb-2 h-[60px]  border-2 w-full border-gray-500 border-dashed rounded-lg  bg-gray-200 flex lg:items-center lg:justify-center">
                <input
                  type="file"
                  {...register("image")}
                  placeholder="Image"
                  className="justify-center text-blue-950 cursor-pointer "
                />
              </div>
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState }) => (
                  <div>
                    <Label htmlFor="email" className="mb-2 mt-4">
                      Author Email Id <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id={field.name}
                      {...field}
                      type="text"
                      {...register("email")}
                      placeholder="Email "
                      className="w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                    />
                    {fieldState.error && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div>
            <div className="h-[200px] p-2">
              <Controller
                control={control}
                name="content"
                render={({ field, fieldState }) => (
                  <div>
                    <Textarea
                      id={field.name}
                      {...field}
                      {...register("content")}
                      placeholder="Blog Description*"
                      rows={20}
                      required
                      className="p-3 bg-gray-200 rounded-lg w-full lg:h-full h-[100px]"
                    ></Textarea>
                    {fieldState.error && (
                      <p className="text-xs text-red-500 mt-1">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />

              <div className="w-full mx-auto mt-5 lg:ml-[38%] ml-[15%]">
                {/* <span
            className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500
            hover:to-red-400 text-white  hover:ring-red-400 transition-all ease-out duration-300"
          >
            <span
              className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12
            group-hover:-translate-x-40 ease "
            ></span>
            <button type="submit" className=" font-bold">
              Add Blog
            </button>
          </span> */}
                <input
                  type="submit"
                  value={isFetching === true ? "Adding..." : "Add Blog"}
                  className="rounded px-14 md:px-28 py-2.5  bg-rose-600 hover:bg-gradient-to-r hover:from-red-500
            hover:to-red-400 text-white  hover:ring-red-400 transition-all ease-out duration-300"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default NewBlogForm;
