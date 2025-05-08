'use client';

import { useState } from "react"; 
import ScrollHide from "./tools/scrollHide"; 
import { Suspense } from 'react';
import { usePathname } from "next/navigation";

import Header_Short from "./components/components/header_short";
import Header_Long from "./components/components/header_long";

import Footer from "./components/components/footer"; 
import Header from "./components/components/header";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  return (
    <> 

      
      <div className={`w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="absolute w-full z-40">
          <Header />
        </div>
        {pathname === '/' ? <Header_Long /> : <Header_Short />}
 
      </div>



      <div>
        {children}
        <Footer />
        <ScrollHide />
      </div>
    </>
  );
}
