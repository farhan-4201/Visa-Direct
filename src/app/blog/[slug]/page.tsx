import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  User,
  MessageSquare,
  ArrowLeft,
  Share2,
  Tag,
  CheckCircle2,
  Clock,
  Send,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/Button";
import { BlogCommentForm } from "@/components/blog/BlogCommentForm";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Visa Direct Immigration",
    };
  }

  return {
    title: `${post.title} | Visa Direct Immigration Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherArticles = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <PageHeader
        title={post.title}
        subtitle={`Published in ${post.category} on ${post.date}`}
        categoryBadge={post.category}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Main Article Container */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            {/* Meta header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                  <User className="w-4 h-4 text-[#0c4c6d]" />
                  <span>{post.author}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{post.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-[#0c4c6d]/10 text-[#0c4c6d] px-3 py-1 rounded-full text-xs font-bold">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Featured Lead */}
            <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-[#0c4c6d] text-slate-700 italic text-base leading-relaxed">
              "{post.excerpt}"
            </div>

            {/* Body paragraphs */}
            <div className="space-y-6 text-slate-700 leading-relaxed text-base">
              {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <h3 className="text-xl font-bold text-slate-900 pt-4">
                Key Strategic Considerations
              </h3>

              <p>
                When submitting representations to the Home Office, precision is vital. Minor
                omissions, uncertified translations, or failure to reference the exact statutory
                guidance can lead to unnecessary delays or outright refusal.
              </p>

              <div className="p-5 rounded-2xl bg-[#0c4c6d]/5 border border-[#0c4c6d]/20 space-y-2 text-sm">
                <div className="font-bold text-[#0c4c6d]">Recommended Next Step:</div>
                <p className="text-xs sm:text-sm text-slate-600">
                  Ensure your documents are vetted by a registered IAA regulated practitioner or solicitor
                  before lodging any online submission.
                </p>
              </div>
            </div>

            {/* Tags row */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-500">Tags:</span>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c4c6d] hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Articles</span>
              </Link>
            </div>
          </div>

          {/* Author Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#0c4c6d] text-white flex items-center justify-center font-bold text-xl shrink-0">
              VD
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#c68a4c] mb-0.5">
                Written by
              </div>
              <h4 className="text-base font-bold text-slate-900">{post.author}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Senior legal practitioners at Visa Direct Immigration with extensive experience
                in UK nationality law, points-based employment visas, and family settlement.
              </p>
            </div>
          </div>

          {/* Interactive Comment Form */}
          <BlogCommentForm />
        </div>
      </article>
    </>
  );
}
