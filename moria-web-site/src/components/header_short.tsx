'use client';

import { usePathname } from "next/navigation";

export default function Header_Short() {

  const pathname= usePathname();

  const pageTitles: { [key: string]: string } = {
    "/about": "Hakkımızda",
    "/contact": "İletişim",
    "/portfolio": "Portforyomuz",
  };

  const title = pageTitles[pathname];

  
    return (
    <div className="relative w-full h-[25lvh] bg-black">
      <img src="/header.jpg" alt="Hero" className="w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-end items-start text-center text-white px-4 ">
        <div className="p-10">
          <div className="flex">
            <a href="/" className="text-xs text-gray-300">Anasayfa </a>
            <h1 className="text-xs text-white font-semibold"> / {title}</h1>
          </div>
          <h1 className="text-xl text-white font-semibold">{title}</h1>
        </div>
      </div>
    </div>
    );
  }
  