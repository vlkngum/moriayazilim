"use client";

import "@/styles/globals.css";
import Header from "@/components/components/header";
import Footer from "@/components/components/footer";
import Main from "@/components/pages/main";
import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

import HideButtons from "@/tools/hideButtons";

import HideScrollbar from "@/tools/hideScroll";

export default function IndexPage() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [showScrollDownButton, setShowScrollDownButton] = useState(true); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
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
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between max-w-full overflow-hidden">
      <HideScrollbar/>
      <HideButtons 
        setShowScrollTopButton={setShowScrollTopButton} 
        setShowScrollDownButton={setShowScrollDownButton} 
      />

      <Main />
      <div className="absolute w-full">
        <Header />
      </div>
      <Footer />

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
    </div>
  );
}
