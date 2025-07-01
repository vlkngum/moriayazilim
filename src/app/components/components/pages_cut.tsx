import Image from 'next/image';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageContent = [
    {
      title: "Projelerimiz",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit corporis dolor esse iure natus velit laborum expedita, deleniti beatae asperiores maiores, doloremque praesentium cum maxime sequi inventore architecto, nam necessitatibus? Nam blanditiis, ea ullam non sequi consectetur perspiciatis!",
      buttonText: "Yönlendir",
      image: "/our_work.png",
      href:'/about'
    },
    {
      title: "Portfolyomuz",
      description: "İkinci sayfamıza hoş geldiniz. Burada tamamladığımız en önemli projeleri görebilirsiniz. Her bir proje, benzersiz zorluklar ve yaratıcı çözümler sunmaktadır. Müşterilerimizle yakın işbirliği içinde çalışarak, her projede üstün kalite ve yenilikçi yaklaşımlar sunmayı hedefliyoruz.",
      buttonText: "Projeleri Gör",
      image: "/contact2.jpg",
      href:'/portfolio'
    },
    {
      title: "İletişim",
      description: "Bizimle iletişime geçmek için bu formunu kullanabilirsiniz. En kısa sürede size geri dönüş yapacağız. Sorularınızı, önerilerinizi veya işbirliği tekliflerinizi bekleriz. Daha fazla bilgi için sosyal medya hesaplarımızı da takip edebilirsiniz.",
      buttonText: "Gönder",
      image: "/contact2.jpg",
      href:'/contact'
    }
  ];


  return (
    <div className="relative max-w-full h-[70lvh] overflow-hidden mt-10 mb-10">
      <div 
        className="transition-transform duration-500 ease-in-out flex" 
        style={{ width: `${totalPages * 100}%`, transform: `translateX(-${(currentPage - 1) * (100 / totalPages)}%)` }}
      >
        {pageContent.map((page, index) => (
          <div 
            key={index} 
            className="flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse p-2"
            style={{ width: `${100 / totalPages}%` }}
          >
            <div className="flex flex-col justify-between lg:p-10 md:p-10 sm:p-10 lg:w-1/2 md:w-full sm:w-full lg:h-full md:h-1/2 sm:h-1/2">
              <div className="flex-col justify-between">
                <h1 className="lg:text-8xl md:text-6xl  sm:text-6xl self-center font-semibold mb-5">{page.title}</h1>
                <h1 className="lg:text-xl md:text-lg sm:text-lg self-center">{page.description}</h1>
                <a href={page.href}>
                    <button  className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition text-xl shadow-md shadow-gray-700">
                        {page.buttonText}
                    </button>
                </a>
              </div>

              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <h1 className="text-gray-400">{index + 1}/</h1>
                  <h1>{totalPages}</h1>
                </div>

                <div className="flex-1 h-[2px] bg-gray-300 mx-4"></div>

                <div className="flex space-x-2">
                  <button 
                    className={`${currentPage > 1 ? 'bg-gray-900' : 'bg-gray-500'} text-white p-6 rounded-full aspect-square cursor-pointer`}
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 1}
                  >
                    <FaArrowLeft size={30}/>
                  </button>
                  <button 
                    className={`${currentPage < totalPages ? 'bg-gray-900' : 'bg-gray-500'} text-white p-6 rounded-full aspect-square cursor-pointer`}
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === totalPages}
                  >
                    <FaArrowRight size={30}/>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between lg:p-10 md:px-10 sm:px-10 lg:w-1/2 md:w-full sm:w-full lg:h-full md:h-1/2 sm:h-1/2">
              <Image src={page.image}  className="w-full h-full rounded-3xl shadow-md object-cover shadow-gray-500" alt={page.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}