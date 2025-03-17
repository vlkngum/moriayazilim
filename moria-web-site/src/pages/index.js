import "@/styles/globals.css";

import { Inter } from 'next/font/google';

import Header from '../components/header';
import Footer from '../components/footer';
import Main from '../components/main';



export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between">
      
      
      <div className="absolute w-full">
        <Header/> 
      </div>
      <Main/>
      <Footer/>
    </div>
  );
}
