'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { ArtItems } from '@/lib/constants'

export default function ArtPage() {
  const [selectedArt, setSelectedArt] = useState<typeof ArtItems[0] | null>(null)

  return (
    <>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Welcome to My Art Gallery</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          This page shows all art that I have. Usually I ask people to make it.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ArtItems.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelectedArt(art)}
            className="bg-[#1e1e1e] rounded-lg overflow-hidden cursor-pointer card-hover border border-[#2a2a2a] group"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-1">{art.title}</h3>
              <p className="text-gray-400">
                By{' '}
                {art.artistUrl ? (
                  <a
                    href={art.artistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {art.artist}
                  </a>
                ) : (
                  art.artist
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArt && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent text-3xl"
            >
              <X size={32} />
            </button>
            
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedArt.image}
                  alt={selectedArt.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedArt.title}</h3>
                <p className="text-gray-400">
                  By{' '}
                  {selectedArt.artistUrl ? (
                    <a
                      href={selectedArt.artistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {selectedArt.artist}
                    </a>
                  ) : (
                    selectedArt.artist
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
