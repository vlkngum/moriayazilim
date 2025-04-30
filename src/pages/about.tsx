"use client";

import "@/styles/globals.css";

import { useEffect, useState } from "react";
import Header from "@/components/components/header";
import Footer from "@/components/components/footer";
import Main from "@/components/pages/about";

import HeaderWhite from "@/components/components/header_white";

import HideButtons from "@/tools/scrollButtons";
import HideScrollbar from "@/tools/scrollHide";

import { motion } from "motion/react"

export default function AboutPage() {

  const [showWhiteHeader, setShowWhiteHeader] = useState(false);

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

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={showWhiteHeader ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50"
      >
        <HeaderWhite setShowWhiteHeader={setShowWhiteHeader}/>
      </motion.div>

      <HideScrollbar/>
      <HideButtons/>
      
    </div>

    </motion.div>
  );
}
