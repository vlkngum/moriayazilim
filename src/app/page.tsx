"use client";

import "@/app/globals.css";

import { useState } from "react"; 
 

import Portfolio_Cut from '@/app/components/components/pages_cut';

import Our_Services from '@/app/components/components/our_services';

import ScrollVelocity from  "@/app/utils/ScrollVelocity/ScrollVelocity";

export default function IndexPage() {
 

  return (
   
    
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between max-w-full overflow-hidden">
  
    

      <Portfolio_Cut/>

      <div className="relative w-full h-[30lvh] flex flex-col p-4 justify-center">
        <ScrollVelocity
          texts={['VOLKAN GUMUS YAHYA SEVINC TUNA AKTAS', 'SALIM OZturk EFE CABAOGLU MERIC KIZILSU']} 
          velocity={100} 
          className="custom-scroll-text"
        />
      </div>
      <Our_Services/>
      
    </div>
 
  );
}
