'use client'

import { useState } from 'react'
import { Mail, Send, Check, Copy } from 'lucide-react'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const email = 'contact.stars.business@gmail.com'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you!
        </p>
      </div>

      {/* Contact Card */}
      <div className="glass-effect rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1">
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Side - Text */}
            <div className="flex-1">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Email Me</h2>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">
                  Feel free to reach out for collaborations, projects, or just a friendly chat!
                </p>
                
                <div className="mb-8">
                  <p className="text-sm text-gray-400 mb-3">Email address:</p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-mono break-all">{email}</span>
                      </div>
                    </div>
                    <button
                      onClick={copyEmail}
                      className="p-4 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-xl transition-colors duration-300"
                      aria-label="Copy email"
                    >
                      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Compose Email
                </a>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 flex items-center justify-center">
                    <Mail className="w-32 h-32 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <p className="text-gray-400">
          I typically respond within 24-48 hours. Looking forward to connecting with you! ✨
        </p>
      </div>
    </div>
  )
}
