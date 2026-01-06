'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Copy } from 'lucide-react';
import { CRYPTO_DONATIONS } from '@/lib/constants';
import Link from 'next/link';

export default function DonatePage() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-12">
      {/* Welcome Section */}
      <section className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
          Support My Work
        </h1>
        <p className="text-text-secondary text-lg max-w-3xl mx-auto">
          Thank you for considering to support my work! Your donations help me continue creating 
          and improving my projects. Every contribution, no matter how small, is greatly appreciated 
          and goes directly towards development and maintenance (and yeah, I need to pay for the domain).
        </p>
        <p className="text-text-primary mt-6">
          Wanna donate with another method?{' '}
          <Link href="/contact" className="text-accent hover:underline font-semibold">
            Contact me!
          </Link>
        </p>
      </section>

      {/* Platform Donations */}
      <section>
        <h2 className="section-title">Platform Donations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ko-fi Card */}
          <div className="bg-background-card rounded-xl p-6 border border-pink/30 transition-all duration-300 hover:border-pink hover:shadow-xl hover:shadow-pink/20 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="https://storage.ko-fi.com/cdn/brandasset/kofi_s_logo_nolabel.png"
                  alt="Ko-fi"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-pink">Ko-fi</h3>
            </div>
            <p className="text-text-secondary mb-6">
              Support me with a one-time donation or monthly membership on Ko-fi. 
              You can also leave a message with your donation!
            </p>
            <a
              href="https://ko-fi.com/gemintang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-pink text-white rounded-lg font-semibold transition-all duration-300 hover:bg-transparent hover:text-pink hover:shadow-lg hover:shadow-pink/30 border border-pink"
            >
              Donate via Ko-fi
            </a>
          </div>

          {/* Sociabuzz Card */}
          <div className="bg-background-card rounded-xl p-6 border border-blue/30 transition-all duration-300 hover:border-blue hover:shadow-xl hover:shadow-blue/20 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="https://storage.sociabuzz.com/storage/landingpage/img/sociabuzz-logo-icon.png"
                  alt="Sociabuzz"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue">Sociabuzz</h3>
            </div>
            <p className="text-text-secondary mb-6">
              Support my work through Sociabuzz, a platform for creators. 
              You can send tips or become a supporter with exclusive benefits.
            </p>
            <a
              href="https://sociabuzz.com/starry/tribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue text-white rounded-lg font-semibold transition-all duration-300 hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/30 border border-blue"
            >
              Donate via Sociabuzz
            </a>
          </div>
        </div>
      </section>

      {/* Crypto Donations */}
      <section>
        <h2 className="section-title">Crypto Donations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CRYPTO_DONATIONS.map((crypto) => (
            <div
              key={crypto.name}
              className="bg-background-card rounded-xl p-6 border border-accent/10 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={crypto.logo}
                    alt={crypto.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-accent">{crypto.name}</h3>
              </div>
              
              <div className="flex justify-center mb-4">
                <div className="relative w-48 h-48">
                  <Image
                    src={crypto.qrCode}
                    alt={`${crypto.name} QR Code`}
                    fill
                    className="object-contain border border-accent/20 rounded-lg"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-text-secondary text-sm mb-2">Wallet Address:</p>
                <div className="relative">
                  <div
                    className="bg-accent/10 p-4 rounded-lg border border-accent/20 font-mono text-sm break-all cursor-pointer transition-all duration-300 hover:bg-accent/20 hover:border-accent group"
                    onClick={() => handleCopyAddress(crypto.address)}
                  >
                    {crypto.address}
                    <Copy className="inline-block ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {copiedAddress === crypto.address && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-accent-dark text-white px-3 py-1 rounded-md text-sm">
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
      <section className="text-center py-8">
        <div className="bg-background-card rounded-xl p-8 border border-dashed border-accent/30">
          <p className="text-text-secondary text-xl italic animate-pulse">
            More donation methods coming soon! Stay tuned for updates.
          </p>
        </div>
      </section>
    </div>
  );
}
