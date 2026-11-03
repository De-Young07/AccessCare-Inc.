import React from 'react';
import { 
  Ambulance, 
  Calendar, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { EMERGENCY_HOTLINE } from '../../data/services';

interface HeroProps {
  onOpenEmergency: () => void;
  onOpenTelehealth: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEmergency, onOpenTelehealth }) => {
  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-between text-white overflow-hidden bg-slate-950">
      {/* Background Image with Cinematic Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="./assets/outreach-team-DcjWv2h-.jpg"
          alt="AccessCare Medical Outreach Team"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 content-container pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs tracking-widest uppercase font-semibold text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Healthcare Beyond Hospital Walls</span>
          </div>

          {/* Editorial Headline with Signature Italic Accents */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.08] text-white">
            Healthcare <span className="italic font-normal font-serif text-emerald-300">When &amp; Where</span> You Need It.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-200/90 leading-relaxed font-light max-w-2xl">
            A unified healthcare ecosystem connecting emergency ambulance response, grassroots mobile clinics, licensed telehealth doctors, and continuous SureDose medication guidance.
          </p>

          {/* Action Button Cluster */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-lg">
            <button
              onClick={onOpenEmergency}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <Ambulance className="w-4 h-4 text-red-600" />
              <span>Request Ambulance Dispatch</span>
            </button>

            <button
              onClick={onOpenTelehealth}
              className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2.5 hover:border-white/50 active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>Book Doctor Consultation</span>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Metadata Ribbon (Matches Inspiration) */}
      <div className="relative z-10 border-t border-white/15 bg-slate-950/70 backdrop-blur-md py-4">
        <div className="content-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-slate-300">
            
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-slate-400">Emergency Dispatch Hotline:</span>
              <a href={`tel:${EMERGENCY_HOTLINE}`} className="font-bold text-white hover:text-emerald-300 underline underline-offset-2">
                {EMERGENCY_HOTLINE}
              </a>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-medium">24/7 Response Active</span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Operating across Nigeria</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Free Outreach Screenings</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
