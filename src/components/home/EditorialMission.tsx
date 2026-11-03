import React from 'react';
import { 
  Ambulance, 
  HeartHandshake, 
  Video, 
  Pill, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

export const EditorialMission: React.FC = () => {
  const capabilities = [
    {
      icon: Ambulance,
      title: 'Emergency Dispatch',
      desc: '24/7 Ambulance & Trauma'
    },
    {
      icon: HeartHandshake,
      title: 'Mobile Clinics',
      desc: 'Grassroots Community Care'
    },
    {
      icon: Video,
      title: 'Telehealth Care',
      desc: 'Licensed Medical Doctors'
    },
    {
      icon: Pill,
      title: 'SureDose Service',
      desc: 'Medication Adherence'
    },
    {
      icon: ShieldCheck,
      title: 'Free Screenings',
      desc: 'BP, Glucose & Malaria'
    },
    {
      icon: Users,
      title: '200+ Volunteers',
      desc: 'Frontline Clinical Team'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
      <div className="content-container">
        
        {/* Centered Editorial Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Our Mission &amp; Purpose
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-slate-900 font-normal leading-[1.35] tracking-tight">
            “To make quality healthcare accessible through emergency response, mobile clinics, telehealth, and medication management — <span className="italic text-emerald-800">ensuring patients receive timely care and continuous support.</span>”
          </blockquote>

          <p className="text-xs uppercase tracking-widest text-slate-500 pt-2 font-medium">
            Accesscare Healthcare Foundation • Nigeria
          </p>
        </div>

        {/* Minimalist Feature Badges Row (Matches Inspo Section 2) */}
        <div className="mt-16 pt-12 border-t border-stone-200/70 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-slate-800 mb-3 shadow-xs transition-transform duration-200 group-hover:scale-105 group-hover:border-slate-400">
                  <Icon className="w-5 h-5 text-slate-800" />
                </div>
                <h4 className="font-semibold text-slate-900 text-xs tracking-wide">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

