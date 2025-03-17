import "@/styles/globals.css";

import Header from '../components/header';
import Footer from '../components/footer';


import Main from '../components/pages/portfolio';


export default function PorfolioPage() {
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
