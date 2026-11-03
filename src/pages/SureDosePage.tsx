import React, { useState } from 'react';
import { 
  Pill, 
  CheckCircle2, 
  MessageCircle, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  AlertTriangle,
  Send,
  RefreshCw
} from 'lucide-react';
import { AdherenceDemo } from '../components/suredose/AdherenceDemo';

export const SureDosePage: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [medication, setMedication] = useState('Hypertension (Blood Pressure)');
  const [channel, setChannel] = useState('WhatsApp');
  const [doseTimes, setDoseTimes] = useState('Morning & Evening (8:00 AM & 8:00 PM)');
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
            src="/assets/gallery-school-DPPENE8D.jpeg"
            alt="SureDose Medication Support"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-bold uppercase tracking-widest">
              <Pill className="w-3.5 h-3.5 text-violet-400" />
              <span>Pillar 04 — An AccessCare Specialized Service</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              SureDose: Medication Guidance <br className="hidden sm:inline" />
              <span className="italic font-serif text-violet-300">&amp; Adherence Companion</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Prescription medications only heal if taken on time and at correct doses. SureDose helps patients understand treatment regimens, delivers zero-friction WhatsApp and SMS reminders, and keeps chronic illnesses under continuous clinical control.
            </p>

            {/* Service Highlights Strip */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="font-serif text-2xl sm:text-3xl font-normal text-violet-300">WhatsApp</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Primary Reminder Channel</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Zero apps to download</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="font-serif text-2xl sm:text-3xl font-normal text-white">SMS</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Backup Text Alerts</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Works on any cellular phone</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                <div className="font-serif text-2xl sm:text-3xl font-normal text-emerald-300">Free</div>
                <div className="text-xs text-slate-300 font-medium mt-1">No Cost to Patients</div>
                <div className="text-[11px] text-slate-400 mt-0.5">An AccessCare community service</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Clinical Adherence Solution */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                The Adherence Challenge
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                Why Consistent Adherence <span className="italic font-serif text-emerald-800">Protects Lives</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Across hypertension, Type 2 diabetes, asthma, and chronic therapies, medical research proves that over half of patients unintentionally miss doses or discontinue medication prematurely when acute symptoms subside. SureDose bridges this gap with scheduled prompts and pharmacist advisory.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200/90 flex items-start gap-3.5">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Preventing Relapses</h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5">
                      Forgotten anti-hypertensive tablets trigger acute hypertensive crises and preventable complications.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-stone-200/90 flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">SureDose: Continuous Digital Guard</h4>
                    <p className="text-xs text-slate-600 font-light mt-0.5">
                      Zero friction prompts, food interaction guidance, and dosage oversight without heavy app downloads.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-violet-100 text-violet-800 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-normal text-slate-900">WhatsApp &amp; SMS Native</h4>
                <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                  Zero apps to download. Works on basic cellular phones and modern smartphones alike.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-normal text-slate-900">One-Tap Confirmation</h4>
                <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                  Patients reply "1" or "Taken" to log adherence, building verified medication compliance.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-normal text-slate-900">Caregiver Escalation</h4>
                <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                  Alerts adult children or designated caregivers if an elderly family member misses critical doses.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-normal text-slate-900">Synchronized Refills</h4>
                <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                  Reminds patients 5 days prior to prescription run-out to prevent therapy interruption.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-20 bg-[#FAF9F6] border-b border-stone-200/80">
        <div className="content-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Interactive Simulator</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">Experience the SureDose Adherence Flow</h2>
            <p className="text-slate-600 text-sm font-light mt-2">
              Simulate an incoming WhatsApp medication alert, record dose compliance, and see how adherence tracking works in real time.
            </p>
          </div>

          <AdherenceDemo />
        </div>
      </section>

      {/* Patient Enrollment Form */}
      <section className="py-20 bg-white">
        <div className="content-container">
          
          <div className="form-container bg-[#FAF9F6] rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs max-w-xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Free Patient Registration
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 mt-1">
                Enroll in SureDose Medication Support
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light mt-1.5">
                Join our patient adherence program to receive scheduled reminders and pharmacist check-ins directly on your phone.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-normal text-slate-900">SureDose Schedule Queued</h4>
                <p className="text-xs text-slate-600 font-light max-w-sm mx-auto leading-relaxed">
                  We have registered <strong>{patientName}</strong> for <strong>{medication}</strong> alerts. Our clinical advisory desk will contact {phone} via {channel} to verify dosage timings.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full border border-stone-300 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-white"
                >
                  Enroll Another Patient
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ibrahim Sani"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp/SMS)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0704 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Primary Medication / Condition
                    </label>
                    <select
                      value={medication}
                      onChange={(e) => setMedication(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    >
                      <option value="Hypertension (Blood Pressure)">Hypertension (Blood Pressure)</option>
                      <option value="Type 2 Diabetes (Metformin/Insulin)">Type 2 Diabetes (Metformin / Insulin)</option>
                      <option value="Asthma / Respiratory Inhaler">Asthma / Respiratory Inhaler</option>
                      <option value="Post-Outreach Antibiotics/Antimalarials">Post-Outreach Antibiotics / Antimalarials</option>
                      <option value="Cardiac Maintenance Drugs">Cardiac Maintenance Drugs</option>
                      <option value="Prenatal Vitamins & Iron Supplement">Prenatal Vitamins &amp; Iron</option>
                      <option value="Other Chronic Prescription">Other Chronic Prescription</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Reminder Channel
                    </label>
                    <select
                      value={channel}
                      onChange={(e) => setChannel(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    >
                      <option value="WhatsApp">WhatsApp Message</option>
                      <option value="SMS">Standard Cellular SMS</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Scheduled Dosage Times
                  </label>
                  <select
                    value={doseTimes}
                    onChange={(e) => setDoseTimes(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                  >
                    <option value="Once Daily (Morning - 8:00 AM)">Once Daily (Morning - 8:00 AM)</option>
                    <option value="Once Daily (Night - 9:00 PM)">Once Daily (Night - 9:00 PM)</option>
                    <option value="Morning & Evening (8:00 AM & 8:00 PM)">Morning &amp; Evening (8:00 AM &amp; 8:00 PM)</option>
                    <option value="Three Times Daily (Every 8 Hours)">Three Times Daily (Every 8 Hours)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Special Instructions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Specific food directions, caregiver phone to alert..."
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
                  <span>Activate Free SureDose Companion</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center font-light pt-1">
                  SureDose operates in full compliance with NDPR data protection. We do not sell patient data or spam phone lines.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
