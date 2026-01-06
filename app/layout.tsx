import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GlowEffect from '@/app/components/GlowEffect';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Stars' Page",
  description: "Come here, free DDR5 here",
  openGraph: {
    title: "Stars' Page",
    description: "Come here, free DDR5 here",
    url: "https://starzy.top/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <GlowEffect />
        <Header />
        <main className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
