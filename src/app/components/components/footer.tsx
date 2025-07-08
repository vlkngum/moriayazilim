import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link"; 
import Image from "next/image";
export default function Footer() {
  return (
    <>
    
    <footer className="w-full md:h-[10lvh] items-center justify-center md:p-4">
      <div className="container mx-auto py-10 px-6 justify-between items-center border-t border-black flex flex-col md:flex-row ">

        <div className="flex  md:self-center self-start md:pb-0 pb-6">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="h-10 hover:scale-110 transition-all duration-300" />
          </Link>
          
        </div>

        <nav className="flex flex-col md:flex-row space-x-6 text-gray-800 font-medium md:self-center self-start">
          <Link className="text-lg md:text-xl hover:scale-110 transition-all duration-300" href="/">Anasayfa</Link>
          <Link className="text-lg md:text-xl hover:scale-110 transition-all duration-300" href="/about">Hakkımızda</Link>
          <Link className="text-lg md:text-xl hover:scale-110 transition-all duration-300" href="/portfolio">Portfolyomuz</Link>
          <Link className="text-lg md:text-xl hover:scale-110 transition-all duration-300" href="/contact">İletişim</Link>
        </nav>

        <a className="md:hidden py-4">Sosyal Medyada Biz</a>

        <div className="flex space-x-5">
          <FaYoutube   className="cursor-pointer text-xl md:text-2xl text-black hover:text-red-600  hover:scale-150 transition-all duration-300" />
          <FaTwitter   className="cursor-pointer text-xl md:text-2xl text-black hover:text-blue-500 hover:scale-150 transition-all duration-300" />
          <FaFacebook  className="cursor-pointer text-xl md:text-2xl text-black hover:text-blue-600 hover:scale-150 transition-all duration-300" />
          <FaInstagram className="cursor-pointer text-xl md:text-2xl text-black hover:text-pink-500 hover:scale-150 transition-all duration-300" />
        </div>
      </div>

      {/* Sadece mobilde gözükecek copyright satırı */}
      <div className="block md:hidden w-full text-center text-xs text-gray-600 pb-4">
        © Copyright 2025 Moria Yazılım A.Ş.
      </div>
    </footer>

    
    </>
    


  );
}
