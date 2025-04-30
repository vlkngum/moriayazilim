import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white w-full h-[10lvh] items-center justify-center pt-5">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center border-t border-black">

        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" className="h-10 hover:scale-110 transition-all duration-300" />
          </Link>
          
        </div>

        <nav className="flex space-x-6 text-gray-800 font-medium">
          <Link href="/">Anasayfa</Link>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/portflio">Portfolyomuz</Link>
          <Link href="/contact">İletişim</Link>
        </nav>

        <div className="flex space-x-5">
          <FaYoutube   className="cursor-pointer text-xl text-black hover:text-red-600  hover:scale-150 transition-all duration-300" />
          <FaTwitter   className="cursor-pointer text-xl text-black hover:text-blue-500 hover:scale-150 transition-all duration-300" />
          <FaFacebook  className="cursor-pointer text-xl text-black hover:text-blue-600 hover:scale-150 transition-all duration-300" />
          <FaInstagram className="cursor-pointer text-xl text-black hover:text-pink-500 hover:scale-150 transition-all duration-300" />
        </div>
      </div>

      
    </footer>
  );
}
