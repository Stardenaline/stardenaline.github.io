import Link from 'next/link'
import { Home, Search, Bug } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-gradient opacity-20">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Bug className="w-32 h-32 text-cyan-400 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Oops! It seems you&apos;ve stumbled upon a digital void. The page you&apos;re looking for 
          has either been moved, deleted, or never existed in this universe.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link
            href="/art"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 transition-all duration-300"
          >
            <Search className="w-5 h-5" />
            Browse Art Gallery
          </Link>
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
          <p className="text-sm text-gray-400">
            <span className="text-cyan-400">Pro tip:</span> If you think this page should exist, 
            try checking the URL for typos or use the navigation menu above.
          </p>
        </div>
      </div>
    </div>
  )
}
