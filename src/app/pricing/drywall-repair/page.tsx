import React from 'react';
import { FormspreeQuoteForm } from '@/components/FormspreeQuoteForm';

export default function DrywallRepairPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-slate-100">
      <div className="border-b border-slate-800 pb-8 mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Commercial Structural Service</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Drywall, Framing & Substrate Repair</h1>
        <p className="text-slate-400 mt-2 text-base">Heavy-duty commercial drywall installation, metal stud framing, and water-damage remediation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Included Scope</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li> Heavy-gauge metal stud framing & demising wall construction</li>
              <li> Fire-rated (Type X) sheetrock installation & Level 5 finishing</li>
              <li> Water/mold damaged drywall cutout and structural remediation</li>
              <li> Acoustical tile and drop ceiling grid repairs</li>
            </ul>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-sm text-slate-300 space-y-2">
            <h3 className="font-bold text-white">Rate Structure</h3>
            <p><strong>Sheetrock Installation:</strong> $2.50  $4.00 / sq. ft.</p>
            <p><strong>Emergency Water/Damage Patching:</strong> $95 / hr per technician + materials</p>
            <p><strong>Billing:</strong> Invoiced weekly based on square footage hung/finished.</p>
          </section>
        </div>

        <div>
          <FormspreeQuoteForm serviceName="Drywall & Substrate Repair" />
        </div>
      </div>
    </div>
  );
}
