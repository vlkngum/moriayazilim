"use client";

import "@/app/globals.css"; 




export default function Portfolio() {
    return (
      <> 
      <div className="h-[70vh] w-full bg-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center drop-shadow-lg select-none">
          Henüz Yayında Projemiz Bulunmuyor
        </h1>
        <p className="mt-6 max-w-2xl text-center text-gray-500 text-base md:text-lg select-none">
          Yakında burada tamamladığımız web projelerini, müşterilerimize özel tasarladığımız siteleri ve dijital çözümlerimizi görebileceksiniz.<br/>
          Yeni projeler üzerinde çalışıyoruz — siz de bir sonraki iş ortağımız olabilirsiniz!
        </p>
      </div> 
      </>
    );
  }
  