"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  MessageSquare,
  User,
  ArrowRight,
  ChevronRight,
  Tag,
  Folder,
  Calendar,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { blogPosts } from "@/data/blogData";

export default function BlogIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { name: "All Categories", count: blogPosts.length },
    { name: "Skilled Worker Visa", count: 1 },
    { name: "Sole Representative Visa", count: 1 },
    { name: "Parent's Visa", count: 1 },
    { name: "Success Stories", count: 1 },
    { name: "Legal Advice", count: 1 },
  ];

  const popularTags = [
    "Skilled Worker",
    "Sponsorship",
    "Family Reunification",
    "Parent Visa",
    "Corporate Mobility",
    "Appeal Strategy",
    "UK Settlement",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All Categories" ||
      post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHeader
        title="News & Articles"
        subtitle="In-depth analysis, legal updates, and practical guidance on UK immigration law."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 8 Cols: Article Cards Stream */}
            <div className="lg:col-span-8 space-y-8">
              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No Articles Found</h3>
                  <p className="text-sm text-slate-500 mb-4">
                    No articles match your search criteria. Try a different query.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                    className="text-xs font-bold text-[#0c4c6d] hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0c4c6d]/30 transition-all duration-300"
                  >
                    {/* Visual Card Banner */}
                    <div className="relative h-64 bg-gradient-to-r from-[#0c4c6d] to-[#072333] p-8 text-white flex flex-col justify-between overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                          {post.category}
                        </span>

                        {/* Date Badge */}
                        <div className="w-12 h-14 rounded-xl bg-white text-[#0c4c6d] flex flex-col items-center justify-center font-bold shadow-md">
                          <span className="text-base font-black leading-none">{post.day}</span>
                          <span className="text-[11px] uppercase font-semibold text-[#c68a4c]">
                            {post.month}
                          </span>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs text-slate-300 font-medium">
                          {post.featuredImagePlaceholderText}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 space-y-4">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pb-2 border-b border-slate-100">
                        <span className="inline-flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#0c4c6d]" />
                          <span>By {post.author}</span>
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                          <span>{post.commentsCount} Comments</span>
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-slate-900 hover:text-[#0c4c6d] transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="pt-2 flex items-center justify-between">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0c4c6d] text-white hover:bg-[#083248] text-xs font-bold transition-all shadow-sm"
                        >
                          <span>Read Full Article</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          {post.tags.slice(0, 2).map((t, idx) => (
                            <span key={idx} className="bg-slate-100 px-2.5 py-0.5 rounded-full">
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              )}
            </div>

            {/* Right 4 Cols: Classic Blog Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Search Widget */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0c4c6d]"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Folder className="w-4 h-4 text-[#0c4c6d]" />
                  <span>Categories</span>
                </h3>
                <ul className="space-y-1.5 text-xs font-medium">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === cat.name ? null : cat.name
                          )
                        }
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors cursor-pointer ${
                          selectedCategory === cat.name
                            ? "bg-[#0c4c6d] text-white font-bold"
                            : "text-slate-700 hover:bg-slate-50 hover:text-[#0c4c6d]"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] ${
                            selectedCategory === cat.name
                              ? "bg-white/20 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Articles Widget */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                  Recent Posts
                </h3>
                <div className="space-y-3">
                  {blogPosts.slice(0, 4).map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group block p-2 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#0c4c6d] line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <span className="text-[11px] text-slate-400 mt-1 block">
                        {post.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags Cloud */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-[#c68a4c]" />
                  <span>Popular Tags</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-[#0c4c6d] hover:text-white text-slate-600 transition-colors cursor-pointer"
                      onClick={() => setSearchQuery(tag)}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
