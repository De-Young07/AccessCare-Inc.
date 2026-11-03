import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { TEAM_MEMBERS } from '../../data/team';

export const TeamEditorial: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
      <div className="content-container">
        
        {/* Section Heading matching Inspo Section 6 */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Clinical Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal tracking-tight">
            The People Behind <span className="italic font-serif text-emerald-800">the Mission</span>
          </h2>
          <p className="text-sm text-slate-600 font-light max-w-lg mx-auto">
            Doctors, nurses, public-health professionals and community organisers united by one belief: healthcare should reach everyone.
          </p>
        </div>

        {/* 4 Cards Grid (Matches Inspo Section 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => {
            const initials = member.name
              .split(' ')
              .filter(w => w.length > 2)
              .map(w => w[0])
              .join('')
              .slice(0, 2)
              .toUpperCase();

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-stone-400 transition-all duration-200 group"
              >
                <div>
                  {/* Initials Badge Circle */}
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-xl font-normal mb-5 shadow-sm group-hover:bg-emerald-900 transition-colors">
                    {initials}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {member.department}
                  </span>

                  <h3 className="font-serif text-lg font-normal text-slate-900 mt-0.5">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-emerald-800 mt-1">
                    {member.role}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-light mt-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Verified Board</span>
                  </span>
                  <span className="text-stone-400">Nigeria</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

