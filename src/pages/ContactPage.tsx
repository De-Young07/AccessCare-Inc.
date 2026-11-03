import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  HelpCircle,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { 
  EMERGENCY_HOTLINE, 
  GENERAL_EMAIL, 
  SOCIAL_MEDIA 
} from '../data/services';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
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
            src="./assets/outreach-team-DcjWv2h-.jpg"
            alt="AccessCare Coordination Desk"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 content-container">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest">
              Operations &amp; Coordination Desk
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Let's Talk Healthcare <br className="hidden sm:inline" />
              <span className="italic font-serif text-emerald-300">Access &amp; Coverage</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Whether you need emergency ambulance guidance, wish to request an outreach for your community, want to partner with the foundation, or have questions for our medical team — our desk is standing by.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-20 bg-white border-b border-stone-200/80">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Emergency Hotline */}
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-700 flex items-center justify-center mb-5">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                  24/7 Emergency Line
                </span>
                <h3 className="font-serif text-2xl font-normal text-slate-900 mt-1">
                  {EMERGENCY_HOTLINE}
                </h3>
                <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                  Dedicated telephone hotline for urgent medical assistance and pre-hospital ambulance dispatch across Nigeria.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-slate-700 font-medium">
                24/7 Operations Desk Active
              </div>
            </div>

            {/* Email Communications */}
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center mb-5">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-widest">
                  Official Email
                </span>
                <h3 className="font-serif text-xl font-normal text-slate-900 mt-1 break-all">
                  {GENERAL_EMAIL}
                </h3>
                <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                  For administrative inquiries, outreach requests, sponsorships, volunteer coordination, and platform support.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-slate-700 font-medium">
                Average reply window: &lt; 24 hours
              </div>
            </div>

            {/* Operational Location */}
            <div className="bg-[#FAF9F6] p-8 rounded-3xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">
                  Geographic Coverage
                </span>
                <h3 className="font-serif text-2xl font-normal text-slate-900 mt-1">
                  Nigeria
                </h3>
                <p className="text-xs text-slate-600 font-light mt-3 leading-relaxed">
                  Directing mobile medical caravans and volunteer doctor teams across Kwara, Osun, Oyo, and communities nationwide.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-slate-700 font-medium">
                Active in 20+ Communities
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inquiry Form & FAQ */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            
            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xs">
              <div className="border-b border-stone-200/80 pb-6 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Send a Message
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 mt-1">
                  Inquiry Desk
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  Fill out the form below and our coordination team will review and reply.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-normal text-slate-900">
                    Message Delivered
                  </h4>
                  <p className="text-xs text-slate-600 font-light max-w-xs mx-auto leading-relaxed">
                    Thank you, {name}. Your inquiry regarding "{subject}" has been received. Our coordination desk will reply to {email} within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-full border border-stone-300 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-stone-50"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                      />
                    </div>

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
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Topic / Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-[#FAF9F6] text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Emergency Ambulance Protocol">Emergency Ambulance Protocol</option>
                      <option value="Community Outreach Partnership">Community Outreach Partnership</option>
                      <option value="SureDose Adherence Integration">SureDose Adherence Integration</option>
                      <option value="Volunteer Clinical Board">Volunteer Clinical Board</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can our clinical and operational team assist you today?"
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
                    <span>Send Inquiry Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick FAQ & Socials */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Quick Clarity
                </span>
                <h3 className="font-serif text-2xl font-normal text-slate-900 mt-1">
                  Common Inquiries
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h4 className="font-serif text-base font-normal text-slate-900">How does ambulance dispatch work?</h4>
                  <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                    When you call our 24/7 hotline (07045905262) or submit an emergency request, our triage desk coordinates with verified partner ambulance units and directs immediate transport to the nearest receiving healthcare facility.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h4 className="font-serif text-base font-normal text-slate-900">Are outreach screenings 100% free?</h4>
                  <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                    Yes. All diagnostic screenings conducted by Accesscare Healthcare Foundation (BP, blood glucose, malaria testing, and essential health education) are strictly non-profit and 100% free of charge to all attendees.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                  <h4 className="font-serif text-base font-normal text-slate-900">How does SureDose work?</h4>
                  <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed">
                    SureDose operates natively over WhatsApp and cellular SMS text messages, so patients do not need high-end smartphones or constant internet to receive dose prompts and maintain treatment compliance.
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
                  Follow Our Outreaches
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <a
                    href={SOCIAL_MEDIA.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-stone-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 transition-colors"
                  >
                    Instagram ({SOCIAL_MEDIA.instagram.handle})
                  </a>
                  <a
                    href={SOCIAL_MEDIA.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-stone-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 transition-colors"
                  >
                    TikTok ({SOCIAL_MEDIA.tiktok.handle})
                  </a>
                  <a
                    href={SOCIAL_MEDIA.twitter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-stone-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 transition-colors"
                  >
                    X ({SOCIAL_MEDIA.twitter.handle})
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
