import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blog';

export const EditorialBlog: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
      <div className="content-container">
        
        {/* Section Heading matching Inspo Section 8 */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Health Education
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal tracking-tight">
            Health &amp; Prevention: <span className="italic font-serif text-emerald-800">Verified Guides</span>
          </h2>
          <p className="text-sm text-slate-600 font-light max-w-lg mx-auto">
            Practical, evidence-based health guidance citing verified sources from the World Health Organization (WHO) and Nigeria CDC.
          </p>
        </div>

        {/* 2-Column Article Grid (Matches Inspo Section 8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {BLOG_POSTS.slice(0, 2).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-stone-400 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-light">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mt-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-light">
                  {post.author}
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-900 group-hover:text-emerald-800 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Centered Footer Link */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-slate-900 text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>View All Health Guides</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

