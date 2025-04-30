"use client";

import "@/styles/globals.css";
 
import Header from "@/components/components/header";
import Footer from "@/components/components/footer";
import Main from "@/components/pages/contact";
 

import HideButtons from "@/tools/scrollButtons";
import HideScrollbar from "@/tools/scrollHide";

import { motion } from "motion/react"

export default function ContactPage() {
 

  return (
   
    <motion.div
    initial={{ opacity: 0, y: -200 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    
  >
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between max-w-full overflow-hidden">

      <Main />
      <div className="absolute w-full z-40">
        <Header />
      </div>
      <Footer /> 
      <HideScrollbar/> 
      <HideButtons/>
      
    </div>

    </motion.div>
  );
}
