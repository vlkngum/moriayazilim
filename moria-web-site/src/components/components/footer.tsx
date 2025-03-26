import { FaPhone, FaEnvelope, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white w-full h-[10lvh] items-center justify-center pt-5">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center border-t border-black">

        <div className="flex items-center">
          <a href="/">
            <img src="/logo.png" alt="Logo" className="h-10 hover:scale-110 transition-all duration-300" />
          </a>
          
        </div>

        <nav className="flex space-x-6 text-gray-800 font-medium">
          <a href="/">Anasayfa</a>
          <a href="/about">Hakkımızda</a>
          <a href="/portflio">Portfolyomuz</a>
          <a href="/contact">İletişim</a>
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
