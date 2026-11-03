import React, { useState } from 'react';
import { 
  Video, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { Modal } from '../common/Modal';

interface TelehealthBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelehealthBookingModal: React.FC<TelehealthBookingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('General Medicine');
  const [consultType, setConsultType] = useState<'video' | 'phone' | 'chat'>('video');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [symptoms, setSymptoms] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phone || !email) {
      alert("Please provide your name, phone number, and email.");
      return;
    }
    const ref = `TEL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setPatientName('');
    setEmail('');
    setPhone('');
    setSymptoms('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Book a Telehealth Consultation"
      subtitle="Connect with verified physicians via encrypted video, audio, or chat."
      maxWidth="md"
    >
      {submitted ? (
        <div className="py-2 space-y-4">
          <div className="p-4 bg-clinicalblue-50 border border-clinicalblue-200 rounded-xl text-center space-y-1">
            <CheckCircle2 className="w-8 h-8 text-clinicalblue-700 mx-auto" />
            <h4 className="font-bold text-ink-950 text-base">Appointment Confirmed</h4>
            <p className="text-xs text-ink-600">
              You will receive an SMS with your secure consultation link 15 minutes prior to the session.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1 text-xs">
            <div className="data-row">
              <span className="text-ink-500 font-medium">Booking Code:</span>
              <span className="font-mono font-bold text-navy-900 text-sm">{bookingRef}</span>
            </div>
            <div className="data-row">
              <span className="text-ink-500 font-medium">Patient:</span>
              <span className="font-bold text-ink-950">{patientName}</span>
            </div>
            <div className="data-row">
              <span className="text-ink-500 font-medium">Specialty:</span>
              <span className="font-semibold text-ink-950">{specialty}</span>
            </div>
            <div className="data-row">
              <span className="text-ink-500 font-medium">Format:</span>
              <span className="font-semibold text-ink-950 capitalize">{consultType} Consultation</span>
            </div>
            <div className="data-row">
              <span className="text-ink-500 font-medium">Scheduled Time:</span>
              <span className="font-bold text-ink-950">{date || 'Today'}, {timeSlot}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-100 rounded-lg text-xs text-ink-700 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-tealgreen-700 shrink-0" />
            <span>Strict NDPR clinical privacy standards enforced. Encrypted records.</span>
          </div>

          <button
            onClick={handleReset}
            className="w-full py-3 px-4 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition-colors"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          
          {/* Mode */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
              Consultation Mode
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setConsultType('video')}
                className={`py-2 px-2 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                  consultType === 'video'
                    ? 'bg-clinicalblue-700 text-white border-clinicalblue-700'
                    : 'bg-white border-slate-300 text-ink-700 hover:bg-slate-50'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Video Call</span>
              </button>

              <button
                type="button"
                onClick={() => setConsultType('phone')}
                className={`py-2 px-2 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                  consultType === 'phone'
                    ? 'bg-tealgreen-700 text-white border-tealgreen-700'
                    : 'bg-white border-slate-300 text-ink-700 hover:bg-slate-50'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Voice Call</span>
              </button>

              <button
                type="button"
                onClick={() => setConsultType('chat')}
                className={`py-2 px-2 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                  consultType === 'chat'
                    ? 'bg-purpledose-700 text-white border-purpledose-700'
                    : 'bg-white border-slate-300 text-ink-700 hover:bg-slate-50'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-700 mb-1">
              Medical Specialty
            </label>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-ink-900 focus:outline-none"
            >
              <option value="General Medicine">General Medicine & Family Practice</option>
              <option value="Pediatrics">Pediatrics (Child Health)</option>
              <option value="Cardiology">Cardiology & Blood Pressure</option>
              <option value="Endocrinology">Diabetes & Metabolic Health</option>
              <option value="Women Health">Women's Health</option>
              <option value="Mental Health">Mental Health & Wellness</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1">
                Patient Name <span className="text-crimson-700">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-ink-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1">
                Phone Number <span className="text-crimson-700">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="0800 000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-ink-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-700 mb-1">
              Email Address <span className="text-crimson-700">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="patient@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-ink-900 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-ink-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-700 mb-1">
                Time Slot
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 bg-white text-ink-900 focus:outline-none"
              >
                <option value="09:00 AM">09:00 AM – Morning</option>
                <option value="11:00 AM">11:00 AM – Morning</option>
                <option value="02:00 PM">02:00 PM – Afternoon</option>
                <option value="05:00 PM">05:00 PM – Evening</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-700 mb-1">
              Primary Symptoms (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Brief explanation of your symptoms or question..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-ink-900 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-clinicalblue-400" />
            <span>Confirm Doctor Consultation</span>
          </button>
        </form>
      )}
    </Modal>
  );
};
