'use client';

import React, { useState } from 'react';

export function CommercialContractForm() {
  const [agreed, setAgreed] = useState(false);
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-950/40 border border-emerald-800 p-8 rounded-2xl text-center text-emerald-200">
        <h3 className="text-xl font-bold mb-2">Agreement Authorized</h3>
        <p className="text-sm text-emerald-300">Thank you, {clientName}. A executed copy of the Commercial Work Agreement has been generated for {companyName}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6 text-left">
      <h3 className="text-xl font-bold text-white">Commercial Authorization & Work-Performed Payment Agreement</h3>
      
      <div className="space-y-4 text-xs text-slate-400 bg-slate-950 p-4 rounded-lg border border-slate-800 h-40 overflow-y-scroll leading-relaxed">
        <p><strong className="text-slate-200">1. WORK-PERFORMED INVOICING:</strong> Client agrees that invoicing occurs weekly based on labor performed, square footage completed, and materials delivered. Payments are strictly due Net-7 days. Client waives the right to hold back funds based on arbitrary project milestones.</p>
        <p><strong className="text-slate-200">2. WORK SUSPENSION:</strong> Accounts overdue by 7 days or more are subject to an immediate stop-work directive. Handyman Painting L.L.C. is not liable for project delays caused by unpaid work invoices.</p>
        <p><strong className="text-slate-200">3. CHANGE ORDERS:</strong> Unforeseen substrate defects, dry rot, lead abatement, or modifications requested on site will be billed at standard hourly rates via a signed or digital Change Order.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Authorized Representative</label>
          <input 
            type="text" 
            required 
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="John Doe" 
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-slate-500" 
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">Company / Entity Name</label>
          <input 
            type="text" 
            required 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Acme Commercial LLC" 
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-slate-500" 
          />
        </div>
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input 
          type="checkbox" 
          id="terms-check" 
          required 
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-800 bg-slate-950 text-white focus:ring-0" 
        />
        <label htmlFor="terms-check" className="text-xs text-slate-400">
          I certify that I am authorized to bind <strong className="text-slate-200">{companyName || 'the contracting entity'}</strong> and accept the weekly work-performed payment terms and conditions outlined above.
        </label>
      </div>

      <button 
        type="submit" 
        disabled={!agreed}
        className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl disabled:opacity-40 hover:bg-slate-200 transition-colors"
      >
        Sign &amp; Authorize Commercial Agreement
      </button>
    </form>
  );
}
