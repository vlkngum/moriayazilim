import { FaPhone, FaEnvelope, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center border-t border-black">

        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        <nav className="flex space-x-6 text-gray-800 font-medium">
          <a href="/">Anasayfa</a>
          <a href="/about">Hakkımızda</a>
          <a href="/portforio">Portfolyomuz</a>
          <a href="/contact">İletişim</a>
        </nav>

        <div className="flex space-x-4">
         <FaYoutube   className="cursor-pointer text-black hover:text-red-600" />
         <FaTwitter   className="cursor-pointer text-black hover:text-blue-500" />
         <FaFacebook  className="cursor-pointer text-black hover:text-blue-600" />
         <FaInstagram className="cursor-pointer text-black hover:text-pink-500" />
        </div>
      </div>

      
    </footer>
  );
}
