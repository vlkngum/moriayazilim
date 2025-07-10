import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";  
import Image from "next/image";
import { navigationItems } from '@/app/data/navigation';

interface HeaderWhiteProps {
  setShowWhiteHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderWhite: React.FC<HeaderWhiteProps> = ({ setShowWhiteHeader }) => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  const lastScrollY = React.useRef(0);


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY < lastScrollY.current && scrollY > 0) {
        setShowWhiteHeader(true);
      } else {
        setShowWhiteHeader(false);
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setShowWhiteHeader]);


  return (
    <header className="justify-center items-center py-6 bg-white/80 "> 
      <div className="flex justify-between items-center px-20"> 
        <div className="text-4xl font-bold ">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={64} height={64} className="h-14 hover:scale-110 transition-all duration-300" />
          </Link>
        </div>
 
        <nav>
          <ul className="flex space-x-14 text-xl font-semibold">
            {navigationItems.map(({ name, path }) => (
              <li
                key={path}
                className="relative group"
                onMouseEnter={() => setHovered(path)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link href={path} className="text-gray-700 transition-all duration-300 lg:text-2xl md:text-lg">
                  {name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-gray-700 transition-transform duration-500 scale-x-0 
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
  );
};

export default HeaderWhite;
