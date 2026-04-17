import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Bell Cafe | Lucknow',
  description: 'Where Crunch Meets Comfort and Tradition Meets Taste. Top-rated cafe in Rajajipuram, Lucknow.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#F9F7F2] text-[#1A1A1A] antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
