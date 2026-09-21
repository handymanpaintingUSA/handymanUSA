'use client';

import React, { useState } from 'react';

interface TermItem {
  title: string;
  content: string;
}

const TERMS: TermItem[] = [
  {
    title: "1. Scope of Work & Change Orders",
    content: "All proposals cover strictly the surfaces and repairs specified in the written estimate. Any undisclosed structural issues, moisture damage, lead paint abatement, or scope expansions requested by the client will require a signed Change Order prior to execution."
  },
  {
    title: "2. Payment Terms & Retainers",
    content: "A 30% deposit is required upon execution of the commercial agreement. Progress payments are billed on a weekly or milestone basis. Approved commercial net-30 accounts are subject to a 1.5% monthly late fee on overdue balances."
  },
  {
    title: "3. Site Access & Client Responsibilities",
    content: "The commercial client must provide clear site access, uninterrupted power and water, and remove all sensitive inventory or equipment prior to crew arrival. Delays caused by restricted site access will be billed at standard hourly standby rates."
  },
  {
    title: "4. Warranties & Final Inspection",
    content: "Handyman Painting L.L.C. provides a 1-year limited warranty on workmanship. A joint final walkthrough must be completed within 48 hours of job completion. Sign-off or occupancy constitutes full acceptance of completed work."
  }
];

export function TermsAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto text-left">
      {TERMS.map((term, idx) => (
        <div key={idx} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full text-left px-5 py-4 font-semibold text-slate-800 flex justify-between items-center hover:bg-slate-50 transition-colors"
          >
            <span>{term.title}</span>
            <span className="text-slate-400 font-bold">{openIdx === idx ? '' : '+'}</span>
          </button>
          {openIdx === idx && (
            <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              {term.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
