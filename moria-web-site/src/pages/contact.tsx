import "@/styles/globals.css";

import Header from '../components/header';
import Footer from '../components/footer';


import Contact from '../components/pages/contact';


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 justify-between">
      <Contact/>
      <div className="absolute w-full">
        <Header/> 
      </div>
      <Footer/>
    </div>
  );
}
