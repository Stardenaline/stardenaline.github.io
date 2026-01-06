'use client'

import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('contact.stars.business@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </section>

      <div className="bg-[#1e1e1e] rounded-xl overflow-hidden card-hover border border-[#2a2a2a]">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div>
            <h2 className="text-2xl font-bold text-accent mb-6">Contact Me</h2>
            <p className="text-gray-300 mb-6">
              Email me directly at:
            </p>
            
            <div className="relative">
              <button
                onClick={copyEmail}
                className="w-full px-6 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition-all duration-300 text-left group flex items-center justify-between"
              >
                <span className="font-mono text-sm sm:text-base break-all">
                  contact.stars.business@gmail.com
                </span>
                <Mail className="ml-2 flex-shrink-0" />
              </button>
              
              {copied && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-accent text-black px-3 py-1 rounded-lg text-sm">
                  Copied!
                </div>
              )}
            </div>

            <div className="mt-8 p-4 bg-[#2a2a2a] rounded-lg">
              <p className="text-gray-400">
                I'm always open to new collaborations, projects, or just a friendly chat!
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full animate-pulse-slow"></div>
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <Mail className="w-32 h-32 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
