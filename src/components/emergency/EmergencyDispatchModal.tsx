import React, { useState } from 'react';
import { 
  Ambulance, 
  CheckCircle2, 
  Navigation, 
  ShieldAlert,
  Clock,
  Phone
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { EMERGENCY_HOTLINE } from '../../data/services';

interface EmergencyDispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyDispatchModal: React.FC<EmergencyDispatchModalProps> = ({
  isOpen,
  onClose
}) => {
  const [phone, setPhone] = useState('');
  const [locationAddress, setLocationAddress] = useState('');
  const [cityState, setCityState] = useState('Lagos');
  const [emergencyType, setEmergencyType] = useState('cardiac');
  const [severity, setSeverity] = useState<'critical' | 'urgent' | 'standard'>('critical');
  const [patientName, setPatientName] = useState('');
  const [notes, setNotes] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [dispatchCode, setDispatchCode] = useState('');

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLocating(false);
        const { latitude, longitude } = position.coords;
        setLocationAddress(`GPS: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`);
      },
      () => {
        setIsLocating(false);
        setLocationAddress("Location permission denied. Please enter landmark manually.");
      },
      { timeout: 8000 }
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !locationAddress) {
      alert("Please enter a phone number and location.");
      return;
    }
    const code = `AC-DISP-${Math.floor(100000 + Math.random() * 900000)}`;
    setDispatchCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setPatientName('');
    setPhone('');
    setLocationAddress('');
    setNotes('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Rapid Emergency Medical Dispatch"
      subtitle="Connecting you to ambulance coordination and trauma transfer."
      maxWidth="md"
    >
      {submitted ? (
        <div className="py-2 space-y-4">
          <div className="p-4 bg-tealgreen-50 border border-tealgreen-200 rounded-xl text-center space-y-1">
            <CheckCircle2 className="w-8 h-8 text-tealgreen-700 mx-auto" />
            <h4 className="font-bold text-ink-950 text-base">Dispatch Transmitted</h4>
            <p className="text-xs text-ink-600">
              Central dispatch has received your ticket. An officer is routing the nearest BLS/ALS unit.
            </p>
          </div>

          {/* Ticket Data Rows (NEXUS style) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1 text-xs">
            <div className="data-row">
              <span className="text-ink-500 font-medium">Reference Code:</span>
              <span className="font-mono font-bold text-crimson-700 text-sm">{dispatchCode}</span>
            </div>
            <div className="data-row">
              <span className="text-ink-500 font-medium">Contact Phone:</span>
              <span className="font-bold text-ink-950">{phone}</span>
            </div>
            <div className="data-row">
              <span className="text-ink-500 font-medium">Destination Landmark:</span>
              <span className="font-medium text-ink-950 truncate max-w-[200px]">{locationAddress}</span>
            </div>
            <div className="data-row">
              <span className="text-ink-500 font-medium">Triage Level:</span>
              <span className="font-bold text-crimson-700 capitalize">{severity} Priority</span>
            </div>
            <div className="data-row">
              <span className="text-ink-500 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-tealgreen-700" />
                Target Arrival:
              </span>
              <span className="font-bold text-tealgreen-800">10 – 18 Minutes</span>
            </div>
          </div>

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
            <strong>Important:</strong> Keep your phone line free. A dispatch doctor or paramedic will call immediately to verify location and give first-aid guidance.
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <a
              href={`tel:${EMERGENCY_HOTLINE.replace(/\s+/g, '')}`}
              className="flex-1 py-3 px-4 rounded-lg bg-crimson-700 hover:bg-crimson-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch Desk Now</span>
            </a>
            <button
              onClick={handleReset}
              className="py-3 px-4 rounded-lg border border-slate-300 text-ink-800 font-semibold text-xs hover:bg-slate-50"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          
          <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg text-xs text-crimson-900 flex items-center justify-between">
            <span>Direct life threat? Prefer phone call:</span>
            <a href={`tel:${EMERGENCY_HOTLINE.replace(/\s+/g, '')}`} className="font-bold text-crimson-700 underline">
              {EMERGENCY_HOTLINE}
            </a>
          </div>

          {/* Urgency Level */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
              Urgency Level
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSeverity('critical')}
                className={`py-2 px-2 rounded-lg text-xs font-bold border transition-colors ${
                  severity === 'critical'
                    ? 'bg-crimson-700 text-white border-crimson-700'
                    : 'bg-white border-slate-300 text-ink-700 hover:bg-slate-50'
                }`}
              >
                Critical (P1)
              </button>
              <button
                type="button"
                onClick={() => setSeverity('urgent')}
                className={`py-2 px-2 rounded-lg text-xs font-bold border transition-colors ${
                  severity === 'urgent'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-white border-slate-300 text-ink-700 hover:bg-slate-50'
                }`}
              >
                Urgent (P2)
              </button>
              <button
                type="button"
                onClick={() => setSeverity('standard')}
                className={`py-2 px-2 rounded-lg text-xs font-bold border transition-colors ${
                  severity === 'standard'
                    ? 'bg-navy-900 text-white border-navy-900'
                    : 'bg-white border-slate-300 text-ink-700 hover:bg-slate-50'
                }`}
              >
                Transfer / Routine
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1">
                Category
              </label>
              <select
                value={emergencyType}
                onChange={(e) => setEmergencyType(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-ink-900 focus:outline-none"
              >
                <option value="cardiac">Chest Pain / Cardiac</option>
                <option value="trauma">Trauma / Road Accident / Bleeding</option>
                <option value="respiratory">Severe Breathing Distress</option>
                <option value="maternal">Maternal / Obstetric Crisis</option>
                <option value="pediatric">Pediatric Convulsion</option>
                <option value="stroke">Sudden Stroke / Weakness</option>
                <option value="general">Other Emergency</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1">
                Caller Phone <span className="text-crimson-700">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0803 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-ink-900 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1">
                Patient Name (Optional)
              </label>
              <input
                type="text"
                placeholder="Full Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-ink-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1">
                State / Territory
              </label>
              <select
                value={cityState}
                onChange={(e) => setCityState(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-ink-900 focus:outline-none"
              >
                <option value="Kwara">Kwara State</option>
                <option value="Osun">Osun State</option>
                <option value="Oyo">Oyo State</option>
                <option value="Lagos">Lagos State</option>
                <option value="Abuja">Abuja (FCT)</option>
                <option value="Enugu">Enugu State</option>
                <option value="Other">Other Region</option>
              </select>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-ink-700">
                Exact Location & Landmark <span className="text-crimson-700">*</span>
              </label>
              <button
                type="button"
                onClick={handleGetLocation}
                disabled={isLocating}
                className="text-xs text-clinicalblue-700 hover:underline flex items-center gap-1 font-semibold"
              >
                <Navigation className="w-3 h-3" />
                <span>{isLocating ? 'Detecting GPS...' : 'Auto-detect GPS'}</span>
              </button>
            </div>
            <textarea
              required
              rows={2}
              placeholder="Street name, house number, prominent junction..."
              value={locationAddress}
              onChange={(e) => setLocationAddress(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-ink-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-700 mb-1">
              Brief Symptoms (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Unconscious, bleeding from head..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-ink-900 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-crimson-700 hover:bg-crimson-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Ambulance className="w-4 h-4" />
            <span>Transmit Urgent Ambulance Dispatch</span>
          </button>
        </form>
      )}
    </Modal>
  );
};
