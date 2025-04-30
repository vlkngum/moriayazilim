import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";  
import Image from "next/image";

interface HeaderWhiteProps {
  setShowWhiteHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderWhite: React.FC<HeaderWhiteProps> = ({ setShowWhiteHeader }) => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY < lastScrollY && scrollY > 0) {
        setShowWhiteHeader(true);
      } else {
        setShowWhiteHeader(false);
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="justify-center items-center py-6 bg-white border-b border-black"> 
      <div className="flex justify-between items-center px-20"> 
        <div className="text-4xl font-bold ">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" className="h-14 hover:scale-110 transition-all duration-300" />
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
                <Link href={path} className="text-black transition-all duration-300 lg:text-2xl md:text-lg">
                  {name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-black transition-transform duration-500 scale-x-0 
                  ${hovered === path ? "scale-x-100" : pathname === path && !hovered ? "scale-x-100" : ""}`}
                />
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-4xl font-bold ">
          <Link href="/">
            <Image src="/logo_white.png" alt="Logo" className="h-14 opacity-0" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderWhite;
