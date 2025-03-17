import React from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <header className="px-3 py-2"> 
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <span className="flex items-center space-x-1 text-xs text-white">
            <FaPhone />
            <span>0551 966 78 36</span>
          </span>
          <span className="flex items-center space-x-1 text-xs text-white">
            <FaEnvelope />
            <span>iletisim@volkangumus.com</span>
          </span>
        </div>

        <div className="flex space-x-3 text-xs">
          <FaYoutube   className="cursor-pointer text-white hover:text-red-600" />
          <FaTwitter   className="cursor-pointer text-white hover:text-blue-500" />
          <FaFacebook  className="cursor-pointer text-white hover:text-blue-600" />
          <FaInstagram className="cursor-pointer text-white hover:text-pink-500" />
        </div>
      </div>

      {/* Logo & Menü */}
      <div className="flex justify-center items-center mt-6">
        {/* Logo */}
        <div className="text-4xl font-bold absolute left-10">
            <img src="/logo_white.png" alt="Logo" className="h-10" />
        </div>

        {/* Menü */}
        <nav>
          <ul className="flex space-x-14 text-lg font-semibold">
            <li>
              <Link href="/" className="text-white hover:text-gray-400">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="text-white hover:text-gray-400">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/portfolyo" className="text-white hover:text-gray-400">
                Portfolyomuz
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="text-white hover:text-gray-400">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
