'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Copy, Check, ExternalLink, Heart, Coffee, Gift } from 'lucide-react'
import { cryptoAddresses, donationPlatforms } from '@/lib/constants'

export default function DonatePage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const copyToClipboard = async (text: string, name: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedAddress(name)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-cyan-400 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">
            Support My Work
          </h1>
        </div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
          Thank you for considering to support my work! Your donations help me continue creating 
          and improving my projects. Every contribution, no matter how small, is greatly appreciated.
        </p>
        <p className="text-cyan-300">
          (and yeah, I need to pay for the domain 🌐)
        </p>
      </div>

      {/* Platform Donations */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Gift className="w-6 h-6 text-cyan-400" />
          Platform Donations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {donationPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${platform.color} transition-colors duration-300`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-2xl">{platform.name}</h3>
                  <p className="text-gray-400">{platform.description}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{platform.details}</p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                  Donate via {platform.name} →
                </span>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Crypto Donations */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Image
            src="/Assets/CryptoLogo/Bitcoin.png"
            alt="Crypto"
            width={32}
            height={32}
            className="rounded-full"
          />
          Crypto Donations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cryptoAddresses.map((crypto) => (
            <div
              key={crypto.symbol}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src={crypto.logo}
                    alt={crypto.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl">{crypto.name}</h3>
                  <p className="text-gray-400 text-sm">{crypto.symbol}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="bg-white/5 rounded-xl p-4 mb-4 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <Image
                      src={crypto.qrCode}
                      alt={`${crypto.name} QR Code`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <p className="text-sm text-gray-400 mb-2">Wallet Address:</p>
                  <div className="relative">
                    <div
                      className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 rounded-xl p-4 cursor-pointer transition-all duration-300 group"
                      onClick={() => copyToClipboard(crypto.address, crypto.symbol)}
                    >
                      <div className="flex items-center justify-between">
                        <code className="text-sm font-mono text-gray-300 break-all pr-8">
                          {crypto.address}
                        </code>
                        <div className="flex-shrink-0">
                          {copiedAddress === crypto.symbol ? (
                            <Check className="w-5 h-5 text-green-400" />
                          ) : (
                            <Copy className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                          )}
                        </div>
                      </div>
                    </div>
                    {copiedAddress === crypto.symbol && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-3 py-1 rounded-lg text-sm animate-fade-in">
                        Copied!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20">
          <Coffee className="w-6 h-6 text-cyan-400 animate-pulse" />
          <p className="text-gray-300 text-lg">
            More donation methods coming soon! Stay tuned for updates.
          </p>
        </div>
      </div>
    </div>
  )
}
