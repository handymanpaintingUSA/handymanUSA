import React from 'react';
import { FormspreeQuoteForm } from '@/components/FormspreeQuoteForm';

export default function EpoxyFlooringPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-slate-100">
      <div className="border-b border-slate-800 pb-8 mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Industrial Specialty Service</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Epoxy & High-Performance Floor Coatings</h1>
        <p className="text-slate-400 mt-2 text-base">Commercial floor resurfacing, diamond grinding, anti-slip urethane, and chemical-resistant coatings.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Included Scope</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li> Concrete prep via industrial diamond grinding & shot blasting</li>
              <li> Deep joint filling, spall repair, and moisture mitigation vapor barriers</li>
              <li> 100% solids epoxy application with quartz/decorative flake broadcast</li>
              <li> Polyaspartic topcoats for fast 24-hour return-to-service turnaround</li>
            </ul>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-sm text-slate-300 space-y-2">
            <h3 className="font-bold text-white">Rate Structure</h3>
            <p><strong>Standard Solid Epoxy:</strong> $3.50  $5.50 / sq. ft.</p>
            <p><strong>Heavy-Duty Polyaspartic/Flake:</strong> $5.00  $8.50 / sq. ft.</p>
            <p><strong>Billing:</strong> Billed in two installments: 50% upon surface prep completion, 50% upon topcoat application.</p>
          </section>
        </div>

        <div>
          <FormspreeQuoteForm serviceName="Epoxy Floor Coatings" />
        </div>
      </div>
    </div>
  );
}
