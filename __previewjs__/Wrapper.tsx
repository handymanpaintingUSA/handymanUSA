import React, { ReactNode } from "react";
import "../src/app/globals.css"; // Imports your global Tailwind CSS styles

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 bg-slate-50 min-h-screen text-slate-800">
      {children}
    </div>
  );
}
