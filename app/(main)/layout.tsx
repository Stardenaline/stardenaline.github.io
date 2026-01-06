import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import GlowEffect from '@/components/GlowEffect'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stars\' Portfolio',
  description: 'Come here, free DDR5 here',
  openGraph: {
    title: 'Stars\' Page',
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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#121212] text-[#e0e0e0] min-h-screen`}>
        <GlowEffect />
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {children}
        </main>
        <footer className="text-center py-6 border-t border-[#2a2a2a] mt-12">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Stars. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
