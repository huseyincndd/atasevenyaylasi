import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Faydalı Bilgiler | Ataseven Yaylası",
  description: "At sütü, eşek sütü ve kımız hakkında merak ettiğiniz tüm faydalı bilgiler, tüketim rehberleri ve sağlık ipuçları.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-forest-900 mb-6">Faydalı Bilgiler</h1>
          <p className="text-lg text-forest-900/60 max-w-2xl mx-auto">
            Doğadan gelen şifa kaynakları hakkında bilmeniz gereken her şey. At sütü, eşek sütü ve kımızın faydalarını uzmanından öğrenin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-forest-900/5"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  {post.readTime}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-xs text-forest-900/40 mb-3">{post.date}</div>
                <h2 className="text-2xl font-semibold text-forest-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-forest-900/60 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-emerald-600 font-semibold text-sm uppercase tracking-wider mt-auto group-hover:translate-x-2 transition-transform">
                  Devamını Oku &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
