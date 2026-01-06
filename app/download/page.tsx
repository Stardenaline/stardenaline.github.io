'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download } from 'lucide-react'

const events = [
  { name: 'Halloween Special 2023', resource: true, world: true },
  { name: 'Winter Festival', resource: true, world: false },
  { name: 'Summer Adventure', resource: false, world: true },
]

const skins = [
  {
    name: 'Stars',
    creator: 'creqpe',
    front: '/assets/Skins/StarsFront.png',
    back: '/assets/Skins/StarsBack.png',
    downloadUrl: 'http://textures.minecraft.net/texture/3e75c372bbe0cf89204a94bfaf72b7af24d6356a43b8ab99a1697868182280e3'
  },
  {
    name: 'Stars Cherry',
    creator: 'creqpe',
    front: '/assets/Skins/StarsSakuraFront.png',
    back: '/assets/Skins/StarsSakuraBack.png',
    downloadUrl: 'https://textures.minecraft.net/texture/7cf9a67d1b0a7a0ca0bf2bfd9113f5e9f7b0234440efcd0f7f007853fde34a1f'
  },
  {
    name: 'Stars Winter',
    creator: 'creqpe',
    front: '/assets/Skins/StarsWinterFront.png',
    back: '/assets/Skins/StarsWinterBack.png',
    downloadUrl: 'http://textures.minecraft.net/texture/1a3eacb3ac9dbe8a3b3753c2dab75c1f76785ba3265f296435f3981721f3f9c1'
  },
  {
    name: 'Stars (Concept)',
    creator: 'CyanWolf',
    front: '/assets/Skins/StarsOldFront.png',
    back: '/assets/Skins/StarsOldBack.png',
    downloadUrl: 'https://textures.minecraft.net/texture/9cd5e986d98a62a4d985c6a0458c28cbe5cf273cc1a32a9c08119c52cf0e6b11'
  },
]

export default function DownloadPage() {
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = (url: string, name: string) => {
    setDownloading(name)
    // Simulate download
    setTimeout(() => {
      window.open(url, '_blank')
      setDownloading(null)
    }, 500)
  }

  return (
    <>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Welcome to My Minecraft Downloads!</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Find all the resources, worlds, and skins from my Minecraft adventures here.
        </p>
      </section>

      {/* Server Events */}
      <section className="mb-16">
        <h2 className="section-title mb-6">Server Events</h2>
        <p className="text-gray-400 mb-8">
          Wanna download resources and worlds from Minecraft server events? I gotchu bro!
        </p>

        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-[#2a2a2a]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#2a2a2a]">
                  <th className="px-6 py-4 text-left text-accent font-semibold">Event Name</th>
                  <th className="px-6 py-4 text-left text-accent font-semibold">Resource Pack</th>
                  <th className="px-6 py-4 text-left text-accent font-semibold">World</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr 
                    key={event.name} 
                    className={`border-b border-[#2a2a2a] ${index % 2 === 0 ? 'bg-[#1e1e1e]' : 'bg-[#252525]'}`}
                  >
                    <td className="px-6 py-4">{event.name}</td>
                    <td className="px-6 py-4">
                      {event.resource ? (
                        <button
                          onClick={() => handleDownload('#', `${event.name} Resource Pack`)}
                          className="px-4 py-2 bg-accent text-black rounded-lg hover:bg-accent-hover transition-colors flex items-center gap-2"
                        >
                          <Download size={16} />
                          Download
                        </button>
                      ) : (
                        <span className="text-gray-500 italic">Not Available</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {event.world ? (
                        <button
                          onClick={() => handleDownload('#', `${event.name} World`)}
                          className="px-4 py-2 bg-accent text-black rounded-lg hover:bg-accent-hover transition-colors flex items-center gap-2"
                        >
                          <Download size={16} />
                          Download
                        </button>
                      ) : (
                        <span className="text-gray-500 italic">Not Available</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Skins */}
      <section className="mb-16">
        <h2 className="section-title mb-6">Skins</h2>
        <p className="text-gray-400 mb-8">Click the skin name to download!</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skins.map((skin) => (
            <div key={skin.name} className="bg-[#1e1e1e] rounded-xl overflow-hidden card-hover border border-[#2a2a2a]">
              <div className="p-4 bg-black/20 flex justify-center gap-4">
                <div className="relative w-24 h-32">
                  <Image
                    src={skin.front}
                    alt={`${skin.name} Front`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-24 h-32">
                  <Image
                    src={skin.back}
                    alt={`${skin.name} Back`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="p-4 text-center">
                <a
                  href={skin.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent font-bold text-lg mb-1 hover:underline"
                  onClick={(e) => {
                    if (downloading === skin.name) {
                      e.preventDefault()
                    } else {
                      handleDownload(skin.downloadUrl, skin.name)
                    }
                  }}
                >
                  {skin.name}
                  {downloading === skin.name && (
                    <span className="ml-2 text-xs animate-pulse">Downloading...</span>
                  )}
                </a>
                <p className="text-gray-400 text-sm">Created by {skin.creator}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <div className="bg-[#1e1e1e] p-8 rounded-xl border border-dashed border-accent/30 text-center">
        <p className="text-gray-400 text-lg">
          There will be cool stuff available for download soon! Stay tuned!
        </p>
      </div>
    </>
  )
}
