import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  des: string;
};

const WhyChooseCard = ({ image, title, des }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={70}
        height={70}
        className="mx-auto"
      />
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">
        {des}
      </p>
    </div>
  );
};

export default WhyChooseCard;
