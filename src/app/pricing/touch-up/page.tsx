import React from 'react';
import Link from 'next/link';

export default function TouchUpPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-slate-100">
      <div className="border-b border-slate-800 pb-8 mb-8">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Tier 01 Service</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 text-white">Commercial Touch-Up & Tenant Turnover</h1>
        <p className="text-slate-400 mt-2 text-base">Clear, fixed-rate pricing for property managers and commercial real estate turnarounds.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Exactly What Is Included</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold"></span> Drywall patching (nail holes, door-knob dings, minor cracks up to 6 inches).</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold"></span> Baseboard, door casing, and trim spot-touchups using client-provided or matched color.</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold"></span> Scuff removal, surface degreasing, and spot priming.</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold"></span> Post-job cleanup, vacuuming, and trash removal of all painting debris.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Rate Structure & Terms</h2>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-sm space-y-3 text-slate-300">
              <p><strong className="text-white">Minimum Dispatch Fee:</strong> $350 (covers up to 3 hours of on-site labor and standard prep materials).</p>
              <p><strong className="text-white">Standard Labor Rate:</strong> $85 / hour per technician thereafter.</p>
              <p><strong className="text-white">Materials:</strong> Paint supplied by client or billed at cost + 15% procurement fee.</p>
              <p><strong className="text-white">Billing Cycle:</strong> Billed immediately upon job completion or weekly for ongoing turnover accounts (Net-7 payment terms).</p>
            </div>
          </section>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl h-fit">
          <h3 className="text-lg font-bold text-white mb-4">Book Touch-Up Crew</h3>
          <p className="text-xs text-slate-400 mb-6">Need a turnover completed within 48 hours? Submit your unit details directly.</p>
          <Link href="/pricing" className="block text-center w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors">
            Request Service
          </Link>
        </div>
      </div>
    </div>
  );
}
