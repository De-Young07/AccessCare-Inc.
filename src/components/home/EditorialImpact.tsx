import React from 'react';
import { Star, ShieldCheck, Users, MapPin, Activity, Award } from 'lucide-react';
import { PLATFORM_STATS } from '../../data/stats';

export const EditorialImpact: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-stone-200/80">
      <div className="content-container">
        
        {/* Editorial Pull Quote matching Inspo Section 7 */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Field Verification &amp; Impact
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-900 font-normal leading-[1.3] tracking-tight">
            “Diagnostics alone do not cure; connecting emergency response, community outreach, and continuous treatment adherence is what truly saves lives.”
          </blockquote>

          <p className="text-xs uppercase tracking-widest text-slate-500 font-medium pt-2">
            Accesscare Healthcare Foundation • Verified Track Record
          </p>
        </div>

        {/* 4 Metric Columns (Matches Inspiration Numbers Ribbon) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-stone-200/80">
          {PLATFORM_STATS.map((stat) => (
            <div key={stat.id} className="text-center p-4">
              <div className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="font-semibold text-slate-900 text-xs sm:text-sm uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-1 font-light max-w-[200px] mx-auto">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

