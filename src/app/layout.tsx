import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handyman Painting L.L.C. | National Professional Painting & Contracting',
  description: 'Commercial and residential professional painting services, high-output commercial contracting, and structural property maintenance nationwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
