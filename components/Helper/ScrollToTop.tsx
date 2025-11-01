"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisiblity = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisiblity);
    return () => window.removeEventListener("scroll", toggleVisiblity);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 animate-pulse  ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center
          absolute bottom-0 right-0 focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
