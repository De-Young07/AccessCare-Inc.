import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ambulance, 
  HeartHandshake, 
  Video, 
  Pill, 
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SERVICE_PILLARS } from '../../data/services';

interface ServicesCatalogProps {
  onOpenEmergency: () => void;
  onOpenTelehealth: () => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({ 
  onOpenEmergency, 
  onOpenTelehealth 
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'emergency', label: 'Emergency Response' },
    { id: 'mobile', label: 'Mobile Outreaches' },
    { id: 'telehealth', label: 'Telehealth Care' },
    { id: 'suredose', label: 'SureDose Adherence' },
  ];

  const filteredPillars = activeTab === 'all' 
    ? SERVICE_PILLARS 
    : SERVICE_PILLARS.filter(p => p.id === activeTab);

  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
      <div className="content-container">
        
        {/* Section Heading matching Inspo */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Our Brand Structure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal tracking-tight">
            Four Core Pillars, Perfected <span className="italic font-serif text-emerald-800">for Continuous Care</span>
          </h2>
          <p className="text-sm text-slate-600 font-light max-w-lg mx-auto">
            From emergency trauma transport to grassroots community clinics, virtual doctor appointments, and daily adherence tracking.
          </p>
        </div>

        {/* Filter Tabs (Matches Inspo Menu Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-150 ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-950 border border-stone-200 hover:border-slate-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Catalog List Grid (Matches Inspo 2-Column Menu Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPillars.map((pillar) => {
            const isEmergency = pillar.id === 'emergency';
            const isTelehealth = pillar.id === 'telehealth';

            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between hover:border-stone-400 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-stone-200 flex items-center justify-center text-slate-900">
                        {pillar.id === 'emergency' && <Ambulance className="w-5 h-5 text-red-600" />}
                        {pillar.id === 'mobile' && <HeartHandshake className="w-5 h-5 text-emerald-700" />}
                        {pillar.id === 'telehealth' && <Video className="w-5 h-5 text-sky-700" />}
                        {pillar.id === 'suredose' && <Pill className="w-5 h-5 text-violet-700" />}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Pillar 0{pillar.id === 'emergency' ? 1 : pillar.id === 'mobile' ? 2 : pillar.id === 'telehealth' ? 3 : 4}
                        </span>
                        <h3 className="font-serif text-xl font-normal text-slate-900 group-hover:text-emerald-900 transition-colors">
                          {pillar.name}
                        </h3>
                      </div>
                    </div>

                    <Link
                      to={pillar.route}
                      className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:border-slate-400 transition-all"
                      title="View Service Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="text-xs text-slate-500 italic font-serif mb-2">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-4">
                    {pillar.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-100 text-xs text-slate-700">
                    {pillar.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 font-medium">
                    {pillar.stats[0]?.label}: <span className="font-bold text-slate-800">{pillar.stats[0]?.value}</span>
                  </div>

                  {isEmergency ? (
                    <button
                      onClick={onOpenEmergency}
                      className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-colors"
                    >
                      {pillar.actionLabel}
                    </button>
                  ) : isTelehealth ? (
                    <button
                      onClick={onOpenTelehealth}
                      className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-colors"
                    >
                      {pillar.actionLabel}
                    </button>
                  ) : (
                    <Link
                      to={pillar.route}
                      className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-colors"
                    >
                      {pillar.actionLabel}
                    </Link>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

