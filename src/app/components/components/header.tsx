"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from "next/navigation";
import { FaPhone, FaEnvelope, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  // Scroll lock for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.touchAction = '';
    };
  }, [isMenuOpen]);

  return (
    < >
    <header className="px-3 py-2 md:flex hidden flex-col"> 
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
          <FaYoutube className="cursor-pointer text-white hover:text-red-600 hover:scale-110 transition-all duration-300" />
          <FaTwitter className="cursor-pointer text-white hover:text-blue-500 hover:scale-110 transition-all duration-300" />
          <FaFacebook className="cursor-pointer text-white hover:text-blue-600 hover:scale-110 transition-all duration-300" />
          <FaInstagram className="cursor-pointer text-white hover:text-pink-500 hover:scale-110 transition-all duration-300" />
        </div>
      </div>
 
      <div className="flex justify-between items-center mt-6 px-20"> 
        <div className="text-4xl font-bold ">
          <Link href="/">
            <Image src="/logo_white.png" alt="Logo" width={64} height={64} className="h-14 hover:scale-110 transition-all duration-300" />
          </Link>
        </div>
 
        <nav>
          <ul className="flex space-x-14 text-xl font-semibold">
            {[
              { name: "Anasayfa", path: "/" },
              { name: "Hakkımızda", path: "/about" },
              { name: "Portfolyomuz", path: "/portfolio" },
              { name: "İletişim", path: "/contact" },
            ].map(({ name, path }) => (
              <li
                key={path}
                className="relative group"
                onMouseEnter={() => setHovered(path)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link href={path} className="text-white transition-all duration-300 lg:text-2xl md:text-lg">
                  {name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-white transition-transform duration-500 scale-x-0 
                  ${hovered === path ? "scale-x-100" : pathname === path && !hovered ? "scale-x-100" : ""}`}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-4xl font-bold ">
          <Link href="/">
            <Image src="/logo_white.png" alt="Logo" width={64} height={64} className="h-14 opacity-0" />
          </Link>
        </div>
      </div>
    </header>

    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg shadow-black/20 md:hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-25">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={200} 
                height={56} 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-fuchsia-800 px-3 py-2 text-sm font-medium">
              Ana Sayfa
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-fuchsia-800 px-3 py-2 text-sm font-medium">
              Hakkımızda
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-fuchsia-800 px-3 py-2 text-sm font-medium">
              Portfolyo
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-fuchsia-800 px-3 py-2 text-sm font-medium">
              İletişim
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-fuchsia-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col h-full w-full mb-10 md:hidden">
          <div className="flex items-start justify-between p-4 relative">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={80} height={40} className="h-16 w-auto" />
            </Link>
            <button
              onClick={toggleMenu}
              className="fixed top-8 right-5 bg-transparent text-black flex items-center justify-center w-8 h-8 text-4xl z-[100]"
              aria-label="Menüyü Kapat"
            >
              <span className="flex items-center justify-center w-full h-full text-4xl"><FaTimes /></span>
            </button>
          </div>
          <hr className="my-2 border-gray-300" />
          <nav className="flex-1 flex flex-col justify-start px-6 gap-6 mt-4">
            <Link href="/" className="text-2xl font-normal" onClick={() => setIsMenuOpen(false)}>Anasayfa</Link>
            <Link href="/about" className="text-2xl font-normal" onClick={() => setIsMenuOpen(false)}>Hakkımızda</Link>
            <Link href="/portfolio" className="text-2xl font-normal" onClick={() => setIsMenuOpen(false)}>Portfolyomuz</Link>
            <Link href="/contact" className="text-2xl font-normal" onClick={() => setIsMenuOpen(false)}>İletişim</Link>
          </nav>
          <div className="mt-auto w-full">
            <hr className="mb-2 border-gray-300" />
            <div className="flex flex-col gap-2 px-6 pb-4 mb-5">
              <div className="flex items-center gap-2 text-base">
                <FaPhone />
                <span>0551 966 78 36</span>
                <FaYoutube className="ml-4" />
                <FaTwitter className="ml-2" />
                <FaFacebook className="ml-2" />
                <FaInstagram className="ml-2" />
              </div>
              <div className="flex items-center gap-2 text-base">
                <FaEnvelope />
                <span>iletisim@moriayazilim.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
    </ >
    
  );
}
