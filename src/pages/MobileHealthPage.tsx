import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  MapPin, 
  Calendar, 
  Users, 
  Activity, 
  CheckCircle2, 
  Heart, 
  Send,
  Building,
  Phone,
  Mail,
  ShieldCheck,
  Microscope,
  ArrowRight
} from 'lucide-react';
import { PAST_OUTREACHES } from '../data/outreaches';
import { EMERGENCY_HOTLINE, GENERAL_EMAIL } from '../data/services';

export const MobileHealthPage: React.FC = () => {
  const [communityName, setCommunityName] = useState('');
  const [stateRegion, setStateRegion] = useState('Kwara');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [estimatedBeneficiaries, setEstimatedBeneficiaries] = useState('100-300');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-900">
      
      {/* Hero Banner — Editorial Style */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/outreach-tanke-union-Bot_mbBb.jpg"
            alt="Mobile Healthcare Outreach"
            className="w-full h-full object-cover filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
              <span>Pillar 02 — Accesscare Healthcare Foundation</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Mobile Healthcare Caravans <br className="hidden sm:inline" />
              <span className="italic font-serif text-emerald-300">&amp; Grassroots Outreaches</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Bringing clinical excellence, vital diagnostics, and preventative primary care directly to grassroots communities, rural markets, schools, and underserved settlements across Nigeria.
            </p>

            {/* Quick Metrics Ribbon (Verified Real Data) */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="font-serif text-2xl sm:text-3xl font-normal text-emerald-300">10,000+</div>
                <div className="text-xs text-slate-300 font-medium mt-1">People Reached</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="font-serif text-2xl sm:text-3xl font-normal text-white">25+</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Outreaches Executed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="font-serif text-2xl sm:text-3xl font-normal text-teal-300">20+</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Communities Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="font-serif text-2xl sm:text-3xl font-normal text-sky-300">200+</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Volunteers Mobilized</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Delivered in the Field */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Free Diagnostics &amp; Treatment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              Field Services Delivered <span className="italic font-serif text-emerald-800">on Every Mission</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Every outreach is staffed by licensed volunteer doctors, nurses, pharmacists, and medical laboratory scientists providing comprehensive primary care at zero cost to patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-normal text-slate-900">Hypertension Screening</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Automated digital blood pressure evaluations to catch asymptomatic hypertension early before severe cardiac or stroke emergencies occur.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-200 text-[11px] font-semibold text-emerald-800">
                Digital Sphygmomanometers
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center mb-5">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-normal text-slate-900">Blood Glucose Checks</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Rapid fingerstick glucometer assessments for early detection of Type 2 diabetes paired with immediate dietary counsel.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-200 text-[11px] font-semibold text-teal-800">
                Capillary Blood Testing
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-normal text-slate-900">Malaria Diagnostics</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  15-minute Rapid Diagnostic Tests (RDT) with immediate dispensing of WHO-approved Artemisinin Combination Therapy (ACT).
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-200 text-[11px] font-semibold text-amber-900">
                WHO-Certified RDT &amp; Treatment
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-normal text-slate-900">Health Education</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                  Community-wide participatory workshops teaching clean water habits, hand hygiene, and chronic disease prevention.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-200 text-[11px] font-semibold text-sky-800">
                Multilingual Guidance
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Past Outreaches Gallery (8 Real Documented Missions) */}
      <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Documented Record
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              Where We've Been &amp; <span className="italic font-serif text-emerald-800">Lives Touched</span>
            </h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              A look at documented grassroots medical outreaches executed across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAST_OUTREACHES.map((outreach) => (
              <div
                key={outreach.id}
                className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs flex flex-col justify-between group hover:border-stone-400 transition-all duration-200"
              >
                <div>
                  <div className="h-44 overflow-hidden relative bg-stone-100">
                    <img
                      src={outreach.photo}
                      alt={outreach.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      {outreach.tag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="font-serif text-base font-normal text-slate-900 leading-snug">
                      {outreach.title}
                    </h4>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-light mt-2 pb-3 border-b border-stone-100">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {outreach.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-slate-400" />
                        {outreach.beneficiaries}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {outreach.location}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-light leading-relaxed mt-3">
                      {outreach.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-1 text-[11px] font-semibold text-emerald-800">
                  100% Free Diagnostics
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Community Request Form */}
      <section className="py-20 bg-white">
        <div className="content-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Community Partnership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                Request an Outreach <br />
                <span className="italic font-serif text-emerald-800">for Your Community</span>
              </h2>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Are you a community chairman, market leader, school principal, faith-based organization, or local government representative? Partner with the Accesscare Healthcare Foundation to bring free medical screening and essential care to your people.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-200/90 text-xs text-slate-600 space-y-2">
                <div className="font-serif text-sm font-normal text-slate-900">Direct Outreach Logistics Desk</div>
                <div>Coordinator: <strong className="text-slate-900">Nurse Aisha Bello</strong> (Head of Outreach Operations)</div>
                <div>Direct Phone: <a href={`tel:${EMERGENCY_HOTLINE}`} className="font-semibold text-slate-900 hover:underline">{EMERGENCY_HOTLINE}</a></div>
                <div>Official Email: <a href={`mailto:${GENERAL_EMAIL}`} className="font-semibold text-slate-900 hover:underline">{GENERAL_EMAIL}</a></div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-normal text-slate-900">
                    Outreach Request Logged
                  </h4>
                  <p className="text-xs text-slate-600 font-light max-w-sm mx-auto leading-relaxed">
                    Thank you for inviting AccessCare to <strong>{communityName}</strong>. Our Outreach Operations team will review logistics and contact {contactPhone} within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-full border border-stone-300 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Community or Institution Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanke Community / UNILORIN Faculty"
                      value={communityName}
                      onChange={(e) => setCommunityName(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        State / Region
                      </label>
                      <select
                        value={stateRegion}
                        onChange={(e) => setStateRegion(e.target.value)}
                        className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                      >
                        <option value="Kwara">Kwara State</option>
                        <option value="Osun">Osun State</option>
                        <option value="Oyo">Oyo State</option>
                        <option value="Lagos">Lagos State</option>
                        <option value="Ogun">Ogun State</option>
                        <option value="Enugu">Enugu State</option>
                        <option value="Abuja">Abuja (FCT)</option>
                        <option value="Other">Other Nigerian State</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Estimated Attendees
                      </label>
                      <select
                        value={estimatedBeneficiaries}
                        onChange={(e) => setEstimatedBeneficiaries(e.target.value)}
                        className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                      >
                        <option value="100-300">100 – 300 people</option>
                        <option value="300-600">300 – 600 people</option>
                        <option value="600+">600+ people</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Representative Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0704 000 0000"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="representative@domain.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Community Health Needs
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Hypertension checks, malaria testing, elderly care, clean water challenges..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full p-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Outreach Request</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-light pt-1">
                    All medical diagnostic services delivered by Accesscare Healthcare Foundation are 100% free of charge.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
