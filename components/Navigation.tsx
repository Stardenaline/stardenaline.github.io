'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Socials', path: '/socials' },
  { name: 'Art', path: '/art' },
  { name: 'Download', path: '/download' },
  { name: 'Donate', path: '/donate' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-accent font-bold text-xl hover:text-hover transition-colors">
          Home
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === item.path
                  ? 'text-accent bg-accent/10'
                  : 'text-gray-300 hover:text-accent hover:bg-accent/5'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300"
          >
            ☰
          </button>
          
          {mobileMenuOpen && (
            <div className="absolute top-full right-4 bg-card border border-gray-700 rounded-lg shadow-lg py-2 min-w-[150px]">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 hover:bg-accent/10 transition-colors ${
                    pathname === item.path ? 'text-accent' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
