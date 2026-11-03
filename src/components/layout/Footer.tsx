import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Lock, 
  Award 
} from 'lucide-react';
import { 
  EMERGENCY_HOTLINE, 
  GENERAL_EMAIL, 
  SOCIAL_MEDIA 
} from '../../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink-950 text-slate-300 pt-14 pb-12 border-t border-slate-800">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="./assets/logo.jpeg"
                alt="AccessCare Official Logo"
                className="w-10 h-10 rounded-xl object-contain bg-white shadow-xs shrink-0"
              />
              <span className="font-serif text-2xl font-normal text-white tracking-tight">
                Access<span className="italic font-serif text-emerald-400">Care</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-200">Healthcare When and Where You Need It.</strong> Connecting patients beyond hospital walls through emergency response, mobile healthcare outreaches, virtual doctor consultations, and SureDose medication guidance.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Emergency Hotline: <strong className="text-white">{EMERGENCY_HOTLINE}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Contact: {GENERAL_EMAIL}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Location: Nigeria</span>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a href={SOCIAL_MEDIA.instagram.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-xs font-medium">
                Instagram
              </a>
              <span className="text-slate-700">•</span>
              <a href={SOCIAL_MEDIA.tiktok.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-xs font-medium">
                TikTok
              </a>
              <span className="text-slate-700">•</span>
              <a href={SOCIAL_MEDIA.twitter.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-xs font-medium">
                X (Twitter)
              </a>
            </div>
          </div>

          {/* Pillar Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Four Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/emergency" className="hover:text-white transition-colors">
                  1. Emergency & Ambulance
                </Link>
              </li>
              <li>
                <Link to="/mobile-health" className="hover:text-white transition-colors">
                  2. Mobile Healthcare (NGO)
                </Link>
              </li>
              <li>
                <Link to="/telehealth" className="hover:text-white transition-colors">
                  3. Telehealth Consultations
                </Link>
              </li>
              <li>
                <Link to="/suredose" className="hover:text-white transition-colors">
                  4. SureDose Adherence
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About AccessCare
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-white transition-colors">
                  Field Impact Tracker
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="hover:text-white transition-colors">
                  Volunteer Registry
                </Link>
              </li>
              <li>
                <Link to="/partner" className="hover:text-white transition-colors">
                  Partners & CSR Sponsors
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Health Education Guides
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Governance & Security
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-tealgreen-400 shrink-0" />
                <span>NDPR Privacy Compliant</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800">
                <Lock className="w-4 h-4 text-clinicalblue-400 shrink-0" />
                <span>256-Bit Encrypted Data</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-slate-900 border border-slate-800">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Licensed Clinicians Only</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical disclaimer */}
        <div className="py-4 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Clinical Disclaimer:</strong> Telehealth consultations and SureDose guidance provided through AccessCare supplement, but do not replace, direct in-person evaluation. For acute life-threatening emergencies (severe chest pain, uncontrolled trauma bleeding, loss of consciousness), call our 24/7 Emergency Dispatch line immediately or go to the nearest accredited hospital.
        </div>

        {/* Bottom bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AccessCare Platform & Accesscare Healthcare Foundation. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Patient Charter</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
