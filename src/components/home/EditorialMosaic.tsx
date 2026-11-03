import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import { PAST_OUTREACHES } from '../../data/outreaches';

export const EditorialMosaic: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-stone-200/80">
      <div className="content-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Field Documentation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal tracking-tight mt-1">
              Care Delivered, <span className="italic font-serif text-emerald-800">Lives Touched.</span>
            </h2>
          </div>
          <Link
            to="/mobile-health"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-emerald-700 transition-colors group"
          >
            <span>Explore Mobile Outreaches</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Photo Grid (Matches Inspiration Section 3) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px]">
          
          {/* Main Large Feature (Cols 1-7, Row 1-2) */}
          <div className="md:col-span-7 md:row-span-2 relative rounded-2xl overflow-hidden bg-stone-100 group">
            <img
              src="./assets/outreach-tanke-union-Bot_mbBb.jpg"
              alt="Tanke Medical Outreach with Union Bank"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Strategic Partnership • Tanke × Union Bank
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mt-1">
                Comprehensive Diagnostic Screening &amp; Drug Distribution
              </h3>
              <p className="text-xs text-slate-200 mt-1 line-clamp-2 max-w-lg">
                Delivering hypertension checks, capillary glucose assessments, and free medications to over 500 community members.
              </p>
            </div>
          </div>

          {/* Top Right 1 (Cols 8-12, Row 1) */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-stone-100 group">
            <img
              src="./assets/gallery-consult-CpVhlEnN.jpeg"
              alt="Community Doctor Consultation"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-300">
                Clinical Diagnostics
              </span>
              <h4 className="font-serif text-base font-normal text-white">
                One-on-One Physician Consultations
              </h4>
            </div>
          </div>

          {/* Top Right 2 (Cols 8-12, Row 2) */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden bg-stone-100 group">
            <img
              src="./assets/gallery-school-DPPENE8D.jpeg"
              alt="Campus & Student Health Drive"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Youth &amp; Campus Health
              </span>
              <h4 className="font-serif text-base font-normal text-white">
                UNILORIN College of Health Sciences Outreach
              </h4>
            </div>
          </div>

          {/* Bottom Row - 3 Balanced Cards (Cols 1-4, 5-8, 9-12) */}
          <div className="md:col-span-4 relative rounded-2xl overflow-hidden bg-stone-100 group">
            <img
              src="./assets/outreach-osogbo-CrFzoCES.jpg"
              alt="Osogbo Medical Outreach"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                Osun State • 350+ Screened
              </span>
              <h4 className="font-serif text-base font-normal text-white">
                Osogbo Community Mission
              </h4>
            </div>
          </div>

          <div className="md:col-span-4 relative rounded-2xl overflow-hidden bg-stone-100 group">
            <img
              src="./assets/outreach-shao-BWy0HMKg.jpg"
              alt="Shao Medical Outreach"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300">
                Elderly Care • 450+ Served
              </span>
              <h4 className="font-serif text-base font-normal text-white">
                Shao Community Outreach
              </h4>
            </div>
          </div>

          <div className="md:col-span-4 relative rounded-2xl overflow-hidden bg-stone-100 group">
            <img
              src="./assets/outreach-gambari-D2kJndY_.jpg"
              alt="Gambari Medical Outreach"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-sky-300">
                Grassroots Health Drive
              </span>
              <h4 className="font-serif text-base font-normal text-white">
                Gambari Outreach Caravan
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

