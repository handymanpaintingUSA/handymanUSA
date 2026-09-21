import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-300">
      <h1 className="text-3xl font-extrabold text-white mb-2">Terms of Service</h1>
      <p className="text-xs font-mono text-slate-500 mb-8">Effective Date: January 1, 2026 | Handyman Painting L.L.C.</p>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Scope of Estimates & Service</h2>
          <p>Online rates, price matrix figures, and instant form estimates provided on this website represent non-binding preliminary estimates. Official project scope and final binding quotes require an on-site physical evaluation and explicit contract execution.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. Digital Contract Execution & Payment Terms</h2>
          <p>Submitting a signed digital agreement via our portal binds the client to Handyman Painting L.L.C.&apos;s commercial payment terms, including the 33/33/34 deposit schedule, 25% weekly work-performed terms, or paid-in-full discount agreements. All weekly progress invoices are Net-7.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. 7-Day Work Stop Policy</h2>
          <p>Invoices past due by seven (7) calendar days trigger an immediate work suspension. Handyman Painting L.L.C. reserves the right to halt site operations, withhold warranties, and enforce material ownership retention until outstanding balances are cleared.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. Third-Party Integrations & Financial Verification</h2>
          <p>By opting into the 25% Down Plan and utilizing Plaid bank verification, trade reference audits, or soft credit checks, you authorize Handyman Painting L.L.C. to evaluate liquidity and corporate creditworthiness through secure third-party processors.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">5. Limitation of Liability</h2>
          <p>Handyman Painting L.L.C. is not liable for indirect, incidental, or consequential site delays caused by unperformed client prep responsibilities, weather events on exterior coatings, or third-party payment gateway downtime.</p>
        </section>
      </div>
    </div>
  );
}
