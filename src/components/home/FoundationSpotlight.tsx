import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export const FoundationSpotlight: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-stone-200/80">
      <div className="content-container">
        
        {/* Split Editorial Feature Card (Matches Inspo Section 5) */}
        <div className="bg-[#FAF9F6] rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Visual Half (Cols 1-6) */}
          <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[460px] overflow-hidden bg-slate-950">
            <img
              src="./assets/outreach-unilorin-chs-vwdh41Mh.jpg"
              alt="Community Medical Outreach"
              className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-8 flex flex-col justify-between text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest w-fit border border-white/20">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>Non-Profit Foundation Arm</span>
              </div>

              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal leading-tight text-white">
                  100% Free Diagnostics <br className="hidden sm:inline" />
                  <span className="italic font-serif text-emerald-300">&amp; Primary Care</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 max-w-md">
                  Delivered across markets, public schools, and rural settlements with zero out-of-pocket costs to patients.
                </p>
              </div>
            </div>
          </div>

          {/* Right Narrative Half (Cols 7-12) */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Grassroots Commitment
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal tracking-tight">
                Accesscare Healthcare <br />
                <span className="italic font-serif text-emerald-800">Foundation</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                The dedicated non-profit social impact arm of our platform. We mobilize licensed volunteer physicians, community nurses, pharmacists, and medical scientists to conduct comprehensive diagnostic caravans in places where clinical services are scarce.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                  <span>Free automated blood pressure and blood glucose screenings</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                  <span>Rapid 15-minute malaria diagnostics &amp; verified ACT medication</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                  <span>One-on-one health education, hygiene &amp; chronic disease counseling</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-3">
              <Link
                to="/partner"
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Sponsor An Outreach
              </Link>
              <Link
                to="/volunteer"
                className="px-6 py-3 rounded-full bg-white hover:bg-stone-100 text-slate-900 border border-stone-300 font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Join Volunteer Registry
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

