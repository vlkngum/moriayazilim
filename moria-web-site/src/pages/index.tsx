'use client'

import "@/styles/globals.css";
import Header from '../components/components/header';
import Footer from '../components/components/footer';
import Main from '../components/pages/main';
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function IndexPage() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const vh = window.innerHeight;
    
    let isScrolling = false;
    let currentSection = 0;
    const totalSections = Math.ceil(document.documentElement.scrollHeight / vh);
    
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      
      if (isScrolling) return;
      
      const direction = event.deltaY > 0 ? 1 : -1;
      
      let nextSection = currentSection + direction;
      
      nextSection = Math.max(0, Math.min(nextSection, totalSections - 1));
      
      if (nextSection === currentSection) return;
      
      isScrolling = true;
      
      window.scrollTo({
        top: nextSection * vh,
        behavior: 'smooth'
      });
      
      currentSection = nextSection;
       
      setShowScrollTopButton(nextSection > 0);
      
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };
     
    const handleScrollEvent = () => {
      if (window.scrollY >= vh) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };
    
    window.addEventListener('wheel', handleScroll as EventListener, { passive: false });
    window.addEventListener('scroll', handleScrollEvent);
    
    return () => {
      window.removeEventListener('wheel', handleScroll as EventListener);
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between max-w-full">
      <Main/>
      <div className="absolute w-full">
        <Header/>
      </div>
      <Footer/>
       
      {showScrollTopButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-fuchsia-800 text-white p-4 rounded-full shadow-xl shadow-gray-700 z-50 hover:bg-fuchsia-900 transition-all duration-300 cursor-pointer"
          aria-label="Yukarı çık"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
}