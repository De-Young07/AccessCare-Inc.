import React from 'react';
import { 
  Ambulance, 
  Phone, 
  ShieldAlert, 
  HeartPulse, 
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { EMERGENCY_HOTLINE } from '../data/services';

interface EmergencyPageProps {
  onOpenEmergency: () => void;
}

export const EmergencyPage: React.FC<EmergencyPageProps> = ({ onOpenEmergency }) => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-900">
      
      {/* Hero Banner — Editorial Style */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/outreach-team-DcjWv2h-.jpg"
            alt="Emergency Response Network"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest">
              Pillar 01 — Emergency Medical Services
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Rapid Emergency Response <br className="hidden sm:inline" />
              <span className="italic font-serif text-red-400">&amp; Ambulance Coordination</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              When acute illness or trauma strikes, AccessCare coordinates rapid on-scene triage, ambulance dispatch, and streamlined transfer to accredited regional healthcare facilities across Nigeria.
            </p>

            {/* Emergency Action Cluster */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3.5 max-w-lg">
              <button
                onClick={onOpenEmergency}
                className="px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-[0.98]"
              >
                <Ambulance className="w-4 h-4 text-white" />
                <span>Request Ambulance Dispatch</span>
              </button>

              <a
                href={`tel:${EMERGENCY_HOTLINE.replace(/\s+/g, '')}`}
                className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call {EMERGENCY_HOTLINE}</span>
              </a>
            </div>

            {/* Response Info Strip */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/15 text-left">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-red-400">24/7</div>
                <div className="text-xs text-slate-400 font-light mt-0.5">Emergency Dispatch</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-white">Nationwide</div>
                <div className="text-xs text-slate-400 font-light mt-0.5">Operational Scope</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-emerald-400">Coordinated</div>
                <div className="text-xs text-slate-400 font-light mt-0.5">Hospital Transfer</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Fleet Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              On-Scene Trauma &amp; <span className="italic font-serif text-emerald-800">Life Support</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Partner ambulances meet rigorous pre-hospital medical equipment standards for immediate stabilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-700 flex items-center justify-center mb-5">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900">
                  Cardiac &amp; Resuscitation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-relaxed">
                  Multiparameter telemetry monitoring, emergency airway kits, intravenous resuscitation infusions, and cardiac stabilization protocols.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-200 text-[11px] font-semibold text-slate-500">
                Continuous Vital Telemetry
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900">
                  Trauma &amp; Hemorrhage Control
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-relaxed">
                  Spinal backboards, cervical immobilization collars, combat application tourniquets, burn dressings, and suction units for acute trauma.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-200 text-[11px] font-semibold text-slate-500">
                Pre-Hospital Hemostatic Care
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900">
                  Maternal &amp; Pediatric Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-relaxed">
                  Obstetric emergency delivery packs, neonatal suction apparatus, infant warming packs, and direct coordination with receiving maternity centers.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-200 text-[11px] font-semibold text-slate-500">
                Dedicated Neonatal Protocols
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pre-Arrival First Aid Guide (Professional Clean Cards) */}
      <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Emergency Protocols
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              What to Do While <span className="italic font-serif text-emerald-800">Waiting for Dispatch</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Crucial first-aid steps to stabilize the patient during the initial critical minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">Step 01</span>
              <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Check Breathing</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                If the patient is unconscious and not breathing normally, begin continuous hands-only chest compressions in the center of the chest.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">Step 02</span>
              <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Control Bleeding</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                Apply direct, continuous firm pressure over the wound using clean cloth or bandage. Do not remove soaked cloths — layer on top.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">Step 03</span>
              <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Suspected Stroke</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                Look for Face droop, Arm weakness, Speech difficulty. Keep patient calm; do NOT give food or liquids.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">Step 04</span>
              <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Clear Street Access</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                Send a bystander to the main road or junction to flag down the ambulance. Clear vehicle pathways and open compound gates.
              </p>
            </div>

          </div>

          {/* Bottom Callout */}
          <div className="mt-12 p-8 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-white">Need immediate ambulance routing?</h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 font-light">
                Our central operations desk provides live medical guidance over the phone until arrival.
              </p>
            </div>
            <button
              onClick={onOpenEmergency}
              className="px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-widest shrink-0 transition-colors shadow-md cursor-pointer"
            >
              Request Ambulance Now
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
