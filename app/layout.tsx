import type { Metadata } from 'next';
import { Manrope, Newsreader, Permanent_Marker } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader' });
const marker = Permanent_Marker({ subsets: ['latin'], weight: '400', variable: '--font-marker' });

export const metadata: Metadata = {
  title: 'didjuno — know what changed, know what you’re missing',
  description: 'A five-minute daily briefing and a personalized spending Rematch for points, card benefits, cash back, and smarter travel.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'didjuno — know what changed, know what you’re missing',
    description: 'The five-minute Daily + personalized Rematch.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'didjuno — Know what changed. Know what you’re missing.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'didjuno — know what changed, know what you’re missing',
    description: 'The five-minute Daily + personalized Rematch.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable} ${marker.variable}`}>
      <body>{children}</body>
    </html>
  );
}
