import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface WebringSite {
  id: number
  name: string
  url: string
  image: string
}

interface WebringBannerProps {
  site: WebringSite
}

export default function WebringBanner({ site }: WebringBannerProps) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex flex-col items-center text-center">
          {/* Image */}
          <div className="relative w-20 h-20 mb-4 rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-colors duration-300">
            <Image
              src={site.image}
              alt={site.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="80px"
            />
          </div>
          
          {/* Name */}
          <h3 className="font-semibold text-white mb-2 line-clamp-1">{site.name}</h3>
          
          {/* Visit Badge */}
          <div className="inline-flex items-center gap-1 px-3 py-1.5 bg-cyan-500/10 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
            <span className="text-xs text-cyan-400 font-medium">Visit</span>
            <ExternalLink className="w-3 h-3 text-cyan-400" />
          </div>
        </div>
      </div>
    </a>
  )
}
