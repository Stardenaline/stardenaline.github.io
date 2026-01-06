import { Heart, Coffee, Copyright } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl">
                <Copyright className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">starzy.top</h3>
                <p className="text-sm text-gray-400">Stars&apos; Digital Home</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              A personal portfolio and creative space. Everything here is made with passion 
              and a lot of coffee ☕
            </p>
          </div>

          {/* Right Side */}
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 mb-4">
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-sm text-gray-300">
                Made with love and DDR5 memory
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © {currentYear} Stars. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end gap-2 mt-2">
              <Coffee className="w-4 h-4 text-amber-400" />
              <span className="text-xs text-gray-500">
                This website uses 100% renewable energy (and cookies 🍪)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span>Version 2.0</span>
            <span>•</span>
            <span>Built with Next.js 14</span>
            <span>•</span>
            <span>Hosted on Vercel</span>
            <span>•</span>
            <a 
              href="https://github.com/Stars6199" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
