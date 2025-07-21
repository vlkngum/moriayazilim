"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const blogs = [
  {
    id: "1",
    title: "Web Yazılım Nedir?",
    summary: "Web yazılımın temel kavramları ve işletmeler için sağladığı avantajlar.",
    date: "2025-07-21",
    image: "/about_us.jpg",
  },
  {
    id: "2",
    title: "Web Geliştirme Süreci: Başlangıçtan Yayına Kadar Adımlar",
    summary: "Web geliştirme projelerinde izlenen temel aşamalar ve dikkat edilmesi gerekenler.",
    date: "2025-07-21",
    image: "/main.jpg",
  },
  {
    id: "3",
    title: "Web Ajansı Seçerken Nelere Dikkat Edilmeli?",
    summary: "Profesyonel bir web ajansı seçiminde kritik kriterler ve ipuçları.",
    date: "2025-07-21",
    image: "/contact1.jpg",
  },
  {
    id: "4",
    title: "React, Angular ve Vue.js: Modern Web Geliştirme Teknolojileri Karşılaştırması",
    summary: "Popüler frontend framework’lerinin avantajları ve kullanım alanları.",
    date: "2025-07-21",
    image: "/about_us.jpg",
  },
  {
    id: "5",
    title: "SEO Uyumlu Web Siteleri Nasıl Tasarlanır?",
    summary: "SEO dostu web tasarım prensipleri ve uygulama önerileri.",
    date: "2025-07-21",
    image: "/main.jpg",
  },
  {
    id: "6",
    title: "E-Ticaret Web Sitesi Geliştirme: Başarının Anahtarı",
    summary: "E-ticaret sitesi kurarken dikkat edilmesi gereken teknik ve tasarım detayları.",
    date: "2025-07-21",
    image: "/contact1.jpg",
  },
  {
    id: "7",
    title: "Backend ve Frontend Geliştirme Arasındaki Farklar Nelerdir?",
    summary: "Web geliştirmede backend ve frontend kavramlarının karşılaştırılması.",
    date: "2025-07-21",
    image: "/about_us.jpg",
  },
  {
    id: "8",
    title: "WordPress ile Web Sitesi Kurmanın Avantajları ve Dezavantajları",
    summary: "WordPress kullanarak web sitesi kurmanın artıları ve eksileri.",
    date: "2025-07-21",
    image: "/main.jpg",
  },
  {
    id: "9",
    title: "Mobil Uyumlu Web Tasarım Neden Önemlidir?",
    summary: "Mobil cihazlarda sorunsuz çalışan web sitelerinin faydaları.",
    date: "2025-07-21",
    image: "/contact1.jpg",
  },
  {
    id: "10",
    title: "Web Sitesi Hızını Arttırmak İçin En İyi Yöntemler",
    summary: "Web site performansını yükselten teknik optimizasyon önerileri.",
    date: "2025-07-21",
    image: "/about_us.jpg",
  },
  {
    id: "11",
    title: "Web Yazılımda Güvenlik Önlemleri ve En İyi Uygulamalar",
    summary: "Web projelerinde güvenlik için alınması gereken temel önlemler.",
    date: "2025-07-21",
    image: "/main.jpg",
  },
  {
    id: "12",
    title: "Web Ajansı ile Çalışmanın İşletmenize Katkıları",
    summary: "Profesyonel ajans desteğinin işletmenize sağladığı avantajlar.",
    date: "2025-07-21",
    image: "/contact1.jpg",
  },
];

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-blue-500 font-medium">
          Haberlerimiz
        </span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-800">
          Son Gelişmeler
        </h1>
        {/* <div className="mt-4 flex justify-center">
          <div className="h-1 w-2xl bg-blue-500 rounded-full"></div>
        </div> */}
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
          Teknoloji, güvenlik ve web dünyasından en yeni haberler ve analizler burada!
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.map((blog) => (
          <Link
            key={blog.id + blog.date}
            href={`/blogs/detail?id=${blog.id}`}
            className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transition-all duration-300"
          >
            <div className="overflow-hidden h-56">
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[220px]">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                  {blog.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {blog.summary}
                </p>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">
                  {new Date(blog.date).toLocaleDateString("tr-TR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
              currentPage === i + 1
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-300 hover:bg-blue-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </main>
  );
}
