'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ExternalLink, Maximize2 } from 'lucide-react'
import { artPieces } from '@/lib/constants'

export default function ArtPage() {
  const [selectedArt, setSelectedArt] = useState<typeof artPieces[0] | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Art Gallery
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          This page shows all art that I have. Usually I ask people to make it.
        </p>
      </div>

      {/* Art Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artPieces.map((art) => (
          <div
            key={art.id}
            className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 cursor-pointer border border-white/5 hover:border-cyan-500/30"
            onClick={() => setSelectedArt(art)}
          >
            {/* Image Container */}
            <div className="relative h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
              {!loadedImages.has(art.id) && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse" />
              )}
              <Image
                src={art.imageUrl}
                alt={art.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                onLoad={() => handleImageLoad(art.id)}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full">
                      View
                    </span>
                    <Maximize2 className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-bold text-white mb-1 line-clamp-1">{art.title}</h3>
              <p className="text-sm text-gray-400">
                By{' '}
                {art.artistUrl ? (
                  <a
                    href={art.artistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {art.artist}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-gray-400">{art.artist}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArt && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedArt(null)}
        >
          <button
            onClick={() => setSelectedArt(null)}
            className="absolute top-6 right-6 z-10 text-white hover:text-cyan-400 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div 
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Image */}
              <div className="relative h-[60vh] min-h-[400px] rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                <Image
                  src={selectedArt.imageUrl}
                  alt={selectedArt.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              
              {/* Info */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gradient mb-3">{selectedArt.title}</h2>
                <div className="inline-flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full">
                  <span className="text-gray-400">Artist:</span>
                  {selectedArt.artistUrl ? (
                    <a
                      href={selectedArt.artistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2 font-semibold text-lg"
                    >
                      {selectedArt.artist}
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-gray-300 font-semibold text-lg">{selectedArt.artist}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
