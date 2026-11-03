import React, { useState } from 'react';
import { Phone, Ambulance, ChevronRight, X } from 'lucide-react';
import { EMERGENCY_HOTLINE } from '../../data/services';

interface EmergencyBarProps {
  onRequestAmbulance: () => void;
}

export const EmergencyBar: React.FC<EmergencyBarProps> = ({ onRequestAmbulance }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return (
      <aside 
        aria-label="Emergency response trigger"
        className="fixed bottom-6 right-6 z-40"
      >
        <button
          onClick={onRequestAmbulance}
          className="flex items-center gap-3 px-5 py-3 bg-crimson-700 hover:bg-crimson-800 text-white font-bold rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Ambulance className="w-5 h-5 text-white" />
          <span className="text-sm">24/7 Emergency Dispatch</span>
        </button>
      </aside>
    );
  }

  return (
    <aside 
      aria-label="Emergency hotline banner"
      className="bg-crimson-700 text-white px-4 py-2.5 text-xs sm:text-sm font-medium relative z-50 border-b border-crimson-800"
    >
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
          <span className="font-bold tracking-wide uppercase text-white">
            Medical Emergency?
          </span>
          <span className="hidden md:inline text-red-100">
            24/7 ambulance coordination and on-scene trauma triage across coverage zones.
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <a
            href={`tel:${EMERGENCY_HOTLINE.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-crimson-800 hover:bg-crimson-900 text-white rounded-lg font-bold transition-colors text-xs sm:text-sm border border-crimson-600"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>Call {EMERGENCY_HOTLINE}</span>
          </a>

          <button
            onClick={onRequestAmbulance}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-slate-100 text-crimson-800 font-bold rounded-lg transition-colors text-xs sm:text-sm shadow-xs"
          >
            <Ambulance className="w-4 h-4 text-crimson-700" />
            <span>Request Ambulance</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="text-red-200 hover:text-white p-1 text-xs ml-1"
            title="Minimize emergency banner"
            aria-label="Minimize emergency banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
