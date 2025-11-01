"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import DatePick from "../DatePick";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SmallSkeleton from "../Helper/SmallSkeleton";
import ProfileSpinner from "../Helper/ProfileSpinner";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  category: z.string().min(2, "Category is required"),
  // date: z.date("Date is required"),
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

type Blog = {
  _id: string;
  id?: number;
  title: string;
  content: string;
  category: string;
  author: string;
  date: string;
  email: string;
  image: string;
};

const EditBlogForm = () => {
  const [blog, setBlog] = useState<Blog>(null as any);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsFetching(true);
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/${id}`
        );
        console.log(res.data);

        setBlog(res.data.data); // setBlog use karo
        setIsFetching(false);
      } catch (err) {
        console.log(err);

        console.error(err);
      }
    };

    fetchBlogs();
  }, []);
  // console.log("Blogs fetched:", blog);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  const onSubmitForm = async (data: BlogFormData) => {
    console.log(data);

    console.log("clicked");
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("category", data.category);
      formData.append("author", data.author);
      formData.append("email", data.email);
      formData.append("content", data.content);

      console.log(formData);

      // Handle file input correctly (FileList → single File)
      if (data.image && data.image instanceof FileList && data.image[0]) {
        formData.append("image", data.image[0]);
      }
      setIsFetching(true);
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/updateBlog/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);
      setIsFetching(false);
      toast.success("Blog Updated Successfully", { type: "success" });
      reset();
      setTimeout(() => {
        router.push("/blog");
      }, 1000);
    } catch (error) {
      setIsFetching(false);
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
                  <BreadcrumbPage>Update Blog</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}
        <h1 className="mx-auto font-semibold lg:text-3xl text-xl lg:ml-[39%] ml-[30%] mb-[2%] lg:mt-0 mt-[6%] ">
          Update Blog
        </h1>
        {!blog ? (
          <div className=" flex justify-center mt-[20%] mb-[20%]">
            <ProfileSpinner />
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="lg:grid lg:grid-cols-2 gap-10 sm:mt-[2%] ">
              <div className="col-span-1 p-2 space-y-3">
                <Label htmlFor="title" className="mb-2">
                  Blog Title
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Blog Title"
                  defaultValue={blog.title}
                  {...register("title")}
                  required
                  className="w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
                <Label htmlFor="category" className="mb-2">
                  Category
                </Label>
                <Input
                  id="category"
                  type="text"
                  {...register("category")}
                  placeholder="Category"
                  defaultValue={blog.category}
                  required
                  className="w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                />
                {errors.category && (
                  <p className="text-red-500 text-sm">
                    {errors.category.message}
                  </p>
                )}
                {/* <Input type="date" name="date" required /> */}
                <DatePick />
                {/* {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )} */}
                <Label htmlFor="author" className="mb-2">
                  Author Name
                </Label>
                <Input
                  id="author"
                  type="text"
                  {...register("author")}
                  placeholder="Author"
                  defaultValue={blog.author}
                  required
                  className="w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                />
                {errors.author && (
                  <p className="text-red-500 text-sm">
                    {errors.author.message}
                  </p>
                )}
              </div>
              <div className="col-span-1 p-3 space-y-2 h-full">
                <div className=" relative lg:h-[75%] mb-2 h-[120px] p-2  border-2 w-full border-gray-500 border-dashed rounded-lg  bg-gray-200 flex lg:items-center lg:justify-center">
                  {/* <input
                    type="file"
                    {...register("image")}
                    placeholder="Image"
                    // defaultValue={blog.image}
                    className="justify-center text-blue-950 cursor-pointer h-full w-full items-center text-center ml-[30%] mt-[30%]"
                  /> */}
                  <input
                    type="file"
                    {...register("image")}
                    placeholder="Image"
                    className="justify-center text-blue-950 cursor-pointer "
                  />
                  <div className="lg:w-[500px] w-[100px] text-wrap">
                    <a
                      href={blog.image}
                      className="absolute break-words lg:top-[80%] top-[25%] cursor-pointer hover:text-blue-600 left-0 text-xs lg:w-[520px] w-[250px] text-center inline-block"
                    >
                      {blog.image}
                    </a>
                  </div>
                </div>
                <Label htmlFor="email" className="mb-2">
                  Author Email Id
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Email "
                  defaultValue={blog.email}
                  className="w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div>
              <div className="lg:h-[300px] h-[500px] p-2">
                <Textarea
                  {...register("content")}
                  placeholder="Blog Description"
                  rows={40}
                  required
                  defaultValue={blog.content}
                  className="p-3 bg-gray-200 rounded-lg w-full lg:h-full h-[500px]"
                ></Textarea>
                {errors.content && (
                  <p className="text-red-500 text-sm">
                    {errors.content.message}
                  </p>
                )}
                <div className="w-full mx-auto mt-10 lg:ml-[38%] ml-[15%]">
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
                    value={isFetching ? "Updating..." : "Update Blog"}
                    className="rounded px-14 md:px-28 py-2.5  bg-rose-600 hover:bg-gradient-to-r hover:from-red-500
            hover:to-red-400 text-white  hover:ring-red-400 transition-all ease-out duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default EditBlogForm;
