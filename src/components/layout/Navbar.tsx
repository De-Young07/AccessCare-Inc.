import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HeartPulse, 
  Menu, 
  X, 
  ChevronDown, 
  Ambulance, 
  HeartHandshake, 
  Video, 
  Pill, 
  Calendar,
  Phone
} from 'lucide-react';
import { EMERGENCY_HOTLINE } from '../../data/services';

interface NavbarProps {
  onOpenEmergency: () => void;
  onOpenTelehealth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEmergency, onOpenTelehealth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Clinical Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo.jpeg"
              alt="AccessCare Official Logo"
              className="w-11 h-11 rounded-xl object-contain bg-white border border-stone-200 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-normal tracking-tight text-slate-900 leading-none">
                Access<span className="italic font-serif text-emerald-800">Care</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500 mt-1">
                Connected Healthcare Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-ink-700">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isActive('/') ? 'text-navy-900 bg-slate-100 font-bold' : 'hover:text-ink-950 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-colors ${
                  location.pathname.startsWith('/emergency') || 
                  location.pathname.startsWith('/mobile-health') || 
                  location.pathname.startsWith('/telehealth') || 
                  location.pathname.startsWith('/suredose')
                    ? 'text-navy-900 bg-slate-100 font-bold'
                    : 'hover:text-ink-950 hover:bg-slate-50'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-lg border border-slate-200 p-2 grid gap-1 mt-1">
                  <Link
                    to="/emergency"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-crimson-50 text-crimson-700 shrink-0">
                      <Ambulance className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-ink-950 text-sm">Emergency & Ambulance</div>
                      <div className="text-xs text-ink-500">24/7 dispatch & acute trauma response</div>
                    </div>
                  </Link>

                  <Link
                    to="/mobile-health"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-tealgreen-50 text-tealgreen-700 shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-ink-950 text-sm">Mobile Healthcare</div>
                      <div className="text-xs text-ink-500">Community screening caravans (NGO)</div>
                    </div>
                  </Link>

                  <Link
                    to="/telehealth"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-clinicalblue-50 text-clinicalblue-700 shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-ink-950 text-sm">Telehealth Consultations</div>
                      <div className="text-xs text-ink-500">Certified doctors via video, audio & chat</div>
                    </div>
                  </Link>

                  <Link
                    to="/suredose"
                    onClick={() => setServicesDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-purpledose-50 text-purpledose-700 shrink-0">
                      <Pill className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-ink-950 text-sm">SureDose Adherence</div>
                      <div className="text-xs text-ink-500">Prescription reminders & pharmacist sync</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isActive('/about') ? 'text-navy-900 bg-slate-100 font-bold' : 'hover:text-ink-950 hover:bg-slate-50'
              }`}
            >
              About & Team
            </Link>

            <Link
              to="/impact"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isActive('/impact') ? 'text-navy-900 bg-slate-100 font-bold' : 'hover:text-ink-950 hover:bg-slate-50'
              }`}
            >
              Impact
            </Link>

            <Link
              to="/volunteer"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isActive('/volunteer') ? 'text-navy-900 bg-slate-100 font-bold' : 'hover:text-ink-950 hover:bg-slate-50'
              }`}
            >
              Volunteer
            </Link>

            <Link
              to="/partner"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isActive('/partner') ? 'text-navy-900 bg-slate-100 font-bold' : 'hover:text-ink-950 hover:bg-slate-50'
              }`}
            >
              Partners
            </Link>

            <Link
              to="/blog"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isActive('/blog') ? 'text-navy-900 bg-slate-100 font-bold' : 'hover:text-ink-950 hover:bg-slate-50'
              }`}
            >
              Health Guides
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isActive('/contact') ? 'text-navy-900 bg-slate-100 font-bold' : 'hover:text-ink-950 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Action CTAs - 44px min-height */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-crimson-50 hover:bg-crimson-100 text-crimson-700 font-bold border border-crimson-200 transition-colors text-sm"
            >
              <Ambulance className="w-4 h-4 text-crimson-600" />
              <span>Dispatch</span>
            </button>

            <button
              onClick={onOpenTelehealth}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold transition-colors text-sm shadow-xs"
            >
              <Calendar className="w-4 h-4 text-clinicalblue-400" />
              <span>Book Doctor</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenEmergency}
              className="p-2.5 rounded-lg bg-crimson-50 text-crimson-700 font-bold"
              aria-label="Request Emergency Dispatch"
            >
              <Ambulance className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-ink-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-100">
            <img
              src="/assets/logo.jpeg"
              alt="AccessCare Logo"
              className="w-9 h-9 rounded-xl object-contain bg-white border border-stone-200 shadow-xs"
            />
            <span className="font-serif text-xl font-normal text-slate-900">
              Access<span className="italic font-serif text-emerald-800">Care</span>
            </span>
          </div>
          <div className="grid gap-1 font-medium text-ink-800 pb-4 border-b border-slate-100 text-base">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-ink-400">
              Services
            </div>

            <Link
              to="/emergency"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-crimson-50 flex items-center gap-3 text-crimson-700 font-bold"
            >
              <Ambulance className="w-5 h-5" />
              <span>1. Emergency & Ambulance</span>
            </Link>

            <Link
              to="/mobile-health"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-tealgreen-50 flex items-center gap-3 text-tealgreen-700 font-bold"
            >
              <HeartHandshake className="w-5 h-5" />
              <span>2. Mobile Healthcare & Outreaches</span>
            </Link>

            <Link
              to="/telehealth"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-clinicalblue-50 flex items-center gap-3 text-clinicalblue-700 font-bold"
            >
              <Video className="w-5 h-5" />
              <span>3. Telehealth Consultations</span>
            </Link>

            <Link
              to="/suredose"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-purpledose-50 flex items-center gap-3 text-purpledose-700 font-bold"
            >
              <Pill className="w-5 h-5" />
              <span>4. SureDose Adherence</span>
            </Link>

            <div className="pt-3 pb-1 px-3 text-xs font-bold uppercase tracking-wider text-ink-400">
              Organization
            </div>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              About AccessCare & Leadership
            </Link>

            <Link
              to="/impact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Field Impact & Outreaches
            </Link>

            <Link
              to="/volunteer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Volunteer Clinician Network
            </Link>

            <Link
              to="/partner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Partnerships & Donors
            </Link>

            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Health Guides & Tips
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Contact Coordination Desk
            </Link>
          </div>

          <div className="pt-4 grid gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmergency();
              }}
              className="w-full py-3 px-4 rounded-lg bg-crimson-700 hover:bg-crimson-800 text-white font-bold flex items-center justify-center gap-2"
            >
              <Ambulance className="w-5 h-5" />
              <span>Request Ambulance Dispatch</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTelehealth();
              }}
              className="w-full py-3 px-4 rounded-lg bg-navy-900 text-white font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-clinicalblue-400" />
              <span>Book Doctor Appointment</span>
            </button>

            <a
              href={`tel:${EMERGENCY_HOTLINE.replace(/\s+/g, '')}`}
              className="w-full py-2.5 px-4 rounded-lg bg-slate-100 text-ink-900 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-tealgreen-700" />
              <span>Hotline: {EMERGENCY_HOTLINE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
