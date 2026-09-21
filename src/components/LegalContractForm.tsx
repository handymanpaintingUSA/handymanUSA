'use client';

import React, { useState } from 'react';

export function LegalContractForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paymentOption, setPaymentOption] = useState('33_split');
  const [verificationMethod, setVerificationMethod] = useState('plaid');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;

    setSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('https://formspree.io/f/xppajrvk', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("There was an issue submitting your contract authorization. Please try again.");
      }
    } catch (err) {
      alert("Submission error. Please check your network connection.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-amber-50 border border-amber-300 p-8 rounded-2xl text-center text-amber-950 shadow-md">
        <h3 className="text-xl font-serif font-bold mb-2">Contract Authorization Logged</h3>
        <p className="text-xs text-slate-700">
          Your contract agreement and payment selection have been recorded. Our operations desk will contact you shortly to confirm mobilization.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-amber-300 shadow-2xl p-8 rounded-2xl space-y-6 text-left">
      <input type="hidden" name="form_type" value="Binding Agreement & Executive Terms" />

      <div>
        <span className="text-xs font-mono uppercase text-amber-800 font-bold">Official Agreement Execution</span>
        <h3 className="text-2xl font-serif font-bold text-slate-950">Commercial Service Contract</h3>
      </div>

      {/* Payment Selection */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-slate-800">Select Payment Structure</label>
        <select 
          name="payment_plan"
          value={paymentOption}
          onChange={(e) => setPaymentOption(e.target.value)}
          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
        >
          <option value="33_split">Option A: 33 / 33 / 34 Split (Commercial Standard)</option>
          <option value="25_down">Option B: 25% Down + Weekly Work-Performed Invoicing</option>
          <option value="paid_in_full">Option C: 100% Paid in Full Upfront (5% Discount Applied)</option>
        </select>
      </div>

      {/* Verification Selection */}
      {paymentOption === '25_down' && (
        <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 space-y-3">
          <label className="block text-xs font-bold text-amber-900">Verification Method for 25% Down Plan</label>
          <select 
            name="verification_method"
            value={verificationMethod}
            onChange={(e) => setVerificationMethod(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
          >
            <option value="plaid">Instant Bank Auth via Plaid (Immediate Approval)</option>
            <option value="ein_trade">EIN / W-9 & Commercial Trade References (24hr Audit)</option>
            <option value="personal_guarantee">Signed Personal Guarantee (Zero Bank Credentials Needed)</option>
          </select>
          
          {verificationMethod === 'ein_trade' && (
            <div className="pt-2 space-y-2">
              <input 
                type="text" 
                name="ein_number" 
                placeholder="Business EIN / Tax ID Number" 
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900"
              />
              <input 
                type="text" 
                name="trade_references" 
                placeholder="2 Trade References (Vendor Name & Phone Number)" 
                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-900"
              />
            </div>
          )}
        </div>
      )}

      {/* Terms Scroll Box */}
      <div className="space-y-3 text-xs text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200 h-40 overflow-y-scroll leading-relaxed">
        <p><strong className="text-slate-900">1. DEPOSIT & MOBILIZATION:</strong> Deposits are due upon signing to secure crew scheduling and material staging. Work begins upon deposit clearance.</p>
        <p><strong className="text-slate-900">2. 7-DAY STOP-WORK TRIGGER:</strong> Weekly progress or milestone invoices are Net-7. Unpaid balances past 7 days result in immediate work suspension.</p>
        <p><strong className="text-slate-900">3. CHANGE ORDERS:</strong> Substrate repairs, rotten wood, or scope modifications exceeding 15 minutes require a signed Change Order prior to execution.</p>
        <p><strong className="text-slate-900">4. MATERIAL TITLE:</strong> All materials delivered to job site remain property of Handyman Painting L.L.C. until invoice settlement.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Authorized Representative</label>
          <input 
            type="text" 
            name="authorized_representative"
            required 
            placeholder="Jane Doe" 
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Property Owner</label>
          <input 
            type="text" 
            name="company_name"
            required 
            placeholder="Acme Commercial Properties" 
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email</label>
          <input 
            type="email" 
            name="legal_email"
            required 
            placeholder="jdoe@acme.com" 
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            name="legal_phone"
            required 
            placeholder="(555) 000-0000" 
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500" 
          />
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input 
          type="checkbox" 
          id="legal-terms-check" 
          required 
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer" 
        />
        <label htmlFor="legal-terms-check" className="text-xs text-slate-600 cursor-pointer">
          I certify that I am an authorized representative and agree to Handyman Painting L.L.C.&apos;s commercial terms, 7-day stop-work policy, and chosen payment schedule.
        </label>
      </div>

      <button 
        type="submit" 
        disabled={!agreed || submitting}
        className="w-full py-3 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400 transition-colors shadow-lg disabled:opacity-40"
      >
        {submitting ? 'Executing Contract...' : 'Sign & Execute Agreement'}
      </button>
    </form>
  );
}
