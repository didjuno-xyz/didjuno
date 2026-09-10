import type { Metadata } from 'next';
import { Manrope, Newsreader, Permanent_Marker } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader' });
const marker = Permanent_Marker({ subsets: ['latin'], weight: '400', variable: '--font-marker' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL || 'https://didjuno.xyz'),
  title: 'didjuno — know what changed, know what you’re missing',
  description: 'A five-minute weekly briefing and a personalized spending Rematch for points, card benefits, cash back, and smarter travel.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-primary-16.png', type: 'image/png', sizes: '16x16', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-primary-32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-primary-48.png', type: 'image/png', sizes: '48x48', media: '(prefers-color-scheme: light)' },
      { url: '/favicon-reverse-16.png', type: 'image/png', sizes: '16x16', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon-reverse-32.png', type: 'image/png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon-reverse-48.png', type: 'image/png', sizes: '48x48', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon-primary.png', type: 'image/png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'didjuno — know what changed, know what you’re missing',
    description: 'The five-minute Weekly + personalized Rematch.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'didjuno — Know what changed. Know what you’re missing.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'didjuno — know what changed, know what you’re missing',
    description: 'The five-minute Weekly + personalized Rematch.',
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
