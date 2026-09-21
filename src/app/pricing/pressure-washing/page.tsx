import React from 'react';
import { FormspreeQuoteForm } from '@/components/FormspreeQuoteForm';

export default function PressureWashingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-slate-100">
      <div className="border-b border-slate-800 pb-8 mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Exterior Maintenance Service</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Pressure Washing & Exterior Cleanup</h1>
        <p className="text-slate-400 mt-2 text-base">Hot-water pressure washing, graffiti removal, parking garage cleaning, and building facade washdowns.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Included Scope</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li> 3,500+ PSI hot-water surface cleaning for oil, grease, and gum removal</li>
              <li> Environmentally compliant wastewater recovery and containment</li>
              <li> Exterior building washdowns (stucco, brick, EIFS, metal panels)</li>
              <li> Rapid anti-graffiti chemical treatment and color-matched barrier seals</li>
            </ul>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-sm text-slate-300 space-y-2">
            <h3 className="font-bold text-white">Rate Structure</h3>
            <p><strong>Flat Concrete Flatwork:</strong> $0.15  $0.35 / sq. ft.</p>
            <p><strong>Building Facade Washdown:</strong> $0.25  $0.50 / sq. ft.</p>
            <p><strong>Minimum Service Call:</strong> $275</p>
          </section>
        </div>

        <div>
          <FormspreeQuoteForm serviceName="Pressure Washing & Cleanup" />
        </div>
      </div>
    </div>
  );
}
