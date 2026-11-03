import React from 'react';
import { 
  Video, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Calendar, 
  Stethoscope, 
  Users, 
  FileText,
  Lock,
  HeartPulse,
  ArrowRight
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';
import { EMERGENCY_HOTLINE } from '../data/services';

interface TelehealthPageProps {
  onOpenTelehealth: () => void;
}

export const TelehealthPage: React.FC<TelehealthPageProps> = ({ onOpenTelehealth }) => {
  const clinicalTeam = TEAM_MEMBERS;

  const specialties = [
    { title: 'General Medicine', desc: 'Primary diagnosis, common infectious fevers, lab test interpretation, and general wellness guidance.', icon: Stethoscope },
    { title: 'Cardiology Advisory', desc: 'Blood pressure control, heart health evaluation, and post-stroke preventive care.', icon: HeartPulse },
    { title: 'Pediatrics & Child Care', desc: 'Childhood infections, nutrition counseling, immunization advice, and growth assessments.', icon: Users },
    { title: 'Women\'s Health', desc: 'Prenatal guidance, menstrual health consultations, and family planning advisory.', icon: ShieldCheck },
    { title: 'Chronic Disease Support', desc: 'Long-term management of Type 2 diabetes, asthma, arthritis, and lifestyle guidance.', icon: HeartPulse },
    { title: 'Prescription Guidance', desc: 'Verified electronic prescriptions transmitted to licensed dispensing pharmacies.', icon: FileText },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-900">
      
      {/* Hero Header — Editorial Style */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/gallery-consult-CpVhlEnN.jpeg"
            alt="Virtual Doctor Consultation"
            className="w-full h-full object-cover filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-bold uppercase tracking-widest">
              <Video className="w-3.5 h-3.5 text-sky-400" />
              <span>Pillar 03 — Virtual Clinical Consultations</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Certified Doctors, <br className="hidden sm:inline" />
              <span className="italic font-serif text-sky-300">Wherever You Are</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              No hospital queues. No travel burden. Connect with licensed medical doctors across Nigeria for clinical consultations, specialist triage, and authenticated electronic prescriptions.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row gap-3.5 max-w-lg">
              <button
                onClick={onOpenTelehealth}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-sky-700" />
                <span>Book Doctor Appointment</span>
              </button>

              <a
                href={`tel:${EMERGENCY_HOTLINE}`}
                className="px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call {EMERGENCY_HOTLINE}</span>
              </a>
            </div>

            {/* Service Highlights Strip */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-white/15">
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-sky-300">Video</div>
                <div className="text-xs text-slate-400 font-light mt-0.5">Encrypted HD Sessions</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-white">Audio</div>
                <div className="text-xs text-slate-400 font-light mt-0.5">Low-Bandwidth Calling</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-normal text-emerald-400">Messaging</div>
                <div className="text-xs text-slate-400 font-light mt-0.5">Asynchronous Follow-Up</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Patient Journey */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Care Pathway
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              How AccessCare Telehealth <span className="italic font-serif text-emerald-800">Works</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Designed for ease of access, low mobile data consumption, and rapid clinical resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Stage 01</span>
              <h3 className="font-serif text-lg font-normal text-slate-900 mt-1">Select Specialty</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                Choose the clinical discipline matching your symptoms: general health, cardiology, pediatrics, or medication review.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Stage 02</span>
              <h3 className="font-serif text-lg font-normal text-slate-900 mt-1">Choose Mode</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                Connect via encrypted video, private cellular voice call, or WhatsApp chat depending on your network bandwidth.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Stage 03</span>
              <h3 className="font-serif text-lg font-normal text-slate-900 mt-1">Doctor Consultation</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                Review your health history, discuss symptoms with a licensed doctor, and receive personalized medical counsel.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Stage 04</span>
              <h3 className="font-serif text-lg font-normal text-slate-900 mt-1">Care Plan &amp; Rx</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                Receive an authenticated digital prescription and optional automated reminders via SureDose.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Clinical Specialties */}
      <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
        <div className="content-container">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Clinical Coverage</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">Medical Disciplines Available Online</h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Our multidisciplinary clinical practitioner network is available for scheduled and urgent consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={i} className="bg-white p-7 rounded-3xl border border-stone-200/90 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-slate-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-slate-900">{spec.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">{spec.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Personnel */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Verified Practitioners</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">Led by Certified Physicians &amp; Nurses</h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Doctors, nurses, and specialists powering our clinical protocols and teleconsultations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalTeam.map((member, idx) => {
              const initials = member.name.split(' ').filter(w => w.length > 2).map(w => w[0]).join('').slice(0, 2).toUpperCase();
              return (
                <div key={idx} className="bg-[#FAF9F6] rounded-2xl p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif text-xl font-normal mb-5 shadow-xs">
                      {initials}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {member.department}
                    </span>
                    <h4 className="font-serif text-lg font-normal text-slate-900 mt-0.5">{member.name}</h4>
                    <p className="text-xs font-semibold text-emerald-800 mt-1">{member.role}</p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed font-light">{member.bio}</p>
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

          {/* Privacy Notice */}
          <div className="mt-12 p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/90 flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-600">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">Patient Confidentiality &amp; Data Protection</div>
              <p className="font-light mt-0.5">
                All teleconsultation records, audio calls, and clinical notes are encrypted in strict adherence with Nigeria Data Protection Act (NDPR) guidelines.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={onOpenTelehealth}
              className="px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer shadow-xs"
            >
              Book Virtual Consultation Now
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
