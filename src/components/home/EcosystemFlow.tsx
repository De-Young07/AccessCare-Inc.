import React from 'react';
import { 
  HeartPulse, 
  Ambulance, 
  HeartHandshake, 
  Video, 
  Pill, 
  Zap, 
  Users,
  RefreshCw,
  ShieldCheck
} from 'lucide-react';

export const EcosystemFlow: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
            Brand & Architecture Model
          </span>
          <h2 className="text-3xl font-extrabold text-ink-950 mt-3 tracking-tight">
            How The Connected Care Ecosystem Operates
          </h2>
          <p className="text-ink-600 mt-2 text-base leading-relaxed">
            Healthcare fails when services operate in silos. AccessCare connects acute intervention, grassroots outreach, virtual doctor access, and medication adherence into one continuous patient lifecycle.
          </p>
        </div>

        {/* Central Architecture Container */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          
          {/* Parent Node */}
          <div className="max-w-md mx-auto bg-navy-900 text-white rounded-xl p-5 text-center mb-8 border border-navy-800">
            <div className="flex items-center justify-center gap-2">
              <HeartPulse className="w-5 h-5 text-tealgreen-400" />
              <span className="text-lg font-bold">AccessCare Platform</span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Parent Healthcare Ecosystem & Clinical Governance
            </p>
          </div>

          {/* 4 Pillars Grid Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-crimson-50 text-crimson-700 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <Ambulance className="w-4 h-4 text-crimson-700" />
                </div>
                <h4 className="font-bold text-ink-950 text-sm">Emergency Response</h4>
                <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                  24/7 centralized dispatch, ambulance triage, and rapid transfer to receiving hospitals.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-crimson-700 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                <span>Immediate Acute Care</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-tealgreen-50 text-tealgreen-700 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <HeartHandshake className="w-4 h-4 text-tealgreen-700" />
                </div>
                <h4 className="font-bold text-ink-950 text-sm">Mobile Healthcare</h4>
                <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                  Foundation-powered medical caravans providing free diagnostics and sanitation education.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-tealgreen-700 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                <span>Grassroots Outreach</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-clinicalblue-50 text-clinicalblue-700 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <Video className="w-4 h-4 text-clinicalblue-700" />
                </div>
                <h4 className="font-bold text-ink-950 text-sm">Telehealth Consults</h4>
                <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                  Virtual consultations with certified physicians via video, audio, and secure chat.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-clinicalblue-700 flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Clinical Reviews & Rx</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-purpledose-50 text-purpledose-700 flex items-center justify-center font-bold text-xs">
                    04
                  </div>
                  <Pill className="w-4 h-4 text-purpledose-700" />
                </div>
                <h4 className="font-bold text-ink-950 text-sm">SureDose Service</h4>
                <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                  Automated reminders, dosage guidance, refill tracking, and clinical pharmacist advisory.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-purpledose-700 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Sustained Adherence</span>
              </div>
            </div>

          </div>

          {/* Value Prop Banner */}
          <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-ink-700 leading-relaxed text-center">
            <strong className="text-ink-950">Value Proposition:</strong> AccessCare connects patients to care beyond hospital walls—from emergency ambulance assistance and community outreach to virtual consultations and medication adherence support.
          </div>

        </div>

      </div>
    </section>
  );
};
