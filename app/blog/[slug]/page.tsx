import React from "react";
import { Metadata } from "next";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

// Dinamik SEO Metadata üretimi
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Yazı Bulunamadı" };
  }

  return {
    title: `${post.title} | Ataseven Yaylası`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Statik sayfa üretimi için yolları belirle (Performans için)
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors">
          <ArrowLeft size={20} /> Blog'a Dön
        </Link>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-forest-900/5">
          <div className="h-[400px] w-full relative">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 text-white/80 text-sm font-semibold mb-4 uppercase tracking-wider">
                <span>{post.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
          
          <div className="p-8 md:p-12 lg:p-16">
            <div 
              className="max-w-none 
                [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-light [&>h2]:text-forest-900 [&>h2]:tracking-tight [&>h2]:border-b [&>h2]:border-emerald-100 [&>h2]:pb-4 [&>h2]:mb-6 [&>h2]:mt-12
                [&>p]:text-forest-900/80 [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
                [&>ul>li]:text-forest-900/80 [&>ul>li]:text-lg
                [&>div>h3]:text-xl [&>div>h3]:font-bold [&>div>h3]:text-forest-900 [&>div>h3]:mb-2
                [&>div>p]:text-forest-900/80 [&>div>p]:mb-4
                [&>div>a]:inline-block [&>div>a]:bg-emerald-600 [&>div>a]:text-white [&>div>a]:font-bold [&>div>a]:py-3 [&>div>a]:px-6 [&>div>a]:rounded-full [&>div>a]:hover:bg-emerald-700 [&>div>a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
