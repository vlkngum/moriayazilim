"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronUp, Search, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Portfolio {
  id: string;
  image: string;
  name: string;
  description: string;
  category: string;
  href: string;
}

interface Category {
  id: string;
  name: string;
}

// Portfolio verileri - sayfa içi
const portfolioData: Portfolio[] = [
  {
    id: "1",
    image: "/mockup.jpg",
    name: "Entekas",
    description: "Endüstriyel otomasyon, elektrik taahhüt ve sistem entegrasyonu alanında hizmet veren Entekas için kurumsal web tasarımı.",
    category: "Endüstriyel Çözümler",
    href: "https://entekas.com"
  },
  {
    id: "2",
    image: "/logo.png",
    name: "Kuaför Demo",
    description: "Modern ve kullanıcı dostu bir kuaför web sitesi tasarım konsepti. Renk paleti, tipografi ve düzen tamamen kullanıcı deneyimini ön planda tutacak şekilde oluşturuldu. Bu proje, Moria Yazılım’ın sektöre özel web tasarım yetkinliklerini sergilemek amacıyla hazırlanmış bir demo çalışmadır.",
    category: "Demo Projeler",
    href: "https://kuafor-moria-demo.vercel.app/"
  }
];

// Portfolio kategorileri - sayfa içi
const portfolioCategories: Category[] = [
  {
    id: "1",
    name: "Endüstriyel Çözümler"
  },
  {
    id: "2",
    name: "Demo Projeler"
  }
];

export default function PortfolioPage() {
  const [categories] = useState<Category[]>(portfolioCategories);
  const [portfolios] = useState<Portfolio[]>(portfolioData);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categorySearch, setCategorySearch] = useState<string>('');
  const [showCategories, setShowCategories] = useState(true);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Filtrelenmiş portfolyoları hesapla
  const filteredPortfolios = selectedCategory === 'all' 
    ? portfolios 
    : portfolios.filter(portfolio => portfolio.category === selectedCategory);

  // Her kategorideki portfolio sayısını hesapla
  const getCategoryCount = (categoryName: string) => {
    return portfolios.filter(portfolio => portfolio.category === categoryName).length;
  };

  // Kategorileri portfolio sayısına göre sırala (en çok kullanılan önce)
  const sortedCategories = [...categories].sort((a, b) => {
    const countA = getCategoryCount(a.name);
    const countB = getCategoryCount(b.name);
    return countB - countA;
  });

  // Arama ile filtrelenmiş kategoriler
  const filteredCategories = sortedCategories.filter(category =>
    category.name.toLowerCase().includes(categorySearch.toLowerCase())
  );

  // Kategori kaydırma fonksiyonları
  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const scrollAmount = 200;
      const currentScroll = categoryScrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      categoryScrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-blue-500 font-medium">
          PORTFOLYO
        </span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-800">
          Çalışmalarımız
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
          Tamamladığımız projeler ve müşterilerimiz için geliştirdiğimiz dijital çözümler!
        </p>
      </div>

      {/* Kategori Filtreleme Bölümü */}
      <div className={`mb-8 border-none overflow-hidden transition-all duration-1000 ${showCategories ? 'bg-white rounded-xl shadow-lg border border-gray-200' : ''}`}>
        {/* Kategori İçeriği */}
        <div className={`transition-all duration-300 overflow-hidden ${
          showCategories ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-6">

            <div className="flex flex-row justify-between">
              <h3 className="text-xl font-semibold text-gray-800 p-2">Kategoriler</h3>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Kategori ara..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                />
                {categorySearch && (
                  <button
                    onClick={() => setCategorySearch('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            {/* Kategori Butonları - Yatay Kaydırmalı */}
            <div className="relative w-full">
              {/* Sol Ok */}
              <button
                onClick={() => scrollCategories('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
                style={{ marginLeft: '-16px' }}
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              {/* Sağ Ok */}
              <button
                onClick={() => scrollCategories('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
                style={{ marginRight: '-16px' }}
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>

              {/* Kategori Container */}
              <div 
                ref={categoryScrollRef}
                className="flex items-center gap-3 overflow-x-auto scrollbar-hide px-8 py-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {/* Tümü Butonu */}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600 shadow-sm'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    Tümü 
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      selectedCategory === 'all'
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {portfolios.length}
                    </span>
                  </span>
                </button>

                {/* Kategoriler */}
                {filteredCategories.map((category) => {
                  const count = getCategoryCount(category.name);
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category.name
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-600 shadow-sm'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {category.name}
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          selectedCategory === category.name
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {count}
                        </span>
                      </span>
                    </button>
                  );
                })}

                {/* Arama sonucu bulunamadı */}
                {categorySearch && filteredCategories.length === 0 && (
                  <div className="text-gray-500 text-sm py-2 flex-shrink-0">
                    {categorySearch} için kategori bulunamadı
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center py-2">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="p-2 hover:bg-gray-100 rounded-sm transition-colors duration-200 "
            title={showCategories ? "Kategorileri Gizle" : "Kategorileri Göster"}
          >
            <ChevronUp 
              className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                showCategories ? 'rotate-0' : 'rotate-180'
              }`} 
            />
          </button>
        </div>
      </div>

      {/* Portfolio Listesi */}
      {filteredPortfolios.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-xl text-gray-500">
            {selectedCategory === 'all' 
              ? 'Henüz portfolio projesi bulunmuyor.' 
              : 'Bu kategoride portfolio projesi bulunmuyor.'
            }
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolios.map((portfolio) => (
            <a
              key={portfolio.id}
              href={portfolio.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-200 h-fit"
            >
              <div className="overflow-hidden">
                <Image
                  src={portfolio.image}
                  alt={portfolio.name}
                  width={600}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                      {portfolio.name}
                    </h2>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  </div>
                  <div className="flex gap-2 items-center text-xs text-gray-500 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {portfolio.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {portfolio.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
  