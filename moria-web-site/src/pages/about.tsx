import "@/styles/globals.css";

import Header from '../components/header';
import Footer from '../components/footer';


import About from '../components/pages/about';


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between">
      <About/>
      <div className="absolute w-full">
        <Header/> 
      </div>
      <Footer/>
    </div>
  );
}
