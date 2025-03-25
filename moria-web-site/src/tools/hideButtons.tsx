"use client";
import { useEffect } from "react";

interface HideScrollbarProps {
  setShowScrollTopButton: React.Dispatch<React.SetStateAction<boolean>>;
  setShowScrollDownButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HideButtons({ setShowScrollTopButton, setShowScrollDownButton }: HideScrollbarProps) {
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

  return null;  
}
