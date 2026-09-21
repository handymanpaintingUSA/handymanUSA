import React from 'react';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export function PricingCard({
  title = "Commercial Touch-Up",
  description = "Tenant turnovers & minor repairs",
  price = "Custom Quote",
  features = ["Wall patching", "Baseboard repair"],
  ctaText = "Request Scope Review",
  isPopular = false,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white p-8 rounded-2xl flex flex-col justify-between relative ${
        isPopular
          ? 'border-2 border-slate-900 shadow-md'
          : 'border border-slate-200 shadow-sm'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 right-6 bg-slate-900 text-white text-xs px-3 py-1 rounded-full font-semibold">
          Most Popular
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
        <div className="my-6">
          <span className="text-3xl font-extrabold text-slate-900">{price}</span>
        </div>
        <ul className="space-y-3 text-sm text-slate-600 mb-8">
          {features.map((feature, idx) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>
      </div>
      <button className="w-full py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors">
        {ctaText}
      </button>
    </div>
  );
}
