'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header_Short() {

  const pathname= usePathname();

  const pageTitles: { [key: string]: string } = {
    "/about": "Hakkımızda",
    "/contact": "İletişim",
    "/portfolio": "Portfolyomuz",
  };

  const title = pageTitles[pathname];

  
    return (
      <div style={{ backgroundImage: `url('/header.png')` }}
      className="relative w-full h-[20lvh] object-cover bg-cover bg-center flex items-center">
        <div className="flex text w-full h-full items-end text-white px-4">
        <div className="p-5">
          <div className="flex">
            <Link href="/" className="text-xs text-gray-300">Anasayfa </Link>
            <h1 className="text-xs text-white font-semibold"> / {title}</h1>
          </div>
          <h1 className="text-xl text-white font-semibold">{title}</h1>
        </div>
      </div>
    </div>
    );
  }
  