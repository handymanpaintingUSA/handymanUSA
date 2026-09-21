import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-slate-300">
      <h1 className="text-3xl font-extrabold text-white mb-2">Privacy Policy</h1>
      <p className="text-xs font-mono text-slate-500 mb-8">Effective Date: January 1, 2026 | Handyman Painting L.L.C.</p>

      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-white mb-2">1. Information We Collect</h2>
          <p>We collect personal information (PII) provided directly by you when submitting quote forms, requesting financial verification, or executing service contracts. This includes your name, company name, email address, phone number, project physical address, EIN/Tax IDs, and financial trade references.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">2. How We Use Your Data</h2>
          <p>Your information is used strictly to process project estimates, verify credit eligibility for payment plans (via Plaid or manual trade reference audits), dispatch field technicians, process job-cost invoices, and fulfill our contractual service obligations.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">3. Third-Party Service Providers</h2>
          <p>We do not sell, rent, or trade your personal data. We securely transmit necessary data to authorized third-party vendors for processing:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-400">
            <li><strong>Formspree:</strong> Secure form processing and lead transmission.</li>
            <li><strong>Plaid:</strong> Encrypted financial account verification for 25% down payment plans.</li>
            <li><strong>Stripe / Processing Partners:</strong> Secure ACH and credit card processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">4. Data Protection & Security</h2>
          <p>We implement industry-standard SSL/TLS encryption to protect PII transmitted across our network. Bank credentials entered via Plaid are encrypted directly and never stored on Handyman Painting L.L.C. servers.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-2">5. Your Data Rights & Contact</h2>
          <p>You may request to inspect, amend, or delete your personal data stored with us at any time by contacting us directly at our corporate operations email.</p>
        </section>
      </div>
    </div>
  );
}
