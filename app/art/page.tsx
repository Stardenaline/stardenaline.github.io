'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { ARTWORKS } from '@/lib/constants';

export default function ArtPage() {
  const [selectedArt, setSelectedArt] = useState<typeof ARTWORKS[0] | null>(null);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          Welcome to My Art Gallery
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          This page shows all art that I have. Usually I ask people to make it.
        </p>
      </section>

      {/* Art Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTWORKS.map((art) => (
          <div
            key={art.id}
            className="bg-background-card rounded-xl overflow-hidden border border-accent/10 cursor-pointer transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2"
            onClick={() => setSelectedArt(art)}
          >
            <div className="relative h-64">
              <Image
                src={art.imageUrl}
                alt={art.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-accent">{art.title}</h3>
              <p className="text-text-secondary">
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
                  <span>{art.artist}</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Art Modal */}
      {selectedArt && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div 
            className="bg-background-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent z-10"
              onClick={() => setSelectedArt(null)}
            >
              <X size={32} />
            </button>
            
            <div className="p-6">
              <div className="relative h-[60vh] mb-6">
                <Image
                  src={selectedArt.imageUrl}
                  alt={selectedArt.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-accent mb-2">{selectedArt.title}</h3>
                <p className="text-text-primary">
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
                    <span>{selectedArt.artist}</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
