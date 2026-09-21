import './globals.css';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Handyman Painting L.L.C. | Presidential Commercial & Residential Painting',
  description: 'Premier commercial and residential painting, coating systems, and facility maintenance retainer services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#FAFAF8] text-slate-900">
      <body className="min-h-screen flex flex-col justify-between antialiased selection:bg-amber-200 selection:text-amber-950">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
