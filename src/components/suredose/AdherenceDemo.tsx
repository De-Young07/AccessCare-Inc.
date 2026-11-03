import React, { useState } from 'react';
import { 
  Pill, 
  CheckCircle2, 
  MessageCircle, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export const AdherenceDemo: React.FC = () => {
  const [selectedMed, setSelectedMed] = useState('Amlodipine 5mg (Hypertension)');
  const [channel, setChannel] = useState<'whatsapp' | 'sms'>('whatsapp');
  const [schedule, setSchedule] = useState('Morning — 08:00 AM');
  const [status, setStatus] = useState<'pending' | 'taken' | 'snoozed'>('pending');
  const [adherenceScore, setAdherenceScore] = useState(82);

  const handleTakeDose = () => {
    setStatus('taken');
    setAdherenceScore(96);
  };

  const handleReset = () => {
    setStatus('pending');
    setAdherenceScore(82);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Controls */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purpledose-700 bg-purpledose-50 border border-purpledose-200 px-2.5 py-1 rounded-md">
              Interactive Clinical Simulation
            </span>
            <h3 className="text-2xl font-extrabold text-ink-950 mt-2 tracking-tight">
              Test-Drive SureDose: Medication Adherence Companion
            </h3>
            <p className="text-ink-600 text-sm mt-1 leading-relaxed">
              Experience how AccessCare's SureDose eliminates missed pills, provides pharmacist oversight, and keeps patients out of emergency relapse.
            </p>
          </div>

          {/* Config Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                  Prescribed Medicine
                </label>
                <select
                  value={selectedMed}
                  onChange={(e) => {
                    setSelectedMed(e.target.value);
                    handleReset();
                  }}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-ink-900 focus:outline-none"
                >
                  <option value="Amlodipine 5mg (Hypertension)">Amlodipine 5mg (Hypertension)</option>
                  <option value="Metformin 500mg (Type 2 Diabetes)">Metformin 500mg (Type 2 Diabetes)</option>
                  <option value="Coartem (Artemether Malaria Dose)">Coartem (Artemether Malaria Dose)</option>
                  <option value="Atorvastatin 20mg (Cholesterol)">Atorvastatin 20mg (Cholesterol)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                  Preferred Channel
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setChannel('whatsapp')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-colors ${
                      channel === 'whatsapp'
                        ? 'bg-tealgreen-700 text-white border-tealgreen-700'
                        : 'bg-white border-slate-300 text-ink-700 hover:bg-slate-100'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setChannel('sms')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-colors ${
                      channel === 'sms'
                        ? 'bg-navy-900 text-white border-navy-900'
                        : 'bg-white border-slate-300 text-ink-700 hover:bg-slate-100'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>SMS / Text</span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-ink-600 mb-1">
                Dosage Time Slot
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSchedule('Morning — 08:00 AM');
                    handleReset();
                  }}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                    schedule.includes('Morning')
                      ? 'bg-white border-navy-900 font-bold text-navy-900 shadow-xs'
                      : 'bg-slate-100 border-slate-200 text-ink-600 hover:bg-white'
                  }`}
                >
                  Morning (08:00 AM)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSchedule('Night — 08:00 PM');
                    handleReset();
                  }}
                  className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-colors ${
                    schedule.includes('Night')
                      ? 'bg-white border-navy-900 font-bold text-navy-900 shadow-xs'
                      : 'bg-slate-100 border-slate-200 text-ink-600 hover:bg-white'
                  }`}
                >
                  Evening (08:00 PM)
                </button>
              </div>
            </div>
          </div>

          {/* Adherence Score Indicator */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purpledose-50 text-purpledose-700 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-ink-500 font-semibold">30-Day Adherence Score</div>
                <div className="text-xl font-extrabold text-ink-950 flex items-center gap-2">
                  <span>{adherenceScore}%</span>
                  <span className={`text-xs px-2 py-0.5 rounded font-bold border ${
                    adherenceScore > 90
                      ? 'bg-tealgreen-50 text-tealgreen-800 border-tealgreen-200'
                      : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}>
                    {adherenceScore > 90 ? 'Optimal Control' : 'At-Risk Window'}
                  </span>
                </div>
              </div>
            </div>

            {status === 'taken' && (
              <span className="text-xs font-bold text-tealgreen-800 flex items-center gap-1 bg-tealgreen-50 px-2.5 py-1 rounded border border-tealgreen-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-tealgreen-600" />
                Dose Logged
              </span>
            )}
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm bg-white border border-slate-300 rounded-2xl p-4 shadow-sm">
            
            {/* Alert Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-purpledose-700 text-white flex items-center justify-center">
                  <Pill className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-xs text-ink-950">SureDose Alert ({channel.toUpperCase()})</div>
                  <div className="text-[10px] text-ink-500">AccessCare Clinical Protocol</div>
                </div>
              </div>
              <span className="text-[10px] text-ink-400">Just now</span>
            </div>

            {/* Simulated message body */}
            <div className="py-4 space-y-3">
              <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs text-ink-800 leading-relaxed">
                <p className="font-bold text-ink-950 mb-1">
                  Good {schedule.includes('Morning') ? 'morning' : 'evening'}!
                </p>
                <p>
                  Time for your scheduled dose of <strong className="text-ink-950">{selectedMed}</strong>.
                </p>
                <p className="text-ink-500 text-[11px] mt-1">
                  Take with water after food.
                </p>
              </div>

              {status === 'taken' ? (
                <div className="bg-tealgreen-50 border border-tealgreen-200 p-3 rounded-xl text-xs text-tealgreen-900">
                  <div className="flex items-center gap-1.5 font-bold mb-0.5">
                    <CheckCircle2 className="w-4 h-4 text-tealgreen-700" />
                    <span>Dose Confirmed ({new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})</span>
                  </div>
                  <p className="text-[11px] text-tealgreen-800">
                    Streak active: 14 consecutive doses recorded.
                  </p>
                </div>
              ) : status === 'snoozed' ? (
                <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-lg text-xs text-amber-900">
                  Snoozed for 30 minutes. A second prompt will arrive shortly.
                </div>
              ) : null}
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              {status === 'pending' ? (
                <>
                  <button
                    onClick={handleTakeDose}
                    className="w-full py-2.5 px-3 rounded-lg bg-tealgreen-700 hover:bg-tealgreen-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>1: Confirm Dose Taken</span>
                  </button>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setStatus('snoozed')}
                      className="py-2 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-ink-700 text-xs font-medium border border-slate-200"
                    >
                      2: Snooze 30m
                    </button>
                    <button
                      onClick={() => alert("Connecting you with an AccessCare clinical pharmacist advisory hotline.")}
                      className="py-2 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-ink-700 text-xs font-medium border border-slate-200"
                    >
                      3: Ask Pharmacist
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={handleReset}
                  className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-ink-700 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Simulation</span>
                </button>
              )}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
