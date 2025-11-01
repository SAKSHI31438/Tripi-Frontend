import React from "react";

type Props = {
  heading?: string;
  para: string;
};

const SectionHeading = ({ heading, para }: Props) => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h1>
      <p>{para}</p>
    </div>
  );
};

export default SectionHeading;
