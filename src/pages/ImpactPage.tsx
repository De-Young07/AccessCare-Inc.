import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Users, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Heart,
  Calendar
} from 'lucide-react';
import { PLATFORM_STATS } from '../data/stats';
import { PAST_OUTREACHES } from '../data/outreaches';

export const ImpactPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-900">
      
      {/* Hero Header — Editorial Style */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/outreach-shao-BWy0HMKg.jpg"
            alt="Field Impact"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              Accountability &amp; Track Record
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Measuring What Matters: <br className="hidden sm:inline" />
              <span className="italic font-serif text-emerald-300">Documented Frontline Impact</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Real progress in healthcare is counted one patient, one early diagnosis, and one community at a time. Here is our verified frontline track record across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Stats Counter Grid */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PLATFORM_STATS.map((s) => (
              <div key={s.id} className="bg-[#FAF9F6] rounded-3xl p-8 border border-stone-200/90 shadow-xs text-center">
                <div className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight">
                  {s.value}
                </div>
                <div className="font-semibold text-slate-900 text-xs sm:text-sm uppercase tracking-wider mt-2">
                  {s.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-light max-w-[200px] mx-auto">
                  {s.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Population Segments Served */}
      <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Target Beneficiaries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              Who We Serve <span className="italic font-serif text-emerald-800">Across Nigeria</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              AccessCare directs mobile medical caravans and resources where healthcare scarcity and out-of-pocket costs are most acute.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">Cohort 01</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Peri-Urban Settlements</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Informal grassroots communities where catastrophic out-of-pocket medical bills often force families to delay vital care.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-medium text-slate-500">
                Kwara, Osun &amp; broader Nigeria
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-sky-800 uppercase tracking-widest">Cohort 02</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Rural Agrarian Villages</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Farming settlements located miles from functional clinics, where basic transportation hurdles previously turned treatable malaria into tragedies.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-medium text-slate-500">
                Frontline mobile medical visits
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-violet-800 uppercase tracking-widest">Cohort 03</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Mothers &amp; Children</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Expectant mothers needing antenatal blood pressure surveillance and children requiring early diagnostic screenings.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-medium text-slate-500">
                Prenatal &amp; pediatric triage
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-red-800 uppercase tracking-widest">Cohort 04</span>
                <h4 className="font-serif text-lg font-normal text-slate-900 mt-1">Campus Communities</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Students and faculty members receiving on-campus health education, vital sign checks, and basic consultations.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-medium text-slate-500">
                University campus health drives
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Allocation Breakdown */}
      <section className="py-20 bg-white">
        <div className="content-container">
          
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                Fiduciary Accountability
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal mt-1 text-white">
                Where Every Contribution <span className="italic font-serif text-emerald-300">Is Deployed</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light mt-2">
                Outreach contributions and sponsor support flow directly into diagnostic consumables, verified medications, vehicle logistics, and volunteer clinical safety.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="font-serif text-base font-normal text-white">Diagnostic Kits</div>
                <div className="text-xs text-slate-400 font-light mt-1">
                  Digital BP cuffs, capillary blood glucose test strips, malaria RDT cassettes, and sterile lancets.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="w-10 h-10 rounded-full bg-sky-950 text-sky-400 flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="font-serif text-base font-normal text-white">Essential Medications</div>
                <div className="text-xs text-slate-400 font-light mt-1">
                  WHO-approved ACT antimalarials, anti-hypertensive tablets, and essential primary care drugs.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="w-10 h-10 rounded-full bg-amber-950 text-amber-400 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="font-serif text-base font-normal text-white">Outreach Logistics</div>
                <div className="text-xs text-slate-400 font-light mt-1">
                  Mobile medical vehicle transit, cold-chain medication transport, permits, and community event staging.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="w-10 h-10 rounded-full bg-violet-950 text-violet-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="font-serif text-base font-normal text-white">Volunteer Clinical Safety</div>
                <div className="text-xs text-slate-400 font-light mt-1">
                  Personal protective equipment, medical gloves, disinfection supplies, and first-aid packs.
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-light">
                Audited impact summaries and community records are provided to all verified partners and sponsors.
              </div>
              <Link
                to="/partner"
                className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Partner with AccessCare</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
