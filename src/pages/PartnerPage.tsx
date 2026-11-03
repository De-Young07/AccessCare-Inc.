import React, { useState } from 'react';
import { 
  Building, 
  HeartHandshake, 
  ShieldCheck, 
  Package, 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone
} from 'lucide-react';
import { GENERAL_EMAIL, EMERGENCY_HOTLINE } from '../data/services';

export const PartnerPage: React.FC = () => {
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [partnerType, setPartnerType] = useState('Sponsor an Outreach Mission');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-slate-900">
      
      {/* Hero Header — Editorial Style */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="./assets/outreach-tanke-union-Bot_mbBb.jpg"
            alt="Corporate Partnership"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              Strategic Collaboration &amp; CSR
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Build Healthier Communities, <br className="hidden sm:inline" />
              <span className="italic font-serif text-emerald-300">Together.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              We partner with corporate institutions, philanthropic foundations, student associations, healthcare facilities, and civic organizations to deliver tangible clinical impact across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities Grid */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Collaboration Models
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              Ways to Partner <span className="italic font-serif text-emerald-800">with AccessCare</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900">Sponsor an Outreach</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-relaxed">
                  Underwrite diagnostic supplies, essential medications, and logistics for a targeted community, market, or campus mission.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-200 text-[11px] font-semibold text-slate-500">
                Co-Branded CSR Reporting
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center mb-5">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900">Medical Supplies &amp; Pharma</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-relaxed">
                  Donate verified pharmaceuticals (ACTs, anti-hypertensives, vitamins) or screening kits (glucometers, lancets, BP cuffs).
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-200 text-[11px] font-semibold text-slate-500">
                Direct Frontline Distribution
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-violet-100 text-violet-800 flex items-center justify-center mb-5">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-slate-900">Hospital &amp; Emergency Hubs</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-relaxed">
                  Integrate your accredited facility into our pre-hospital ambulance dispatch and trauma triage reception network.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-stone-200 text-[11px] font-semibold text-slate-500">
                Coordinated Emergency Handover
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Partner Inquiry Form */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="content-container">
          
          <div className="form-container bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xs max-w-xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Partner Desk
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 mt-1">
                Initiate a Partnership
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light mt-1.5">
                Our Partnerships &amp; Programs Lead will review your proposal and respond promptly.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-normal text-slate-900">Partnership Proposal Logged</h4>
                <p className="text-xs text-slate-600 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{contactPerson}</strong> from <strong>{orgName}</strong>. Our Programs &amp; Partnerships team will review your message and contact {email} within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full border border-stone-300 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-stone-50"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Organization / Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Union Bank / Rotaract / Health Institution"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Contact Person
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="corporate@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0704 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Partnership Category
                    </label>
                    <select
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    >
                      <option value="Sponsor an Outreach Mission">Sponsor an Outreach Mission</option>
                      <option value="Corporate CSR Initiative">Corporate CSR Initiative</option>
                      <option value="Medical Supply / Pharmaceutical">Medical Supply &amp; Pharma Donation</option>
                      <option value="Hospital Ambulance Network Integration">Hospital / Ambulance Integration</option>
                      <option value="Campus & Student Union Collaboration">Campus / Student Union Collaboration</option>
                      <option value="Philanthropic Grant">Philanthropic Grant</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Proposal Summary or Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your organization's interest, target community, or collaboration scope..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Partnership Proposal</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center font-light pt-1">
                  Direct Inquiries: <a href={`mailto:${GENERAL_EMAIL}`} className="underline font-medium text-slate-700">{GENERAL_EMAIL}</a>
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
