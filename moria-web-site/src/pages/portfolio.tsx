'use client'

import "@/styles/globals.css";
import Header from '@/components/components/header';
import Footer from '@/components/components/footer';
import Main from '@/components/pages/portfolio';
import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

export default function PortfolioPage() {
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

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent(); 

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, 
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between max-w-full overflow-hidden">
      <Main />
      <div className="absolute w-full">
        <Header />
      </div>
      <Footer />

      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        {showScrollTopButton && (
          <button
            onClick={scrollToTop}
            className="bg-fuchsia-800 text-white p-4 rounded-full shadow-xl shadow-gray-700 z-50 hover:bg-fuchsia-900 transition-all duration-300 cursor-pointer"
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
