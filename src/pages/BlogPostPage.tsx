import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center bg-[#FAF9F6]">
        <h2 className="font-serif text-2xl font-normal text-slate-900">Health Guide Not Found</h2>
        <p className="text-slate-500 text-sm mt-2 font-light">The requested article could not be located in our registry.</p>
        <Link to="/blog" className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider">
          Return to Health Guides
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16 text-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Library</span>
        </button>

        {/* Article Container */}
        <article className="bg-white rounded-3xl p-8 sm:p-14 border border-stone-200/90 shadow-xs">
          
          {/* Header Metadata */}
          <div className="space-y-4 border-b border-stone-200/80 pb-8 mb-8">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 font-light">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-slate-900 tracking-tight leading-[1.18]">
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-light pt-1">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-light">
            {post.content.map((paragraph, idx) => {
              const isSource = paragraph.startsWith('Sources:');
              if (isSource) {
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200/90 text-xs text-slate-600 mt-8 font-normal space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Clinical Verification &amp; Citations</div>
                    <p className="italic">{paragraph}</p>
                  </div>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 flex items-start gap-3.5 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="font-light leading-relaxed">
              <strong>Medical Disclaimer:</strong> This health guide is provided for educational purposes based on verified WHO and Nigeria CDC guidelines. For personalized medical evaluation or acute symptoms, consult a licensed healthcare professional or book an AccessCare telehealth appointment.
            </p>
          </div>

        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h3 className="font-serif text-2xl font-normal text-slate-900 mb-6">
              More Verified Guides
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.slug}`}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-xs hover:border-stone-400 transition-colors block group"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-lg font-normal text-slate-900 group-hover:text-emerald-900 transition-colors mt-1.5 leading-snug">
                    {rel.title}
                  </h4>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-900 group-hover:text-emerald-800">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
