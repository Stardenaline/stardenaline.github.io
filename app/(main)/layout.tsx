import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'  // ← IMPORTANT: This imports the CSS
import Navigation from '@/components/Navigation'
import GlowEffect from '@/components/GlowEffect'
import { ThemeProvider } from 'next-themes'

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
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <GlowEffect />
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <footer className="text-center py-8 border-t border-[#2a2a2a] mt-16">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Stars. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}