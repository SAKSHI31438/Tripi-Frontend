"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-label";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Profile, User } from "./ProfilePage";
import { useParams, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const editProfileSchema = z.object({
  // name: z
  //   .string()
  //   .min(2, "Name must be at least 2 characters long")
  //   .max(50, "Name must be less than 50 characters"),
  // phoneNumber: z
  //   .string()
  //   .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  // email: z.string().email("Invalid email address"),
  location: z
    .string()
    .min(3, "Location must be at least 3 characters long")
    .max(100, "Location must be less than 100 characters"),
  professionalTitle: z
    .string()
    .min(3, "Professional title must be at least 3 characters long")
    .max(50, "Professional title must be less than 50 characters"),
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters long")
    .max(500, "Bio must be less than 500 characters"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters long")
    .max(200, "Address must be less than 200 characters"),
});
type EditProfileFormData = z.infer<typeof editProfileSchema>;

const EditProfileModal = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Mock user data for demonstration
      setUser({
        name: "Sakshi Kadam",
        email: "sakshi@travelstories.com",
        phoneNumber: "+91 98765 43210",
        bio: "Passionate travel blogger sharing stories from around the world. Join me on my adventures!",
        location: "Delhi, India",
        joinDate: "March 2022",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      });
    }
  }, []);

  const onSubmitForm = async (data: EditProfileFormData) => {
    console.log(data);

    console.log("clicked");
    try {
      const formData = new FormData();
      formData.append("location", data.location);
      formData.append("professionalTitle", data.professionalTitle);
      formData.append("bio", data.bio);
      formData.append("address", data.address);

      console.log(formData);

      setIsFetching(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/editUser/${id}`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response.data);
      setIsFetching(false);
      toast.success("Profile Updated Successfully", { type: "success" });
      reset();
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (error) {
      setIsFetching(false);
      toast.error("Error", { type: "error" });
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/${id}`
        );
        console.log(res);

        setProfile(res.data.data);
      } catch (err) {
        console.log(err);

        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-3xl  p-4 sm:p-6 rounded-md">
        <h1 className="text-lg text-center font-semibold">Edit Profile</h1>
        <form action="" onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <div className="mt-3">
              <Label htmlFor="title" className="mb-1 mt-2">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter Name"
                value={user?.name}
                required
                className="w-full h-12 bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 mt-4">
              <div className="col-span-1">
                <Label htmlFor="title" className=" mt-2">
                  Phone Number
                </Label>
                <Input
                  id="Enter Phone Number"
                  type="text"
                  placeholder="Enter Phone Number"
                  readOnly
                  value={user?.phoneNumber}
                  required
                  className="w-full h-12 text-gray-700 bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                />
              </div>
              <div className="col-span-1">
                <Label htmlFor="title" className="mb-1 mt-2">
                  Email
                </Label>
                <Input
                  id="Enter Email"
                  type="text"
                  placeholder="Enter email"
                  value={user?.email}
                  readOnly
                  required
                  className="w-full h-12 text-gray-700 bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 mt-2">
              <div className="col-span-1">
                <Label htmlFor="title" className="mb-2">
                  Location
                </Label>
                <Input
                  id="Location"
                  type="text"
                  placeholder=" Enter Location"
                  {...register("location")}
                  defaultValue={profile?.location}
                  required
                  className="w-full h-12 bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                />
                {/* {errors.location && (
                  <p className="text-red-500">{errors.location.message}</p>
                )} */}
              </div>
              <div className="col-span-1">
                <Label htmlFor=" Location" className="mb-2">
                  Professional Title{" "}
                </Label>
                <Input
                  id="Professional Title "
                  type="text"
                  placeholder=" Enter Professional Title "
                  {...register("professionalTitle")}
                  defaultValue={profile?.professionalTitle}
                  required
                  className="w-full h-12 bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
                />{" "}
                {/* {errors.professionalTitle && (
                  <p className="text-red-500">
                    {errors.professionalTitle.message}
                  </p>
                )} */}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 mt-2">
              <div className="col-span-1">
                <Label htmlFor="title" className="mb-2">
                  Bio
                </Label>
                <Textarea
                  placeholder="Bio"
                  rows={6}
                  {...register("bio")}
                  defaultValue={profile?.bio}
                  className="p-3 bg-gray-200 rounded-lg w-full h-36 md:h-full"
                ></Textarea>
                {/* {errors.bio && (
                  <p className="text-red-500">{errors.bio.message}</p>
                )} */}
              </div>
              <div className="col-span-1 ">
                <Label htmlFor="title" className="mb-2">
                  Address
                </Label>
                <Textarea
                  placeholder="Address"
                  {...register("address")}
                  defaultValue={profile?.address}
                  rows={6}
                  className="p-3 bg-gray-200 rounded-lg w-full h-36 md:h-full"
                ></Textarea>
                {/* {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )} */}
              </div>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
              <DialogClose>
                <button className="p-2 w-full sm:w-[200px] h-12 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700">
                  Discard Changes
                </button>
              </DialogClose>
              <DialogFooter>
                <Button
                  type="submit"
                  className="p-2 w-full sm:w-[200px] h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-950"
                >
                  {isFetching == true ? "Saving.." : "Save Changes"}
                </Button>
              </DialogFooter>
              {/* <button
              onClick={handleSaveChanges}
              className="p-2 w-full sm:w-[200px] h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-950"
            >
              Save Changes
            </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
