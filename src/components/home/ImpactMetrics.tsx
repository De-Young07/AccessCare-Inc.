import React from 'react';
import { 
  Activity, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Award,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Sparkles
} from 'lucide-react';
import { PLATFORM_STATS, CORE_PRINCIPLES } from '../../data/stats';

export const ImpactMetrics: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Activity': return <Activity className="w-5 h-5 text-tealgreen-700" />;
      case 'Users': return <Users className="w-5 h-5 text-navy-800" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-ink-700" />;
      case 'Clock': return <Clock className="w-5 h-5 text-crimson-700" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-purpledose-700" />;
      case 'Award': return <Award className="w-5 h-5 text-clinicalblue-700" />;
      default: return <ShieldCheck className="w-5 h-5 text-ink-700" />;
    }
  };

  const getPrincipleIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-navy-800" />;
      case 'Zap': return <Zap className="w-5 h-5 text-crimson-700" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-tealgreen-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purpledose-700" />;
      default: return <ShieldCheck className="w-5 h-5 text-ink-700" />;
    }
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-tealgreen-800 bg-white border border-slate-200 px-3 py-1 rounded-md">
            Documented Results
          </span>
          <h2 className="text-3xl font-extrabold text-ink-950 mt-3 tracking-tight">
            Verified Frontline Achievements
          </h2>
          <p className="text-ink-600 mt-2 text-base leading-relaxed">
            Every statistic represents a patient diagnosed early, an emergency safely coordinated, and a family protected.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {PLATFORM_STATS.map((stat) => (
            <div 
              key={stat.id}
              className="bg-white rounded-xl p-4 border border-slate-200 text-center flex flex-col justify-between"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-2">
                {getIcon(stat.icon)}
              </div>
              <div>
                <div className="text-2xl font-black text-ink-950 tracking-tight font-mono">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-ink-800 mt-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] text-ink-500 mt-1 line-clamp-2 pt-2 border-t border-slate-100">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Guiding Principles */}
        <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-navy-800">
              Guiding Philosophy
            </span>
            <h3 className="text-2xl font-bold text-ink-950 mt-1">
              Core Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_PRINCIPLES.map((principle, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3">
                  {getPrincipleIcon(principle.icon)}
                </div>
                <h4 className="font-bold text-ink-950 text-sm">
                  {principle.title}
                </h4>
                <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
