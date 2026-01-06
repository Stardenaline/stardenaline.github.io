'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ExternalLink } from 'lucide-react'
import { SocialItems, MinecraftAccounts } from '@/lib/constants'

export default function SocialsPage() {
  const [selectedAccount, setSelectedAccount] = useState<typeof MinecraftAccounts[0] | null>(null)

  return (
    <>
      <section className="text-center mb-12 bg-[#1e1e1e] p-8 rounded-xl border-l-4 border-accent">
        <h1 className="text-4xl font-bold text-accent mb-4">Welcome to the Socials</h1>
        <p className="text-lg text-gray-400">
          In this page you can find all social media that Stars has. 
          If it&apos;s not listed here, it&apos;s fake Stars then, so be safe!
        </p>
      </section>

      {/* Social Media */}
      <section className="mb-16">
        <h2 className="section-title text-center mb-8">Social Media Accounts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SocialItems.map((social) => (
            <div
              key={social.name}
              className="bg-[#1e1e1e] p-6 rounded-xl card-hover border border-[#2a2a2a] flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={social.icon}
                  alt={social.name}
                  fill
                  className="object-contain filter grayscale(30%) group-hover:grayscale(0%) transition-all"
                />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-1">{social.name}</h3>
              <p className="text-gray-400 mb-4 break-all">{social.username}</p>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition-all duration-300"
              >
                {social.action}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Minecraft Accounts */}
      <section>
        <h2 className="section-title text-center mb-8">Minecraft Accounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MinecraftAccounts.map((account) => (
            <div
              key={account.username}
              className="bg-[#1e1e1e] p-6 rounded-xl card-hover border border-[#2a2a2a] flex flex-col items-center text-center"
            >
              <div className="w-40 h-40 mb-4 bg-black/20 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={account.skinUrl}
                  alt={account.username}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-accent mb-4">{account.username}</h3>
              <button
                onClick={() => setSelectedAccount(account)}
                className="px-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition-all duration-300"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Minecraft Modal */}
      {selectedAccount && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedAccount(null)}
        >
          <div 
            className="relative bg-[#1e1e1e] rounded-lg max-w-md w-full border border-accent shadow-[0_0_20px_rgba(0,255,255,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAccount(null)}
              className="absolute top-4 right-4 text-gray-300 hover:text-accent"
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              <div className="h-64 bg-black/20 rounded-lg mb-6 flex items-center justify-center">
                <Image
                  src={selectedAccount.skinUrl}
                  alt={selectedAccount.username}
                  width={256}
                  height={256}
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-accent text-center mb-6">
                {selectedAccount.username}
              </h3>
              
              <div className="flex flex-col gap-3">
                <a
                  href={`https://capes.me/${selectedAccount.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Image src="/assets/icon/Capes.me.ico" alt="Capes.me" width={20} height={20} />
                    Capes.me
                  </span>
                  <ExternalLink size={16} />
                </a>
                
                <a
                  href={`https://laby.net/@${selectedAccount.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Image src="https://laby.net/favicon.ico" alt="Laby.net" width={20} height={20} />
                    Laby.net
                  </span>
                  <ExternalLink size={16} />
                </a>
                
                <a
                  href={`https://namemc.com/profile/${selectedAccount.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Image src="https://namemc.com/favicon.ico" alt="NameMC" width={20} height={20} />
                    NameMC
                  </span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
