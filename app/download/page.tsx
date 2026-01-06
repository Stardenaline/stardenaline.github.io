'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Download, ExternalLink, Package, Globe, FileDown } from 'lucide-react'
import { minecraftSkins, serverEvents } from '@/lib/constants'

export default function DownloadPage() {
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = (name: string, url: string) => {
    setDownloading(name)
    setTimeout(() => {
      window.open(url, '_blank')
      setDownloading(null)
    }, 500)
  }

  const handleEventDownload = (type: 'resource' | 'world', eventName: string) => {
    alert(`Downloading ${type} for ${eventName} - In a real implementation, this would download the file.`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <Download className="w-8 h-8 text-cyan-400" />
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">
            Minecraft Downloads
          </h1>
        </div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Find all the resources, worlds, and skins from my Minecraft adventures here.
        </p>
      </div>

      {/* Server Events */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Globe className="w-6 h-6 text-cyan-400" />
          Server Events
        </h2>
        <p className="text-gray-400 mb-6">
          Wanna download resources and worlds from Minecraft server events? I gotchu bro!
        </p>
        
        <div className="glass-effect rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-cyan-500/10">
                  <th className="text-left p-6 text-cyan-400 font-semibold">Event Name</th>
                  <th className="text-left p-6 text-cyan-400 font-semibold">Resource Pack</th>
                  <th className="text-left p-6 text-cyan-400 font-semibold">World</th>
                </tr>
              </thead>
              <tbody>
                {serverEvents.map((event, index) => (
                  <tr 
                    key={event.name}
                    className={`border-b border-white/5 ${index % 2 === 0 ? 'bg-white/2.5' : ''}`}
                  >
                    <td className="p-6">
                      <div className="font-medium text-white">{event.name}</div>
                    </td>
                    <td className="p-6">
                      {event.resourcePack ? (
                        <button
                          onClick={() => handleEventDownload('resource', event.name)}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-xl font-medium transition-colors duration-300"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      ) : (
                        <span className="text-gray-500 italic">Not Available</span>
                      )}
                    </td>
                    <td className="p-6">
                      {event.world ? (
                        <button
                          onClick={() => handleEventDownload('world', event.name)}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-xl font-medium transition-colors duration-300"
                        >
                          <Download className="w-4 h-4" />
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
      </div>

      {/* Skins Section */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Package className="w-6 h-6 text-cyan-400" />
          Skins
        </h2>
        <p className="text-gray-400 mb-6">
          Click the skin name to download!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {minecraftSkins.map((skin) => (
            <div
              key={skin.name}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex gap-4 mb-6 bg-white/5 rounded-xl p-4">
                  <div className="flex-1">
                    <div className="relative h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg overflow-hidden">
                      <Image
                        src={skin.front}
                        alt={`${skin.name} Front`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">Front</p>
                  </div>
                  <div className="flex-1">
                    <div className="relative h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg overflow-hidden">
                      <Image
                        src={skin.back}
                        alt={`${skin.name} Back`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">Back</p>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="font-bold text-white text-xl mb-2">{skin.name}</h3>
                  <p className="text-gray-400 text-sm">Created by {skin.creator}</p>
                </div>
                
                <button
                  onClick={() => handleDownload(skin.name, skin.url)}
                  disabled={downloading === skin.name}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {downloading === skin.name ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download Skin
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
          <FileDown className="w-6 h-6 text-cyan-400 animate-pulse" />
          <p className="text-gray-300 text-lg">
            There will be cool stuff available for download soon! Stay tuned!
          </p>
        </div>
      </div>
    </div>
  )
}
