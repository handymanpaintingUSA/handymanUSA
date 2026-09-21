import React from 'react';

interface TermsSectionProps {
  title: string;
  content: string;
}

export function TermsSection({ title, content }: TermsSectionProps) {
  return (
    <section className="bg-slate-50 p-6 rounded-lg border border-slate-200">
      <h2 className="text-lg font-semibold mb-2 text-slate-900">{title}</h2>
      <p className="text-sm text-slate-600 leading-relaxed">{content}</p>
    </section>
  );
}
