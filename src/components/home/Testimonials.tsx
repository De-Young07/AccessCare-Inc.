import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { PAST_OUTREACHES } from '../../data/outreaches';

export const Testimonials: React.FC = () => {
  if (PAST_OUTREACHES.length === 0) return null;

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
            Past Outreaches
          </span>
          <h2 className="text-3xl font-extrabold text-ink-950 mt-3 tracking-tight">
            Where We've Been & Lives We've Touched
          </h2>
          <p className="text-ink-600 mt-2 text-base leading-relaxed">
            A look at our documented community outreaches across Nigeria.
          </p>
        </div>

        {/* Outreach Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PAST_OUTREACHES.map((outreach) => (
            <div
              key={outreach.id}
              className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-44 bg-slate-200 overflow-hidden">
                <img
                  src={outreach.photo}
                  alt={outreach.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-navy-900/80 text-white text-[10px] font-bold uppercase tracking-wider">
                  {outreach.tag}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-ink-950 text-sm leading-snug">
                    {outreach.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-ink-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {outreach.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {outreach.beneficiaries}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {outreach.location}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-ink-600 mt-2 leading-relaxed">
                  {outreach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
