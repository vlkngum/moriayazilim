"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const blogs = [
  {
    id: "1",
    title: "Yapay Zeka ile Gelecek",
    summary: "Yapay zeka teknolojilerinin gelecekteki etkileri üzerine bir inceleme.",
    date: "2024-06-01",
    image: "/about_us.jpg",
  },
  {
    id: "2",
    title: "Web Geliştirmede Yeni Trendler",
    summary: "2024 yılında web geliştirme alanındaki en yeni trendler.",
    date: "2024-05-20",
    image: "/main.jpg",
  },
  {
    id: "3",
    title: "Siber Güvenlikte Dikkat Edilmesi Gerekenler",
    summary: "Kişisel ve kurumsal güvenlik için önemli ipuçları.",
    date: "2024-05-10",
    image: "/contact1.jpg",
  },
  {
    id: "1",
    title: "Yapay Zeka ile Gelecek",
    summary: "Yapay zeka teknolojilerinin gelecekteki etkileri üzerine bir inceleme.",
    date: "2024-06-01",
    image: "/about_us.jpg",
  },
  {
    id: "2",
    title: "Web Geliştirmede Yeni Trendler",
    summary: "2024 yılında web geliştirme alanındaki en yeni trendler.",
    date: "2024-05-20",
    image: "/main.jpg",
  },
  {
    id: "3",
    title: "Siber Güvenlikte Dikkat Edilmesi Gerekenler",
    summary: "Kişisel ve kurumsal güvenlik için önemli ipuçları.",
    date: "2024-05-10",
    image: "/contact1.jpg",
  },
  {
    id: "1",
    title: "Yapay Zeka ile Gelecek",
    summary: "Yapay zeka teknolojilerinin gelecekteki etkileri üzerine bir inceleme.",
    date: "2024-06-01",
    image: "/about_us.jpg",
  },
  {
    id: "2",
    title: "Web Geliştirmede Yeni Trendler",
    summary: "2024 yılında web geliştirme alanındaki en yeni trendler.",
    date: "2024-05-20",
    image: "/main.jpg",
  },
  {
    id: "3",
    title: "Siber Güvenlikte Dikkat Edilmesi Gerekenler",
    summary: "Kişisel ve kurumsal güvenlik için önemli ipuçları.",
    date: "2024-05-10",
    image: "/contact1.jpg",
  },
  {
    id: "1",
    title: "Yapay Zeka ile Gelecek",
    summary: "Yapay zeka teknolojilerinin gelecekteki etkileri üzerine bir inceleme.",
    date: "2024-06-01",
    image: "/about_us.jpg",
  },
  {
    id: "2",
    title: "Web Geliştirmede Yeni Trendler",
    summary: "2024 yılında web geliştirme alanındaki en yeni trendler.",
    date: "2024-05-20",
    image: "/main.jpg",
  },
  {
    id: "3",
    title: "Siber Güvenlikte Dikkat Edilmesi Gerekenler",
    summary: "Kişisel ve kurumsal güvenlik için önemli ipuçları.",
    date: "2024-05-10",
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
            href={`/blogs/${blog.id}`}
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
