'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, MessageSquare, Users, Video, Mail, Twitter, Globe } from 'lucide-react'
import { socialAccounts, minecraftAccounts } from '@/lib/constants'

const iconMap: { [key: string]: React.ReactNode } = {
  discord: <MessageSquare className="w-6 h-6" />,
  telegram: <Mail className="w-6 h-6" />,
  instagram: <Users className="w-6 h-6" />,
  youtube: <Video className="w-6 h-6" />,
  twitter: <Twitter className="w-6 h-6" />,
  bluesky: <Globe className="w-6 h-6" />,
  xbox: <Users className="w-6 h-6" />,
  twitch: <Video className="w-6 h-6" />,
  steam: <Users className="w-6 h-6" />,
  github: <ExternalLink className="w-6 h-6" />,
  tiktok: <Video className="w-6 h-6" />,
  ogusers: <Users className="w-6 h-6" />,
}

export default function SocialsPage() {
  const [selectedMinecraft, setSelectedMinecraft] = useState<string | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Social Media
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Find all my social media accounts here. If it&apos;s not listed, it&apos;s fake!
        </p>
      </div>

      {/* Social Accounts Grid */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
          Social Media Accounts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {socialAccounts.map((account) => (
            <a
              key={account.name}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors duration-300">
                  <div className="text-cyan-400">
                    {iconMap[account.icon] || <ExternalLink className="w-6 h-6" />}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{account.name}</h3>
                  <p className="text-sm text-gray-400">{account.username}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-cyan-400 font-medium">
                  {account.name === 'Discord' || account.name === 'Telegram' ? 'Message →' : 
                   account.name === 'YouTube' || account.name === 'Twitch' ? 'Subscribe →' : 'Follow →'}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Minecraft Accounts */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
          Minecraft Accounts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {minecraftAccounts.map((account) => (
            <div
              key={account.username}
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={`https://starlightskins.lunareclipse.studio/render/ultimate/${account.uuid}/bust`}
                    alt={account.username}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">{account.username}</h3>
                <button
                  onClick={() => setSelectedMinecraft(account.username)}
                  className="w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minecraft Modal */}
      {selectedMinecraft && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedMinecraft(null)}
        >
          <button
            onClick={() => setSelectedMinecraft(null)}
            className="absolute top-6 right-6 z-10 text-white hover:text-cyan-400 transition-colors bg-white/10 hover:bg-white/20 rounded-full p-3"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl max-w-2xl w-full border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gradient mb-4">{selectedMinecraft}</h2>
                <div className="relative h-64 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl overflow-hidden">
                  <Image
                    src={`https://mc-heads.net/body/${selectedMinecraft}`}
                    alt={selectedMinecraft}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href={`https://capes.me/${selectedMinecraft}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors duration-300 group"
                >
                  <Image
                    src="/Assets/icon/Capes.me.ico"
                    alt="Capes.me"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span className="text-white font-medium">Capes.me</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                </a>
                
                <a
                  href={`https://laby.net/@${selectedMinecraft}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors duration-300 group"
                >
                  <Image
                    src="https://laby.net/favicon.ico"
                    alt="Laby.net"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span className="text-white font-medium">Laby.net</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                </a>
                
                <a
                  href={`https://namemc.com/profile/${selectedMinecraft}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors duration-300 group"
                >
                  <Image
                    src="https://namemc.com/favicon.ico"
                    alt="NameMC"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span className="text-white font-medium">NameMC</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
