'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Copy, ExternalLink } from 'lucide-react'
import { CryptoDonations } from '@/lib/constants'

export default function DonatePage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address)
    setCopiedAddress(address)
    setTimeout(() => setCopiedAddress(null), 2000)
  }

  return (
    <>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Support My Work</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
          Thank you for considering to support my work! Your donations help me continue creating and improving my projects. 
          Every contribution, no matter how small, is greatly appreciated and goes directly towards development and maintenance.
        </p>
        <p className="text-accent">
          (and yeah, i need pay for the domain).
        </p>
      </section>

      {/* Platform Donations */}
      <section className="mb-16">
        <h2 className="section-title mb-8">Platform Donations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ko-fi */}
          <div className="bg-[#1e1e1e] p-6 rounded-xl border border-[#ff5e9a]/30 hover:border-[#ff5e9a] transition-all duration-300 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative mr-4">
                <Image
                  src="https://storage.ko-fi.com/cdn/brandasset/kofi_s_logo_nolabel.png"
                  alt="Ko-fi"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#ff5e9a]">Ko-fi</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Support me with a one-time donation or monthly membership on Ko-fi. 
              You can also leave a message with your donation!
            </p>
            <a
              href="https://ko-fi.com/gemintang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#ff5e9a] text-white rounded-lg hover:bg-[#ff5e9a]/80 transition-colors"
            >
              Donate via Ko-fi
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>

          {/* Sociabuzz */}
          <div className="bg-[#1e1e1e] p-6 rounded-xl border border-[#29abe2]/30 hover:border-[#29abe2] transition-all duration-300 card-hover">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative mr-4">
                <Image
                  src="https://storage.sociabuzz.com/storage/landingpage/img/sociabuzz-logo-icon.png"
                  alt="Sociabuzz"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#29abe2]">Sociabuzz</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Support my work through Sociabuzz, a platform for creators. 
              You can send tips or become a supporter with exclusive benefits.
            </p>
            <a
              href="https://sociabuzz.com/starry/tribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#29abe2] text-white rounded-lg hover:bg-[#29abe2]/80 transition-colors"
            >
              Donate via Sociabuzz
              <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Crypto Donations */}
      <section className="mb-16">
        <h2 className="section-title mb-8">Crypto Donations</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {CryptoDonations.map((crypto) => (
            <div key={crypto.name} className="bg-[#1e1e1e] p-6 rounded-xl card-hover border border-[#2a2a2a]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  <Image
                    src={crypto.logo}
                    alt={crypto.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-accent">{crypto.name}</h3>
              </div>
              
              <div className="flex justify-center mb-4">
                <div className="w-48 h-48 bg-white p-2 rounded-lg">
                  <Image
                    src={crypto.qrCode}
                    alt={`${crypto.name} QR Code`}
                    width={192}
                    height={192}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Wallet Address:</p>
                <div className="relative">
                  <button
                    onClick={() => copyToClipboard(crypto.address)}
                    className="w-full px-4 py-3 bg-[#2a2a2a] rounded-lg text-sm font-mono break-all text-left hover:bg-[#333] transition-colors group"
                  >
                    {crypto.address}
                    <Copy className="absolute right-3 top-3 text-gray-400 group-hover:text-accent" size={16} />
                  </button>
                  
                  {copiedAddress === crypto.address && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent text-black px-3 py-1 rounded-lg text-sm">
                      Copied!
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <div className="bg-[#1e1e1e] p-8 rounded-xl border border-dashed border-accent/30 text-center">
        <p className="text-gray-400 text-lg animate-pulse">
          More donation methods coming soon! Stay tuned for updates.
        </p>
      </div>
    </>
  )
}
