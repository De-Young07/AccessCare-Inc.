import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Search,
  CheckCircle2
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blog';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Prevention', 'Cardiology', 'Diabetes', 'Public Health'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-900">
      
      {/* Hero Header — Editorial Style */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/gallery-consult-CpVhlEnN.jpeg"
            alt="Health Education"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              Evidence-Based Library
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Clinically Verified Guides, <br className="hidden sm:inline" />
              <span className="italic font-serif text-emerald-300">in Plain Language</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Practical, verified preventative guidance citing WHO and Nigeria Centre for Disease Control (NCDC) sources to help you recognize symptoms early and protect your family.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-white border-b border-stone-200/80 sticky top-20 z-30 shadow-xs">
        <div className="content-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-full border border-stone-200 text-xs text-slate-900 bg-[#FAF9F6] focus:outline-none focus:border-slate-800"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="content-container">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/90 p-8 max-w-md mx-auto">
              <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-normal text-slate-900">No Articles Found</h3>
              <p className="text-xs text-slate-500 font-light mt-1">Try adjusting your category filter or search keywords.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-5 py-2 rounded-full border border-stone-300 text-xs font-semibold text-slate-800 hover:bg-stone-50"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl p-8 sm:p-9 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-stone-400 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 font-light">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="font-serif text-2xl font-normal text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-8 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-light">
                      {post.author}
                    </span>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-slate-900 group-hover:text-emerald-800 transition-colors"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
