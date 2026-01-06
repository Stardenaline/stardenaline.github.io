'use client'

import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { splashTexts } from '@/lib/constants'

export default function SplashText() {
  const [currentText, setCurrentText] = useState('Awesome!')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const randomText = splashTexts[Math.floor(Math.random() * splashTexts.length)]
    setCurrentText(randomText)
    
    // Blink animation every 5 seconds
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        const newText = splashTexts[Math.floor(Math.random() * splashTexts.length)]
        setCurrentText(newText)
        setVisible(true)
      }, 200)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
        <span className={`text-yellow-400 font-mono font-bold text-sm md:text-base transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          {currentText}
        </span>
      </div>
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-full blur-sm"></div>
    </div>
  )
}
