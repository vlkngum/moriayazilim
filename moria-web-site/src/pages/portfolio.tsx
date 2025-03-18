import "@/styles/globals.css";

import Header from '../components/components/header';
import Footer from '../components/components/footer';


import Main from '../components/pages/portfolio';
 
import { useEffect } from "react";

export default function PorfolioPage() {

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
      
      setTimeout(() => {
        isScrolling = false;
      }, 1000); 
    };
    
    window.addEventListener('wheel', handleScroll as EventListener, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleScroll as EventListener);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between">
      <Main/>
      <div className="absolute w-full">
        <Header/> 
      </div>
      <Footer/>
    </div>
  );
}
