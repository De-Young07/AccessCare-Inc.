import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { 
  EMERGENCY_HOTLINE, 
  GENERAL_EMAIL, 
  SOCIAL_MEDIA 
} from '../../data/services';

export const EditorialContact: React.FC = () => {
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
    <section className="py-20 bg-white border-b border-stone-200/80">
      <div className="content-container">
        
        {/* Section Heading matching Inspo Section 9 */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Connect Desk
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-normal tracking-tight">
            Get <span className="italic font-serif text-emerald-800">in</span> Touch with Us
          </h2>
          <p className="text-sm text-slate-600 font-light max-w-md mx-auto">
            Whether inquiring about community outreaches, emergency protocols, or partnerships, our coordination team is standing by.
          </p>
        </div>

        {/* Split Grid (Matches Inspo Section 9 Form & Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left: Message Us Form (Cols 1-7) */}
          <div className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-xs">
            <h3 className="font-serif text-xl font-normal text-slate-900 mb-6">
              Message Us
            </h3>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg font-normal text-slate-900">
                  Message Delivered
                </h4>
                <p className="text-xs text-slate-600 font-light max-w-xs mx-auto">
                  Thank you, {name}. Our coordination desk will reply to {email} within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-full border border-stone-300 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:bg-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tunde Balogun"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
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
                      className="w-full h-11 px-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Community Outreach Request">Community Outreach Request</option>
                      <option value="Partnership & Sponsorship">Partnership &amp; Sponsorship</option>
                      <option value="SureDose Adherence Support">SureDose Adherence Support</option>
                      <option value="Volunteer Coordination">Volunteer Coordination</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can our clinical and operational desk assist you today?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 rounded-xl border border-stone-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-slate-800 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center font-light pt-1">
                  NDPR Compliant • Your clinical confidentiality is respected and protected.
                </p>
              </form>
            )}
          </div>

          {/* Right: Contact Information (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4 space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-normal text-slate-900">
                Contact Info
              </h3>

              <div className="space-y-5 text-sm text-slate-600 font-light">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Operational Headquarters
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Nigeria • Covering urban and rural communities nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Direct Telephone Line
                    </div>
                    <a href={`tel:${EMERGENCY_HOTLINE}`} className="text-xs text-slate-900 font-medium hover:underline mt-0.5 block">
                      {EMERGENCY_HOTLINE} (24/7 Response)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Official Foundation Email
                    </div>
                    <a href={`mailto:${GENERAL_EMAIL}`} className="text-xs text-slate-900 font-medium hover:underline mt-0.5 block">
                      {GENERAL_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links (Matches Inspo) */}
            <div className="pt-6 border-t border-stone-200/80">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-3">
                Social Channels
              </div>
              <div className="flex items-center gap-4 text-xs">
                <a
                  href={SOCIAL_MEDIA.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-stone-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={SOCIAL_MEDIA.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-stone-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 transition-colors"
                >
                  TikTok
                </a>
                <a
                  href={SOCIAL_MEDIA.twitter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-stone-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 transition-colors"
                >
                  X (Twitter)
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

