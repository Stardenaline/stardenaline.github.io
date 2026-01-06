'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { useState } from 'react'

interface ArtCardProps {
  image: string
  title: string
  artist: string
  artistUrl?: string
  onExpand: () => void
}

export default function ArtCard({ image, title, artist, artistUrl, onExpand }: ArtCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-[#1e1e1e] rounded-lg overflow-hidden cursor-pointer card-hover border border-[#2a2a2a] relative"
      onClick={onExpand}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white text-lg font-semibold">Click to View</div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">
            By{' '}
            {artistUrl ? (
              <a
                href={artistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                {artist}
                <ExternalLink size={12} />
              </a>
            ) : (
              artist
            )}
          </p>
          <button
            className="text-xs text-gray-500 hover:text-accent transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              onExpand()
            }}
          >
            View →
          </button>
        </div>
      </div>
    </div>
  )
}
