import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import GlowEffects from '@/components/GlowEffects'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Stars' Portfolio",
  description: 'Welcome to my personal portfolio website',
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text min-h-screen`}>
        <GlowEffects />
        <Navigation />
        <main className="pt-24 pb-8 px-4 max-w-6xl mx-auto">
          {children}
        </main>
        <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-800">
          © 2025 starzy.top. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
