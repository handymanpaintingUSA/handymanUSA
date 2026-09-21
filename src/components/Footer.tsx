import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t-2 border-amber-500/30 bg-slate-950 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-white font-serif font-bold text-xl mb-2 flex items-center gap-2">
            <span className="text-amber-400"></span> Handyman Painting L.L.C.
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Premier commercial and high-end residential painting, specialized coating systems, and commercial facility maintenance retainers.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase text-amber-400 font-bold mb-3 tracking-widest">Service Tiers</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/pricing/full-service" className="hover:text-amber-400 transition-colors">Full Interior & Exterior Recoating</Link></li>
            <li><Link href="/pricing/retainer" className="hover:text-amber-400 transition-colors">Commercial Facility Retainer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-mono uppercase text-amber-400 font-bold mb-3 tracking-widest">Legal & Governance</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy & PII Rights</Link></li>
            <li><Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
        <p> {new Date().getFullYear()} Handyman Painting L.L.C. All rights reserved.</p>
        <p className="text-center sm:text-right max-w-md">
          By submitting forms on this site, you consent to receive SMS updates and calls regarding project schedules. Msg & data rates may apply.
        </p>
      </div>
    </footer>
  );
}
