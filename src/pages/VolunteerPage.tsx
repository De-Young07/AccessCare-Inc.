import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  GraduationCap, 
  Heart, 
  CheckCircle2, 
  Send,
  Stethoscope,
  ShieldCheck
} from 'lucide-react';
import { EMERGENCY_HOTLINE, GENERAL_EMAIL } from '../data/services';

export const VolunteerPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('Medical Doctor');
  const [stateLoc, setStateLoc] = useState('Kwara');
  const [availability, setAvailability] = useState('Weekends (Saturday/Sunday)');
  const [skills, setSkills] = useState('');
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
            src="/assets/outreach-team-DcjWv2h-.jpg"
            alt="Volunteer Team"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              Volunteer Registry • 200+ Strong
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Join the Mission. <br className="hidden sm:inline" />
              <span className="italic font-serif text-emerald-300">Protect a Life.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Whether you are a licensed physician, a registered nurse, a pharmacy practitioner, a laboratory scientist, a student, or a logistical volunteer — there is a direct frontline role for you at AccessCare.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits / Roles Grid */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Why Volunteer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight mt-1">
              Meaningful Impact, <span className="italic font-serif text-emerald-800">Verified Outcomes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-normal text-slate-900">Frontline Clinical Care</h4>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                Direct community diagnostic, triage, and preventative treatment experience with licensed senior clinicians.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-normal text-slate-900">Official Recognition</h4>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                Verified certificates of clinical service and formal letters of recommendation for career development.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-violet-100 text-violet-800 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-normal text-slate-900">Multidisciplinary Network</h4>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                Connect and collaborate with healthcare leaders, public-health researchers, and civic partners across Nigeria.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-normal text-slate-900">Grassroots Service</h4>
              <p className="text-xs text-slate-600 font-light mt-2 leading-relaxed">
                Bring vital health screening and essential drugs directly to elderly and vulnerable individuals who need them most.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="content-container">
          
          <div className="form-container bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xs max-w-xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                Join 200+ Volunteers
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 mt-1">
                Volunteer Enrollment Form
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-light mt-1.5">
                Tell us about your background, location, and clinical or logistical availability.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-normal text-slate-900">Application Received</h4>
                <p className="text-xs text-slate-600 font-light max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Our Volunteer Coordination Desk will review your application and contact you at {phone} for the next scheduled outreach orientation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full border border-stone-300 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-stone-50"
                >
                  Submit Another Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Kelechi Okafor"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp)
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Profession / Role
                    </label>
                    <select
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    >
                      <option value="Medical Doctor">Medical Doctor (MBBS)</option>
                      <option value="Registered Nurse">Registered Nurse (RN/RM)</option>
                      <option value="Pharmacist">Pharmacist (B.Pharm)</option>
                      <option value="Lab Scientist">Medical Lab Scientist</option>
                      <option value="Medical Student">Medical / Nursing Student</option>
                      <option value="Logistics Volunteer">Logistics &amp; Field Coordination</option>
                      <option value="Media/Photography">Media &amp; Documentation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      State of Residence
                    </label>
                    <select
                      value={stateLoc}
                      onChange={(e) => setStateLoc(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
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
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Availability
                  </label>
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                  >
                    <option value="Weekends (Saturday/Sunday)">Weekends (Saturday / Sunday)</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Campus Holiday Missions">Campus Holiday / Periodic Missions</option>
                    <option value="On-Call Emergency Support">On-Call Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Relevant Skills / Clinical Background (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Years of practice, specialty, previous community missions..."
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Volunteer Registration</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center font-light pt-1">
                  Accesscare Healthcare Foundation respects volunteer data and does not share records without consent.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
