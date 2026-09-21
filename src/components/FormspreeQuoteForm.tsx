'use client';

import React, { useState } from 'react';

export function FormspreeQuoteForm({ serviceName }: { serviceName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('https://formspree.io/f/xljrwnqb', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      alert("Error submitting form. Please check network connectivity.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-amber-50 border border-amber-300 p-8 rounded-2xl text-center text-amber-950 shadow-md">
        <h3 className="text-xl font-serif font-bold mb-2">Quote Consultation Submitted</h3>
        <p className="text-xs text-slate-700">
          Thank you for reaching out. An estimator from Handyman Painting L.L.C. will review your scope and contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-amber-200 shadow-xl p-8 rounded-2xl space-y-4 text-left">
      <input type="hidden" name="requested_service" value={serviceName} />

      <div>
        <span className="text-xs font-mono uppercase text-amber-800 font-bold">Consultation Intake</span>
        <h3 className="text-xl font-serif font-bold text-slate-950">Request Project Estimate</h3>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
        <input 
          type="text" 
          name="full_name" 
          required 
          placeholder="Jane Doe" 
          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500" 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="jdoe@company.com" 
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500" 
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            required 
            placeholder="(555) 000-0000" 
            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500" 
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">Project Details / Square Footage</label>
        <textarea 
          name="project_notes" 
          rows={3} 
          required
          placeholder="Describe your property type, square footage, interior/exterior scope, or timeline..." 
          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
        ></textarea>
      </div>

      <p className="text-[10px] text-slate-500 leading-tight">
        By submitting, you consent to receive SMS updates and calls regarding your estimate. Consent is not a condition of purchase.
      </p>

      <button 
        type="submit" 
        disabled={submitting}
        className="w-full py-3 bg-slate-950 text-amber-400 font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-md disabled:opacity-50"
      >
        {submitting ? 'Transmitting Request...' : 'Submit Quote Request'}
      </button>
    </form>
  );
}
