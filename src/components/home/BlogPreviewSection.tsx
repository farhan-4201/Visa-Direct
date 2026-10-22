import React from "react";
import Link from "next/link";
import { MessageSquare, ArrowUpRight, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogData";

export function BlogPreviewSection() {
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#c68a4c]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0c4c6d]">
              News & Updates
            </span>
            <span className="w-8 h-[2px] bg-[#c68a4c]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072333] tracking-tight">
            Latest News & Articles
            <br />
            From the Blog
          </h2>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header / Date Badge */}
                <div className="relative h-48 bg-gradient-to-br from-[#0c4c6d] to-[#072333] p-6 flex flex-col justify-between text-white overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />

                  {/* Top Category Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border border-white/20">
                      {post.category}
                    </span>

                    {/* Floating Date Badge */}
                    <div className="w-11 h-12 rounded-lg bg-white text-[#0c4c6d] flex flex-col items-center justify-center font-bold shadow-md">
                      <span className="text-sm leading-none font-black">{post.day}</span>
                      <span className="text-[10px] uppercase font-semibold text-[#c68a4c]">
                        {post.month}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Placeholder Abstract Graphic */}
                  <div className="relative z-10 text-xs text-slate-200 font-medium">
                    {post.featuredImagePlaceholderText}
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0c4c6d] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer Row */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.commentsCount} Comments</span>
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0c4c6d] group-hover:bg-[#0c4c6d] group-hover:text-white transition-all shadow-sm"
                  aria-label={`Read article: ${post.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blog Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0c4c6d] hover:text-[#083248] hover:underline"
          >
            <span>Explore All Legal Insights & Updates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
