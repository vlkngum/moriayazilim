"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Blog {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  content: string;
}

export default function BlogDetailClient({ blogs, RelatedPosts }: { blogs: Blog[]; RelatedPosts: React.ComponentType<{ relatedBlogs: Blog[] }> }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const blog = blogs.find((b) => b.id === id);
  const relatedBlogs = blogs.filter((b) => b.id !== id);

  if (!id || !blog) {
    return (
      <main className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Blog Bulunamadı</h1>
        <p className="text-gray-500">Geçersiz veya eksik blog linki.</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Geri Dön Linki */}
      <Link
        href="/blogs"
        className="text-blue-500 text-sm hover:underline mb-8 inline-block"
      >
        ← Bloglara Geri Dön
      </Link>

      {/* Başlık ve Tarih */}
      <div className="mb-12 text-center">
        <span className="text-sm uppercase tracking-widest text-blue-500 font-medium">
          Haberlerimiz
        </span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          {blog.title}
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          {new Date(blog.date).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="mt-4 w-24 h-1 bg-blue-500 rounded-full mx-auto" />
      </div>

      {/* Görsel */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full h-80 object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* İçerik */}
      <article className="prose prose-lg max-w-none text-gray-800 mb-16">
        {blog.content.split("\n\n").map((para: string, i: number) => (
          <p key={i}>{para}</p>
        ))}
      </article>

      {/* Benzer Yazılar Slider */}
      <RelatedPosts relatedBlogs={relatedBlogs} />
    </main>
  );
} 