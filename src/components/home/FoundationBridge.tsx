import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export const FoundationBridge: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        <div className="bg-slate-900 text-white rounded-2xl p-7 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-tealgreen-400 bg-tealgreen-950/80 border border-tealgreen-500/40 px-3 py-1 rounded-md">
                Grassroots Foundation Arm
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Powered by Accesscare Healthcare Foundation
              </h2>

              <blockquote className="border-l-2 border-tealgreen-400 pl-4 text-slate-200 italic text-sm leading-relaxed">
                "We exist because no one should die from a preventable illness simply because of where they live or what they earn."
                <footer className="text-xs text-tealgreen-400 not-italic mt-1 font-semibold">— The Accesscare Founding Team</footer>
              </blockquote>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                The foundation was established to solve the stark gap in basic health checks across Nigerian communities. Today, it serves as the dedicated social impact arm of our platform—deploying volunteer doctors, nurses, and medical supplies to conduct free outreaches in schools, rural markets, and peri-urban settlements.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/volunteer"
                  className="px-5 py-2.5 rounded-lg bg-tealgreen-600 hover:bg-tealgreen-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Volunteer Team</span>
                </Link>

                <Link
                  to="/partner"
                  className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors flex items-center gap-1.5"
                >
                  <span>Sponsor An Outreach</span>
                  <ArrowRight className="w-4 h-4 text-tealgreen-400" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/90 rounded-xl p-5 border border-slate-700/80 space-y-3">
              <h4 className="font-bold text-sm text-white flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-tealgreen-400" />
                <span>Foundation Commitments</span>
              </h4>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2.5 p-2 rounded bg-slate-900/50">
                  <CheckCircle2 className="w-4 h-4 text-tealgreen-400 shrink-0 mt-0.5" />
                  <span>100% free screenings for all community attendees.</span>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded bg-slate-900/50">
                  <CheckCircle2 className="w-4 h-4 text-tealgreen-400 shrink-0 mt-0.5" />
                  <span>Essential ACT antimalarial medications dispensed on-site.</span>
                </div>
                <div className="flex items-start gap-2.5 p-2 rounded bg-slate-900/50">
                  <CheckCircle2 className="w-4 h-4 text-tealgreen-400 shrink-0 mt-0.5" />
                  <span>Transparent allocation reports provided to all donor partners.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
