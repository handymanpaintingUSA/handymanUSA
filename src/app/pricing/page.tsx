import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const services = [
    {
      title: "Commercial Touch-Up",
      desc: "Tenant turnovers & minor repairs",
      price: "From $350",
      href: "/pricing/touch-up",
      tag: "Maintenance"
    },
    {
      title: "Full Recoating",
      desc: "Complete interior & exterior painting",
      price: "$1.80  $4.50 / sq ft",
      href: "/pricing/full-service",
      tag: "Most Popular"
    },
    {
      title: "Facility Retainer",
      desc: "Ongoing dedicated labor hours",
      price: "From $1,200 / mo",
      href: "/pricing/retainer",
      tag: "Contract"
    },
    {
      title: "Drywall & Substrate Repair",
      desc: "Framing, sheetrock & water damage",
      price: "$2.50  $4.00 / sq ft",
      href: "/pricing/drywall-repair",
      tag: "Structural"
    },
    {
      title: "Epoxy Flooring",
      desc: "High-performance floor coatings",
      price: "$3.50  $8.50 / sq ft",
      href: "/pricing/epoxy-flooring",
      tag: "Industrial"
    },
    {
      title: "Pressure Washing",
      desc: "Facade, concrete & graffiti removal",
      price: "From $0.15 / sq ft",
      href: "/pricing/pressure-washing",
      tag: "Exterior"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-4">Commercial Services & Pricing</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Transparent rates and dedicated service scope. All jobs are executed under weekly work-performed invoicing terms.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{s.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{s.title}</h3>
              <p className="text-xs text-slate-400 mb-6">{s.desc}</p>
              <div className="text-2xl font-extrabold text-white mb-6">{s.price}</div>
            </div>
            <Link href={s.href} className="block text-center w-full py-3 bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-xl transition-colors">
              View Detailed Scope & Quote Form 
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
