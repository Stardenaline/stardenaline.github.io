'use client'

import { useState, useEffect } from 'react'

const splashTexts = [
  "100% Made by AI",
  "Hacked by Lampuss",
  "Minecon 2019",
  "Croisssants 🥐",
  "Try CTRL + F4",
  "Wreeper is the K I N G !",
  "Made with ❤️"
]

export default function SplashText() {
  const [currentText, setCurrentText] = useState('')

  useEffect(() => {
    const randomText = splashTexts[Math.floor(Math.random() * splashTexts.length)]
    setCurrentText(randomText)
  }, [])

  return (
    <div className="absolute -top-2 right-0 z-10">
      <div className="text-yellow-500 font-bold text-sm rotate-12 animate-float">
        {currentText}
      </div>
    </div>
  )
}
