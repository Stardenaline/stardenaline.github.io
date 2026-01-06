'use client'

import { useEffect, useState } from 'react'

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
  const [text, setText] = useState('Awesome!')

  useEffect(() => {
    const randomText = splashTexts[Math.floor(Math.random() * splashTexts.length)]
    setText(randomText)
  }, [])

  return (
    <span className="text-yellow-400 font-mono font-bold text-sm md:text-base animate-float origin-left transform rotate-12 whitespace-nowrap">
      {text}
    </span>
  )
}