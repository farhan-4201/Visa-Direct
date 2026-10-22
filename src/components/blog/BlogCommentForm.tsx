"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function BlogCommentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comment) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center py-10 space-y-3">
        <CheckCircle2 className="w-12 h-12 text-[#0c4c6d] mx-auto" />
        <h3 className="text-lg font-bold text-slate-900">Thank You for Your Feedback!</h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Your comment has been submitted for moderation and will appear once approved by our editorial panel.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", comment: "" });
          }}
          className="text-xs text-[#0c4c6d] font-bold underline pt-2 inline-block cursor-pointer"
        >
          Post another comment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-lg font-bold text-slate-900">Leave a Reply</h3>
      <p className="text-xs text-slate-500">
        Your email address will not be published. Required fields are marked *
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Comment *
          </label>
          <textarea
            rows={4}
            required
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            placeholder="Share your thoughts or questions regarding this immigration route..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4c6d]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4c6d]"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0c4c6d]"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-[#0c4c6d] hover:bg-[#083248] text-white text-xs font-bold shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Post Comment</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}
