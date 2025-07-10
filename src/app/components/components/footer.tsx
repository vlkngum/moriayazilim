import Link from "next/link"; 
import Image from "next/image";
import SocialMediaIcons from './SocialMediaIcons';
import { navigationItems } from '@/app/data/navigation';
export default function Footer() {
  return (
    <>
    
    <footer className="w-full md:h-[10lvh] items-center justify-center md:p-4">
      <div className="container mx-auto py-10 px-6 justify-between items-center border-t border-black/43 flex flex-col md:flex-row ">
        <div className="flex self-center  md:pb-0 pb-6">
          <Link href="/">
              <Image 
                src="/logo.png" 
                alt="Logo"
                width={12}
                height={12}
                className="h-12 w-12 hover:scale-110 transition-all duration-300"
              />
            </Link>
          
        </div>

        <nav className="md:flex md:flex-row md:space-x-6 text-gray-700 font-medium self-center grid grid-cols-2">
          {navigationItems.map(({ name, path }, index) => {
            const isLastItem = index === navigationItems.length - 1;
            const isOddCount = navigationItems.length % 2 === 1;
            
            return (
              <Link 
                key={path}
                className={`text-lg md:text-xl hover:scale-110 transition-all duration-300 ${
                  isLastItem && isOddCount 
                    ? 'text-center col-span-2' 
                    : index % 2 === 0 
                      ? 'text-left mr-2' 
                      : 'text-right ml-2'
                }`} 
                href={path}
              >
                {name}
              </Link>
            );
          })}
        </nav>

        <a className="md:hidden pt-8 pb-4 text-gray-700">Sosyal Medyada Biz</a>

        <SocialMediaIcons className="text-2xl" iconSize="text-2xl" textColor="text-black" />
      </div>

      {/* Sadece mobilde gözükecek copyright satırı */}
      <div className="block md:hidden w-full text-center text-xs text-gray-600 pb-4">
        © Copyright 2025 Moria Yazılım A.Ş.
      </div>
    </footer>

    
    </>
    


  );
}
