'use client';

import { useState } from 'react';

export default function Header_Short() {
  const [imageSrc, setImageSrc] = useState('/code.png');
  const [isHovered, setIsHovered] = useState(false);

  return (
      <div className="w-full h-screen items-center justify-center flex ">
        <div
          style={{ backgroundImage: `url('${imageSrc}')` }}
          className="relative w-full h-[90lvh] overflow-hidden flex flex-row bg-cover bg-center transition-all duration-700 ease-in-out"
        >
          <div
            className={`h-full w-1/2 flex justify-center flex-col px-14 py-10 gap-4 transition-all duration-700 ease-in-out ${
              !isHovered ? 'translate-y-[-20px]' : ''
            }`}>
            <div className="w-full flex items-start transition-all duration-700 ease-in-out">
              <h1
                className={`text-6xl text-white transition-all duration-700 ${!isHovered ? 'translate-y-[-10px] opacity-100' : 'opacity-70'}`}>01</h1>
            </div>
            <div className="w-full flex items-start transition-all duration-700 ease-in-out">
              <h1
                className={`text-6xl text-white transition-all duration-700 ${!isHovered ? 'translate-y-[-10px] opacity-100' : 'opacity-70'}`}>Web Tasarım</h1>
            </div>
            <div className="w-full flex items-start transition-all duration-700 ease-in-out">
              <h1
                className={`text-2xl text-white transition-all duration-700 ${!isHovered ? 'translate-y-[-10px] opacity-100' : 'opacity-70'}`}
              >
                Modern ve kullanıcı dostu web tasarımı ile markanızı dijital dünyada öne çıkarıyoruz. Responsive tasarım, SEO uyumlu yapı ve hızlı yükleme süreleri ile müşterilerinize en iyi deneyimi sunuyoruz.
              </h1>
            </div>
          </div>

          <div
            className={`h-full w-1/2 border-l border-white flex justify-center flex-col px-14 py-10 gap-4 transition-all duration-700 ease-in-out ${
              isHovered ? 'translate-y-[-20px]' : ''
            }`}
            onMouseEnter={() => {
              setImageSrc('/logodesign.png');
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setImageSrc('/code.png');
              setIsHovered(false);
            }}
          >
            <div className="w-full flex items-start transition-all duration-700 ease-in-out">
              <h1
                className={`text-6xl text-white transition-all duration-700 ${isHovered ? 'translate-y-[-10px] opacity-100' : 'opacity-70'}`}>02</h1>
            </div>
            <div className="w-full flex items-start transition-all duration-700 ease-in-out">
              <h1
                className={`text-6xl text-white transition-all duration-700 ${isHovered ? 'translate-y-[-10px] opacity-100' : 'opacity-70'}`}>Logo Tasarım </h1>
            </div>
            <div className="w-full flex items-start transition-all duration-700 ease-in-out">
              <h1
                className={`text-2xl text-white transition-all duration-700 ${isHovered ? 'translate-y-[-10px] opacity-100' : 'opacity-70'}`}
              >
                Markanızın kimliğini yansıtan, akılda kalıcı ve profesyonel logo tasarımları oluşturuyoruz. Her logo, markanızın değerlerini ve hedef kitlenizi yansıtacak şekilde özenle tasarlanır.
              </h1>
            </div>
          </div>
        </div>
      </div>
 
  );
}
