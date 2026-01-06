'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-accent/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-accent font-bold text-xl hover:bg-accent/10 px-3 py-2 rounded-md transition-all duration-300"
        >
          Home
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-text-primary hover:text-accent px-3 py-2 rounded-md transition-all duration-300 hover:bg-accent/10"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background-card border border-accent/20 rounded-lg mt-2 mx-4 p-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-primary hover:text-accent px-3 py-2 rounded-md transition-all duration-300 hover:bg-accent/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
