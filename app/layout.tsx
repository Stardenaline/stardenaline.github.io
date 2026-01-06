import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GlowEffects from '@/components/GlowEffects'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Stars' Page - Welcome!",
  description: 'Come here, free DDR5 here',
  openGraph: {
    title: "Stars' Page",
    description: 'Come here, free DDR5 here',
    url: 'https://starzy.top/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#121212] text-[#e0e0e0] min-h-screen`}>
        <GlowEffects />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
