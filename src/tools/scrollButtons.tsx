"use client";
import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";


interface HideScrollbarProps {
  setShowScrollTopButton: React.Dispatch<React.SetStateAction<boolean>>;
  setShowScrollDownButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HideButtons() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [showScrollDownButton, setShowScrollDownButton] = useState(true); 
  
  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setShowScrollTopButton(scrollY >= windowHeight);
      setShowScrollDownButton(scrollY + windowHeight < fullHeight - 10); 
    };

    window.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent(); 

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [setShowScrollTopButton, setShowScrollDownButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: window.scrollY - window.innerHeight,
      behavior: "smooth"
    });
  };

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, 
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        {showScrollTopButton && (
          <button
            onClick={scrollToTop}
            className="bg-fuchsia-800 text-white p-4 rounded-full shadow-xl shadow-gray-700 z-[10] hover:bg-fuchsia-900 transition-all duration-300 cursor-pointer"
            aria-label="Yukarı çık"
          >
            <FaArrowUp size={24} />
          </button>
        )}

        {showScrollDownButton && (
          <button
            onClick={scrollDown}
            className="bg-fuchsia-800 text-white p-4 rounded-full shadow-xl shadow-gray-700 z-50 hover:bg-fuchsia-900 transition-all duration-300 cursor-pointer"
            aria-label="Aşağı in"
          >
            <FaArrowDown size={24} />
          </button>
        )}
      </div>
    </>
  );  
}
