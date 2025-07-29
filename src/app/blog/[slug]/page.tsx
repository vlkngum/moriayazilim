"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Paragraph {
  title?: string;
  desc1?: string;
  desc2?: string;
  image?: string;
}

interface Category {
  id: string;
  name: string;
  desc?: string;
}

interface Blog {
  id: string;
  title: string;
  desc: string;
  image: string;
  categoryId: string;
  paragraphs?: Paragraph[];
  createdAt: string;
  updatedAt: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch('/api/get-blog');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const blogs = await res.json();
        const foundBlog = blogs.find((b: Blog) => b.id === slug);
        console.log('Found blog:', foundBlog);
        console.log('Paragraphs type:', typeof foundBlog?.paragraphs);
        console.log('Paragraphs content:', foundBlog?.paragraphs);
        setBlog(foundBlog || null);
      } catch (error) {
        console.error('Blog fetch hatası:', error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        console.log('Categories API çağrısı yapılıyor...');
        const res = await fetch('/api/category');
        console.log('Categories API response status:', res.status);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('Categories data:', data);
        
        if (data.success && Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          console.log('Categories data format hatası:', data);
        }
      } catch (error) {
        console.error('Categories fetch hatası:', error);
      }
    };

    if (slug) {
      Promise.all([fetchBlog(), fetchCategories()]).finally(() => {
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xl">Yükleniyor...</div>
        </div>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Blog Bulunamadı</h1>
        <p className="text-gray-500">Geçersiz veya eksik blog linki.</p>
        <Link href="/blog" className="text-blue-500 hover:underline mt-4 inline-block">
          ← Bloglara Geri Dön
        </Link>
      </main>
    );
  }

  function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('tr-TR', { 
      year: 'numeric', 
      month: 'long', 
      day: '2-digit' 
    });
  }

  return (
    <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Geri Dön Linki */}
      <Link
        href="/blog"
        className="text-blue-500 text-sm hover:underline mb-8 inline-block md:absolute left-15"
      >
        ← Bloglara Geri Dön
      </Link>

      {/* Başlık ve Tarih */}
      <div className="mb-12 text-center">
        <span className="text-sm uppercase tracking-widest text-blue-500 font-medium">
          Bloglarımız
        </span>
        <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          {blog.title}
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          {formatDate(blog.createdAt)} • {categories.find(cat => cat.id === blog.categoryId)?.name || 'Kategori Yok'}
          <br />
          
        </p>
        <div className="mt-4 w-24 h-1 bg-blue-500 rounded-full mx-auto" />
      </div>
      <p className="text-lg leading-relaxed mb-8">{blog.desc}</p>

      {/* Görsel */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02] aspect-video"
        />
      </div>

      {/* İçerik */}
      <article className="prose prose-lg max-w-none text-gray-800 my-24">
        {blog.paragraphs && (
          <div className="space-y-8">
            {Array.isArray(blog.paragraphs) ? 
              blog.paragraphs.map((paragraph: Paragraph, index: number) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  {paragraph.title && (
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {paragraph.title}
                    </h3>
                  )}
                  
                  {paragraph.desc1 && (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph.desc1}
                    </p>
                  )}
                  
                  {paragraph.image && (
                    <div className="my-6 rounded-lg overflow-hidden">
                      <Image
                        src={paragraph.image}
                        alt={paragraph.title || 'Blog görseli'}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover aspect-video"
                      />
                    </div>
                  )}
                  
                  {paragraph.desc2 && (
                    <p className="text-gray-700 leading-relaxed">
                      {paragraph.desc2}
                    </p>
                  )}
                </div>
              ))
              : 
              <p>İçerik yükleniyor...</p>
            }
          </div>
        )}
      </article>
    </main>
  );
} 