import React from 'react';
import { FormspreeQuoteForm } from '@/components/FormspreeQuoteForm';
import { LegalContractForm } from '@/components/LegalContractForm';

export default function FullServicePaintingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-slate-900">
      
      {/* Presidential Header */}
      <div className="border-b-2 border-amber-500/30 pb-8 mb-12 text-center md:text-left">
        <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold bg-amber-50 border border-amber-300 px-3 py-1 rounded-full shadow-sm">
             Flagship Core Service
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">Tier 02</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mt-1">
          Full Interior & Exterior Recoating
        </h1>
        <p className="text-slate-600 mt-3 text-lg max-w-3xl leading-relaxed">
          Executive commercial and luxury residential coating solutions engineered for corporate headquarters, multi-family portfolios, high-traffic retail, and fine estates.
        </p>
      </div>

      {/* Payment Options Banner  Presidential Gold & White */}
      <div className="mb-16 bg-white border border-amber-200 shadow-xl rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Executive Payment Structures</span>
          <h2 className="text-2xl font-serif font-bold text-slate-950 mt-1">Flexible Capital & Payment Options</h2>
          <p className="text-xs text-slate-600 mt-1">
            Choose the payment structure tailored to your cash flow. All plans guarantee immediate material procurement and priority crew mobilization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div>
              <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider">Option A  Commercial Standard</span>
              <h3 className="text-lg font-serif font-bold text-slate-950 mt-1 mb-2">33 / 33 / 34 Split</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                33% deposit at execution (materials & staging), 33% at midpoint (50% prep & primer complete), and 34% upon final executive walkthrough.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono border-t border-slate-200 pt-3">
               Standard commercial structure
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-amber-400 transition-colors">
            <div>
              <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider">Option B  Weekly Work-Performed</span>
              <h3 className="text-lg font-serif font-bold text-slate-950 mt-1 mb-2">25% Down + Weekly</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                25% initial deposit to mobilize. Remaining balance billed via weekly work-performed progress invoices with 10% retained for final punch-list.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-mono border-t border-slate-200 pt-3">
               Plaid, D&B, or Personal Guarantee
            </div>
          </div>

          <div className="bg-amber-500 text-slate-950 rounded-xl p-6 flex flex-col justify-between shadow-lg relative">
            <div className="absolute -top-3 right-4 bg-slate-950 text-amber-300 text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full font-bold shadow">
               Premium Incentive
            </div>
            <div>
              <span className="text-xs font-mono text-slate-950 font-bold uppercase tracking-wider">Option C  Paid-In-Full</span>
              <h3 className="text-lg font-serif font-extrabold text-slate-950 mt-1 mb-2">Upfront Cash Discount</h3>
              <p className="text-xs text-slate-900 leading-relaxed mb-4 font-medium">
                Pay 100% upfront upon agreement execution and receive an immediate **5% statement credit** applied directly to your project total.
              </p>
            </div>
            <div className="text-xs text-slate-950 font-bold font-mono border-t border-amber-600/40 pt-3">
               Save 5% instantly on total contract
            </div>
          </div>

        </div>
      </div>

      {/* Presidential Pricing Matrix Table */}
      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold text-slate-950 mb-2">Commercial Benchmark Pricing</h2>
        <p className="text-xs text-slate-500 mb-6">Rates include surface restoration, priming, and commercial Sherwin-Williams or Benjamin Moore premium systems.</p>
        
        <div className="overflow-x-auto border border-amber-200/80 rounded-2xl bg-white shadow-md">
          <table className="w-full text-left text-sm text-slate-800">
            <thead className="bg-slate-950 text-xs uppercase font-mono text-amber-400 border-b border-amber-500/30">
              <tr>
                <th className="p-4">Scope Category</th>
                <th className="p-4">Investment Benchmark</th>
                <th className="p-4">Invoicing Basis</th>
                <th className="p-4">Key Specifications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-amber-50/30 transition-colors">
                <td className="p-4 font-bold text-slate-950">Full Interior Painting</td>
                <td className="p-4 text-amber-700 font-mono font-bold text-base">$2.25  $3.75 / sq ft</td>
                <td className="p-4 text-xs text-slate-500">Milestone / Weekly</td>
                <td className="p-4 text-xs text-slate-600">Floor area basis. 2 coats acrylic, drywall patching up to 2" included.</td>
              </tr>
              <tr className="hover:bg-amber-50/30 transition-colors">
                <td className="p-4 font-bold text-slate-950">Full Exterior Painting</td>
                <td className="p-4 text-amber-700 font-mono font-bold text-base">$2.75  $5.50 / sq ft</td>
                <td className="p-4 text-xs text-slate-500">Milestone / Weekly</td>
                <td className="p-4 text-xs text-slate-600">Surface area basis. Power washing prep, elastomeric caulking, high-reach rigging.</td>
              </tr>
              <tr className="hover:bg-amber-50/30 transition-colors">
                <td className="p-4 font-bold text-slate-950">Commercial Floor & Epoxy Coatings</td>
                <td className="p-4 text-amber-700 font-mono font-bold text-base">$4.50  $9.00 / sq ft</td>
                <td className="p-4 text-xs text-slate-500">50% Prep / 50% Topcoat</td>
                <td className="p-4 text-xs text-slate-600">Diamond grinding surface prep, 100% solids epoxy / polyaspartic topcoats.</td>
              </tr>
              <tr className="hover:bg-amber-50/30 transition-colors">
                <td className="p-4 font-bold text-slate-950">Drywall & Substrate Repair</td>
                <td className="p-4 text-amber-700 font-mono font-bold text-base">$3.50  $6.00 / sq ft</td>
                <td className="p-4 text-xs text-slate-500">Weekly Work-Performed</td>
                <td className="p-4 text-xs text-slate-600">Level 4/5 sheetrock finishing, metal stud patching, fire-rated repairs.</td>
              </tr>
              <tr className="hover:bg-amber-50/30 transition-colors">
                <td className="p-4 font-bold text-slate-950">On-Demand Service Call</td>
                <td className="p-4 text-amber-700 font-mono font-bold text-base">$350 Dispatch + $95/hr</td>
                <td className="p-4 text-xs text-slate-500">Per-Job / Daily</td>
                <td className="p-4 text-xs text-slate-600">3-hour minimum dispatch covering mobilization, fuel, and patching materials.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Surface Preparation & Governance Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-slate-950">Operational Governance</h2>
          
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-sm text-slate-700 space-y-4 shadow-sm">
            <div>
              <h3 className="font-bold text-slate-950 mb-1">1. Mechanical Preparation Standard</h3>
              <p className="text-xs text-slate-600">
                All quotes include mandatory power-washing on exteriors, scraping loose paint, scuff-sanding, joint caulking, and high-adhesion stain-blocking primers.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950 mb-1">2. Mandatory Change Order Rule</h3>
              <p className="text-xs text-slate-600">
                Unforeseen rotten wood, hidden water damage, lead encapsulation, or scope changes are documented and approved via digital Change Orders prior to execution.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-950 mb-1">3. Minimal Site Disruption</h3>
              <p className="text-xs text-slate-600">
                Night shift and weekend execution available for active corporate facilities. Full containment isolation zones and HEPA air scrubbing utilized.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-300 rounded-xl p-6 text-xs space-y-3 shadow-md border-t-2 border-amber-500">
            <h3 className="font-serif font-bold text-amber-400 text-sm">Contract Governance & Invoicing Policy</h3>
            <p>
              <strong className="text-white">1. 7-Day Stop-Work Trigger:</strong> Invoices for weekly progress or milestone completions are Net-7. Unpaid balances past 7 days result in immediate site halts.
            </p>
            <p>
              <strong className="text-white">2. Material Title Retention:</strong> Coatings and equipment delivered to the job site remain property of Handyman Painting L.L.C. until invoice settlement.
            </p>
            <p>
              <strong className="text-white">3. Verification Options:</strong> The 25% Down option requires Plaid bank connection, commercial credit check (EIN/W-9), or signed Personal Guarantee.
            </p>
          </div>
        </div>

        {/* Formspree Quote Request Form (xljrwnqb) */}
        <div>
          <FormspreeQuoteForm serviceName="Full Interior & Exterior Painting" />
        </div>
      </div>

      {/* Contract Execution Section (xppajrvk) */}
      <div className="border-t-2 border-amber-500/30 pt-16 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-slate-950">Execute Service Agreement</h2>
          <p className="text-xs text-slate-600 mt-1">
            Authorize terms below to lock in project scheduling and crew mobilization.
          </p>
        </div>
        <LegalContractForm />
      </div>

    </div>
  );
}
