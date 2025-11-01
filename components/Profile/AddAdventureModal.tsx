import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DatePick from "../DatePick";
import { Textarea } from "../ui/textarea";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import DatePickProfile from "./DatePickProfile";
import { useParams, useRouter } from "next/navigation";

export const addAdventureSchema = z.object({
  location: z
    .string()
    .min(3, "Location must be at least 3 characters")
    .max(100, "Location is too long"),
  // Accept either a Date object or an ISO date string depending on your DatePick implementation
  date: z.union([z.date(), z.string()]).optional(),
  description: z
    .string()
    .min(10, "Tell us a bit more — at least 10 characters")
    .max(2000, "About is too long"),
});

export type AddAdventureForm = z.infer<typeof addAdventureSchema>;

const AddAdventureModal = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<AddAdventureForm>({
    resolver: zodResolver(addAdventureSchema),
  });

  const onSubmitForm = async (data: AddAdventureForm) => {
    console.log(data);

    // Safely handle optional date which may be a Date, a string, or undefined
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

    console.log("clicked");
    try {
      const formData = new FormData();
      formData.append("location", data.location);
      // Only append date if it's defined to satisfy FormData#append overloads
      if (typeof formattedDate !== "undefined") {
        formData.append("date", formattedDate);
      }
      formData.append("description", data.description);

      console.log(formData);

      setIsFetching(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/adventure/addAdventure/${id}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response.data);
      setIsFetching(false);
      toast.success("Adventure added Successfully", { type: "success" });
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

  return (
    <div className="w-full">
      <div className="mx-auto w-full   p-4 sm:p-6 rounded-md">
        <h1 className="text-lg text-center font-semibold">
          Add Your Adventure{" "}
        </h1>
        <form action="" onSubmit={handleSubmit(onSubmitForm)}>
          <div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-4">
              <div className="col-span-1">
                <Controller
                  control={control}
                  name="location"
                  render={({ field, fieldState }) => (
                    <div>
                      <Label htmlFor="location" className="mb-2 mt-1">
                        Location
                      </Label>
                      <Input
                        id={field.name}
                        {...field}
                        placeholder="Enter Location"
                        {...register("location")}
                        required
                        className="w-full h-13 bg-gray-200 p-2 rounded-lg border-none outline-none pl-2 mt-2"
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
              <div className="col-span-1">
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
              </div>
            </div>
            <div>
              <div className="">
                <Controller
                  control={control}
                  name="description"
                  render={({ field, fieldState }) => (
                    <div>
                      <Label htmlFor="description" className="mb-2 mt-5">
                        About Your Adventure
                      </Label>
                      <Textarea
                        id={field.name}
                        {...field}
                        placeholder="Write about your adventure..."
                        rows={20}
                        {...register("description")}
                        className="p-3 bg-gray-200 rounded-lg w-full h-64"
                      ></Textarea>
                      {fieldState.error && (
                        <p className="text-xs text-red-500 mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="mt-7">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center">
                  <DialogClose>
                    <button className="p-2 w-full sm:w-[200px] h-12 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700">
                      Discard
                    </button>
                  </DialogClose>
                  <DialogFooter>
                    <Button
                      type="submit"
                      className="p-2 w-full sm:w-[200px] h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center hover:bg-blue-950"
                    >
                      {isFetching ? "Adding..." : "Add Adventure"}
                    </Button>
                  </DialogFooter>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdventureModal;
