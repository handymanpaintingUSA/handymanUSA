import React from 'react';
import { FormspreeQuoteForm } from '@/components/FormspreeQuoteForm';
import { LegalContractForm } from '@/components/LegalContractForm';

export default function RetainerPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-slate-900">
      
      {/* Header */}
      <div className="border-b-2 border-amber-500/30 pb-8 mb-12 text-center md:text-left">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold bg-amber-50 border border-amber-300 px-3 py-1 rounded-full">
          Tier 03  Facility Retainer
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 mt-3">Commercial Facility Retainer</h1>
        <p className="text-slate-600 mt-3 text-lg max-w-3xl leading-relaxed">
          Priority crew dispatch, dedicated monthly labor hours, and proactive maintenance for commercial property managers, retail chains, and corporate campuses.
        </p>
      </div>

      {/* Retainer Tiers Breakdown */}
      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold text-slate-950 mb-6">Retainer Tier Options</h2>
        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase font-semibold">Tier 1: Starter</span>
              <h3 className="text-xl font-serif font-bold text-slate-950 mt-1">Essential Coverage</h3>
              <div className="my-4">
                <span className="text-4xl font-extrabold text-slate-950">$1,500</span>
                <span className="text-xs text-slate-500"> / month</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li> <strong>15 dedicated labor hours</strong> / month</li>
                <li> Guaranteed 24-hour response SLA</li>
                <li> Overage rate: $85/hr (15% off standard)</li>
                <li> Bi-monthly facility health inspection</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-amber-500 p-6 rounded-2xl shadow-xl flex flex-col justify-between relative">
            <div className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-xs px-3 py-1 rounded-full font-bold font-mono uppercase">
               Executive Preferred
            </div>
            <div>
              <span className="text-xs font-mono text-amber-700 uppercase font-bold">Tier 2: Business</span>
              <h3 className="text-xl font-serif font-bold text-slate-950 mt-1">Standard Operations</h3>
              <div className="my-4">
                <span className="text-4xl font-extrabold text-slate-950">$3,000</span>
                <span className="text-xs text-slate-500"> / month</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li> <strong>32 dedicated labor hours</strong> / month</li>
                <li> Priority 4-hour emergency dispatch SLA</li>
                <li> Overage rate: $80/hr (20% off standard)</li>
                <li> Monthly proactive facility walkthrough</li>
                <li> Dedicated paint/materials locker on-site</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase font-semibold">Tier 3: Enterprise</span>
              <h3 className="text-xl font-serif font-bold text-slate-950 mt-1">Portfolio Custom</h3>
              <div className="my-4">
                <span className="text-3xl font-serif font-bold text-slate-950">Custom Bid</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li> <strong>50+ dedicated hours</strong> per month</li>
                <li> Dedicated lead tech & work truck assigned</li>
                <li> 2-hour emergency response SLA</li>
                <li> Multi-property portfolio management</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Scope Details & Legal Terms */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-slate-950">Covered Maintenance Scope</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-sm text-slate-700 space-y-4 shadow-sm">
            <div>
              <h4 className="font-bold text-slate-950 mb-1">Handyman & Facility Repairs</h4>
              <p className="text-xs text-slate-600">Door hardware, drywall patching, ceiling tile replacements, trim repair, re-caulking, furniture assembly, and fixture mounting.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-950 mb-1">Painting & Touch-Up Maintenance</h4>
              <p className="text-xs text-slate-600">High-traffic hallway touch-ups, door frame recoating, elevator bank maintenance, exterior scuff repairs, and paint color-matching.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-950 mb-1">Safety & Compliance Inspections</h4>
              <p className="text-xs text-slate-600">Stairwell tread checks, ADA ramp touch-ups, bollard repainting, and curb/parking lot re-striping.</p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-300 rounded-xl p-6 text-xs space-y-3 shadow-md border-t-2 border-amber-500">
            <h3 className="font-serif font-bold text-amber-400 text-sm">Retainer Billing & Overtime Rules</h3>
            <p><strong className="text-white">1. Base Monthly Fee:</strong> Billed on the 1st of each month via ACH or card. Unused monthly hours do not roll over.</p>
            <p><strong className="text-white">2. Additional Hours:</strong> Hours exceeding monthly allotment are billed weekly as earned labor at the discounted overage rate (Net-7).</p>
            <p><strong className="text-white">3. Off-Hours Emergency:</strong> Emergency calls requested between 6 PM  6 AM or on major holidays are billed at 1.5x the standard hourly tier rate.</p>
          </div>
        </div>

        {/* Consultation Formspree Form (xljrwnqb) */}
        <div>
          <FormspreeQuoteForm serviceName="Facility Retainer Consultation" />
        </div>
      </div>

      {/* Contract Sign-off (xppajrvk) */}
      <div className="border-t-2 border-amber-500/30 pt-16 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-slate-950">Execute Retainer Agreement</h2>
          <p className="text-xs text-slate-600 mt-1">Authorize terms below to lock in your dedicated monthly maintenance schedule.</p>
        </div>
        <LegalContractForm />
      </div>

    </div>
  );
}
