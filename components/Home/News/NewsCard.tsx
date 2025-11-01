import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  date: string;
};

const NewsCard = ({ image, title, date }: Props) => {
  return (
    <div>
      <div className="h-[300px]">
        <Image
          src={image}
          height={300}
          width={300}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="mt-6 text-md text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
};

export default NewsCard;
