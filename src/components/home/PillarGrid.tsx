import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Ambulance, 
  HeartHandshake, 
  Video, 
  Pill, 
  ArrowRight, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { SERVICE_PILLARS } from '../../data/services';

interface PillarGridProps {
  onOpenEmergency: () => void;
  onOpenTelehealth: () => void;
}

export const PillarGrid: React.FC<PillarGridProps> = ({ onOpenEmergency, onOpenTelehealth }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Ambulance': return <Ambulance className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Video': return <Video className="w-6 h-6" />;
      case 'Pill': return <Pill className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-800 bg-white border border-slate-200 px-3 py-1 rounded-md">
            Operational Capabilities
          </span>
          <h2 className="text-3xl font-extrabold text-ink-950 mt-3 tracking-tight">
            Comprehensive Clinical Coverage Across Four Pillars
          </h2>
          <p className="text-ink-600 mt-2 text-base leading-relaxed">
            Every service is engineered with strict clinical protocols, verified response times, and compassionate patient support.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICE_PILLARS.map((pillar) => {
            const isEmergency = pillar.id === 'emergency';
            const isTelehealth = pillar.id === 'telehealth';

            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon & Pillar Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-ink-900">
                      {getIcon(pillar.iconName)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-ink-700 border border-slate-200">
                      Pillar {pillar.id === 'emergency' ? '01' : pillar.id === 'mobile' ? '02' : pillar.id === 'telehealth' ? '03' : '04'}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-ink-950">
                    {pillar.name}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-500 mt-1">
                    {pillar.tagline}
                  </p>

                  <p className="text-ink-600 text-sm mt-3 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    {pillar.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-ink-700">
                        <Check className="w-4 h-4 text-tealgreen-700 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Structured Separated Rows (NEXUS style) */}
                  <div className="mt-5 bg-slate-50 rounded-xl p-3 border border-slate-200/80">
                    {pillar.stats.map((s, idx) => (
                      <div key={idx} className="data-row text-xs">
                        <span className="text-ink-500 font-medium">{s.label}</span>
                        <span className="font-bold text-ink-950 font-mono text-sm">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions - 44px min-height */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  {isEmergency ? (
                    <button
                      onClick={onOpenEmergency}
                      className="flex-1 py-3 px-4 rounded-xl font-bold text-sm text-white bg-crimson-700 hover:bg-crimson-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Ambulance className="w-4 h-4" />
                      <span>{pillar.actionLabel}</span>
                    </button>
                  ) : isTelehealth ? (
                    <button
                      onClick={onOpenTelehealth}
                      className="flex-1 py-3 px-4 rounded-xl font-bold text-sm text-white bg-navy-900 hover:bg-navy-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Video className="w-4 h-4 text-clinicalblue-400" />
                      <span>{pillar.actionLabel}</span>
                    </button>
                  ) : (
                    <Link
                      to={pillar.route}
                      className="flex-1 py-3 px-4 rounded-xl font-bold text-sm text-white bg-navy-900 hover:bg-navy-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>{pillar.actionLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}

                  <Link
                    to={pillar.route}
                    className="p-3 rounded-xl border border-slate-200 text-ink-700 hover:bg-slate-100 transition-colors text-xs font-semibold flex items-center gap-1 shrink-0"
                    title={`Details about ${pillar.name}`}
                  >
                    <span>Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
