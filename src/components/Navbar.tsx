'use client';

import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="font-bold text-lg tracking-wide hover:text-slate-200 transition-colors">
          HANDYMAN PAINTING <span className="text-slate-400 font-normal">L.L.C.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-slate-300 transition-colors">
            Home
          </Link>
          <Link href="/pricing" className="hover:text-slate-300 transition-colors">
            Commercial Pricing
          </Link>
          <Link href="/terms" className="hover:text-slate-300 transition-colors">
            Terms &amp; Conditions
          </Link>
          <Link 
            href="/pricing" 
            className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
          >
            Get Quote
          </Link>
        </nav>

      </div>
    </header>
  );
}
