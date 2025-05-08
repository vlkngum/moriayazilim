import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone, FaEnvelope, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"; 

const Header = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

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
          <FaYoutube className="cursor-pointer text-white hover:text-red-600 hover:scale-110 transition-all duration-300" />
          <FaTwitter className="cursor-pointer text-white hover:text-blue-500 hover:scale-110 transition-all duration-300" />
          <FaFacebook className="cursor-pointer text-white hover:text-blue-600 hover:scale-110 transition-all duration-300" />
          <FaInstagram className="cursor-pointer text-white hover:text-pink-500 hover:scale-110 transition-all duration-300" />
        </div>
      </div>
 
      <div className="flex justify-between items-center mt-6 px-20"> 
        <div className="text-4xl font-bold ">
          <Link href="/">
            <img src="/logo_white.png" alt="Logo" className="h-14 hover:scale-110 transition-all duration-300" />
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
            <img src="/logo_white.png" alt="Logo" className="h-14 opacity-0" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
