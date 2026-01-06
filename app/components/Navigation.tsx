'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home', icon: <Home size={18} /> },
  { href: '/socials', label: 'Socials' },
  { href: '/art', label: 'Art' },
  { href: '/download', label: 'Download' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-lg border-b border-[#2a2a2a] px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-accent font-bold text-xl hover:bg-[#2a2a2a] px-3 py-1 rounded transition-all duration-300 hover:-translate-y-0.5"
        >
          Home
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded transition-all duration-300 ${
                pathname === item.href
                  ? 'text-accent bg-[#2a2a2a]'
                  : 'text-gray-300 hover:text-accent hover:bg-[#2a2a2a]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-accent transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-[#1e1e1e] border border-[#2a2a2a] rounded-lg shadow-xl py-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 transition-colors ${
                    pathname === item.href
                      ? 'text-accent bg-[#2a2a2a]'
                      : 'text-gray-300 hover:text-accent hover:bg-[#2a2a2a]'
                  }`}
                >
                  {item.icon && item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}