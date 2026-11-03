import React from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  HeartHandshake, 
  Ambulance,
  Video,
  Pill,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';
import { EMERGENCY_HOTLINE, GENERAL_EMAIL } from '../data/services';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-900">
      
      {/* Hero Header — Editorial Style with Background Photo */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/outreach-team-DcjWv2h-.jpg"
            alt="AccessCare Team"
            className="w-full h-full object-cover object-center filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-bold uppercase tracking-widest">
              About AccessCare
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Bridging the Gap to Care <span className="italic font-serif text-emerald-300">Beyond Hospital Walls</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Healthcare When and Where You Need It — an integrated platform connecting emergency responders, grassroots mobile health, licensed telehealth clinicians, and continuous treatment adherence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-[#FAF9F6] rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Core Purpose
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900">
                Our Mission
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                To make quality healthcare more accessible through emergency response, mobile healthcare, telehealth, and medication management, ensuring patients receive timely care and continuous support.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#FAF9F6] rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-900 text-white flex items-center justify-center">
                <Eye className="w-5 h-5 text-emerald-300" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Long-Term Horizon
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900">
                Our Vision
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                To build a connected healthcare ecosystem that bridges the gap between patients, healthcare professionals, emergency responders, and healthcare facilities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Brand Structure & Value Proposition */}
      <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Brand Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              Our Connected Healthcare <span className="italic font-serif text-emerald-800">Structure</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              How our parent platform coordinates four specialized clinical capabilities under one integrated health system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Parent Umbrella</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">AccessCare</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  The parent healthcare platform coordinating emergency triage, clinical governance, and service integration.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">Pillar 01</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Emergency Response</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Emergency assistance, pre-hospital trauma triage, and rapid ambulance transport coordination.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Pillar 02</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Mobile Healthcare</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Community outreaches and free medical screenings powered by Accesscare Healthcare Foundation.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600">Pillar 03</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Telehealth Care</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Remote medical consultations, follow-up care, and verified electronic prescriptions.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">Pillar 04</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">SureDose Service</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Medication guidance, scheduled WhatsApp/SMS reminders, and chronic adherence support.
                </p>
              </div>
            </div>

          </div>

          {/* Value Prop Banner */}
          <div className="mt-8 p-8 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Our Value Proposition</span>
              <p className="font-serif text-lg sm:text-xl text-slate-100 font-normal mt-1 leading-snug">
                AccessCare connects patients to care beyond hospital walls — from emergency assistance and community outreach to virtual consultations and medication adherence support.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership & Clinical Team */}
      <section className="py-20 bg-white">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Governance &amp; Medical Board
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              People Powering <span className="italic font-serif text-emerald-800">the Mission</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Doctors, nurses, public-health professionals and community organisers united by one belief: healthcare should reach everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => {
              const initials = member.name
                .split(' ')
                .filter(w => w.length > 2)
                .map(w => w[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();

              return (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] rounded-2xl p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-xl font-normal mb-5 shadow-xs">
                      {initials}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {member.department}
                    </span>
                    <h4 className="font-serif text-lg font-normal text-slate-900 mt-0.5">
                      {member.name}
                    </h4>
                    <div className="text-xs font-semibold text-emerald-800 mt-1">
                      {member.role}
                    </div>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-stone-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-slate-700 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Verified Board</span>
                    </span>
                    <span className="text-stone-400">Nigeria</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
